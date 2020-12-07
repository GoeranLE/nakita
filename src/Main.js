import React from 'react';
import App from './App';
import Intro from './assets/components/Intro';
import NotFound from './assets/components/NotFound';
import { Switch, Route } from "react-router-dom";

const Main = () => {

    return (
<Switch>
        <Route path="/home" component={App} />
        <Route path="/404" component={NotFound} />
        <Route path="/" component={Intro} />
</Switch>
)
}
export default Main;