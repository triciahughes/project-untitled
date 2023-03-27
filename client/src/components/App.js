import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetch("/authorized").then((res) => {
      if (res.ok) {
        res
          .json()
          .then((user) => setUser(user), console.log("session working"));
      } else {
        setUser(null);
        history.push("/signin");
      }
    });
  }, []);

  return (
    <>
      <Route path="/signin">
        <SignInForm />
      </Route>
      <Route path="/signup">
        <SignUpForm />
      </Route>
      <Route exact path="/">
        <h1>Hello, you're on the homepage!</h1>
      </Route>
    </>
  );
}
export default App;
