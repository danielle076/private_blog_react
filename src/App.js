import React, {useState} from 'react';
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
            <Home/>
            <Login/>
            <Blog/>
            <BlogPost/>
        </>
    );
}

export default App;
