import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./containers/home/Home";
import "./App.scss";

export class AppRoutes extends React.Component<any> {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        );
    }
}
