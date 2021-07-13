import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";

export default function(){
    return (
        <Router>
            <Switch>
                <Route name="/" component={HomePage}/>
            </Switch>
        </Router>
    )
}