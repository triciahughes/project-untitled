import { Route } from "react-router-dom";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import Groups from "./Groups";

import HostGroup from "./HostGroup";
import MemberGroup from "./MemberGroup";
import Header from "./Header";

import { useHistory } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

function App() {
  const [user, setUser] = useState({});
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
      <Header user={user} onLogout={handleLogout}/>
      <Route path="/signin">
        <SignInForm setUser={setUser} fetchUser={fetchUser} />
      </Route>
      <Route path="/signup">
        <SignUpForm />
      </Route>
      <Route exact path="/">
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
