import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {ThemeProvider} from "@material-ui/styles";
import theme from "./ui/Theme";

import Header from "./ui/Header";
import Home from "./pages/Home";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={Home}/>
                    <Redirect to={"/"}/>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
