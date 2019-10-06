import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import routes from '../router/routes'
import TopNavMenu from './ui/menu/TopNavMenu';

export default class RouterView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: routes
        }
    }

    render() {
        let definedRoutes = this.state.routes.map((item) => {
            return <Route path={item.path} exact component={item.component} key={item.path}/>
        });
        return (
            <Router>
                <TopNavMenu items={this.state.routes}/>
                {definedRoutes}
            </Router>
        )
    }
}