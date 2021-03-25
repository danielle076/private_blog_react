import React from "react";
import {useParams} from "react-router-dom";
import data from "../data/posts.json"

function Blog() {
    const {id} = useParams();
    console.log("DATA:", data);
    const posts = data.find(p => p.id === id);

    return (
        <div className="App">
            {posts && (
                <>
                    <h1>{posts.title}</h1>
                    <div>{posts.date}</div>
                    <p>{posts.content}</p>
                </>
            )}
        </div>
    );
}

export default Blog;