import { useEffect } from "react";
import { Route } from "react-router-dom";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import Groups from "./Groups";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([]);
  const [hostGroups, setHostGroups] = useState([]);
  const [memberGroups, setMemberGroups] = useState([])
  const history = useHistory();

  useEffect(() => {
    fetchUser();
  }, [setUser]);

  function fetchUser() {
    fetch("/authorized").then((res) => {
      if (res.ok) {
        res.json().then((userData) => {
          setUser(userData);
          fetchGroups(userData);
          history.push("/");
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
      .then((groupData) => setMemberGroups(groupData))
  }

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      setUser([]);
      setHostGroups([]);
      setMemberGroups([])
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
        <h1>Hello, you're on the homepage!!!!</h1>
        <Groups hostGroups={hostGroups} memberGroups={memberGroups} />
      </Route>
    </>
  );
}
export default App;
