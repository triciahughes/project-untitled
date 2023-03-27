import { useEffect } from "react";
import { Route } from "react-router-dom";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import Groups from "./Groups";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [groups, setGroups] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchUser();
    console.log("test");
    // fetchGroups();
  }, []);

  const fetchUser = () => {
    console.log("Fetch User happening");
    fetch("/authorized").then((res) => {
      if (res.ok) {
        res
          .json()
          .then(
            (user) => setUser(user),
            console.log(user.id),
            fetchGroups(user.id)
          );
      } else {
        setUser(null);
        history.push("/signin");
      }
    });
  };

  const fetchGroups = () => {
    console.log("Fetch Groups happening");
    fetch(`/host/9`)
      .then((res) => res.json())
      .then((groupData) => setGroups(groupData), console.log(groups));
  };

  // useEffect(() => {
  //   fetch("/authorized").then((res) => {
  //     if (res.ok) {
  //       res.json().then((user) => setUser(user), console.log(user));
  //     } else {
  //       setUser(null);
  //       history.push("/signin");
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   fetch(`/host/${user.id}`)
  //     .then((res) => res.json())
  //     .then((data) => setGroups(data));
  // }, []);

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    })
      .then(setUser(null))
      .then(history.push("/signin"));
  }

  return (
    <>
      <Route path="/signin">
        <SignInForm setUser={setUser} />
      </Route>
      <Route path="/signup">
        <SignUpForm />
      </Route>
      <Route exact path="/">
        <h1>Hello, you're on the homepage!!!!</h1>
        <button className="input-btn" onClick={handleLogout}>
          Log Out
        </button>
        <Groups user={user} groups={groups} />
      </Route>
    </>
  );
}
export default App;
