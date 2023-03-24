import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>
      <Route path="/signin">
        <h1>Hello, you're on the signin page!</h1>
      </Route>
      <Route exact path="/">
        <h1>Hello, you're on the homepage!</h1>
      </Route>
    </>
  )
}
export default App;
