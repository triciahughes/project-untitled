import { Route, Switch } from "react-router-dom";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

function App() {
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
