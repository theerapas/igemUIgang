import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateTaskPage from "./pages/CreateTaskPage";
import Home from "./pages/Home"; // Assuming you already have a Home page

const App2: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" Component={Home} />
        <Route path="/new" Component={CreateTaskPage} />{" "}
        {/* Route for the new page */}
        {/* Add more routes for other pages if needed */}
      </Switch>
    </Router>
  );
};

export default App2;
