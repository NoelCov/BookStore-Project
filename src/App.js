import Header from "./components/Header";
import BookList from "./components/BookList";
import Payment from "./components/Payment";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <BookList  /> 
        </Route>
        <Route exact path="/Payment">
          <Payment />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
