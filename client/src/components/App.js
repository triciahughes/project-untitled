import { Route } from "react-router-dom";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import Groups from "./Groups";
import HostGroup from "./HostGroup";
import MemberGroup from "./MemberGroup";
import { useHistory } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

function App() {
  const [user, setUser] = useState([]);
  const [hostGroups, setHostGroups] = useState([]);
  const [memberGroups, setMemberGroups] = useState([]);
  const history = useHistory();

  const userFetch = useCallback(fetchUser, [history]);

  useEffect(() => {
    userFetch();
  }, [userFetch]);

  function fetchUser() {
    fetch("/authorized").then((res) => {
      if (res.ok) {
        res.json().then((userData) => {
          setUser(userData);
          fetchGroups(userData);
          // history.push("/"); -- Had to remove this or else it would push back to the main page even when you went to a different link.
        });
      } else {
        setUser([]);
        history.push("/signin");
      }
    });
  }

  function fetchGroups(userData) {
    fetch(`/host/${userData.id}`)
      .then((res) => res.json())
      .then((groupData) => setHostGroups(groupData));

    fetch(`/membership/${userData.id}`)
      .then((res) => res.json())
      .then((groupData) => setMemberGroups(groupData));
  }

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      setUser([]);
      setHostGroups([]);
      setMemberGroups([]);
      fetchUser();
      history.push("/signin");
    });
  }

  return (
    <>
      <Route path="/signin">
        <SignInForm setUser={setUser} fetchUser={fetchUser} />
      </Route>
      <Route path="/signup">
        <SignUpForm />
      </Route>
      <Route exact path="/">
        <button className="sign-out" onClick={handleLogout}>
          Log Out
        </button>
        <h1>Welcome, {user.first_name}!</h1>
        <Groups hostGroups={hostGroups} memberGroups={memberGroups} />
      </Route>
      <Route path="/host_group/:groupId">
        <HostGroup user={user} />
      </Route>
      <Route path="/member_group/:groupId">
        <MemberGroup user={user} />
      </Route>
    </>
  );
}
export default App;
