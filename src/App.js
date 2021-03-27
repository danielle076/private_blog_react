import React, {useState} from 'react';
import {
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import './App.css';
import Home from "./components/Home"
import Login from "./components/Login";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    {isAuthenticated === true &&
                    <li>
                        <Link to="/login">Login</Link>
                    </li>}
                </ul>
            </nav>
            <nav>
                <ul>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li>
                        <Link to="/blogpost">BlogPost</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/login">
                    {isAuthenticated === true
                        ?  <Login/>
                        : <Redirect to="/"/>}
                </Route>
                <Route exact path="/blog/:id">
                    <Blog/>
                </Route>
                <Route path="/blogpost">
                    <BlogPost/>
                </Route>
            </Switch>

        </>
    );
}

export default App;