import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ]);


  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Post name"/>
        <input type="text" placeholder="Post description"/>
        <button>Create post</button>
      </form>
      <PostList posts={posts} title="Posts about JS" />
    </div>
  );
}

export default App;
