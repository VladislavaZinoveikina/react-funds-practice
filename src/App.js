import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ]);
  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault(); // to stop page updating when pressing the button
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''});
  };


  return (
    <div className="App">
      <form>
        {/* Controlled Component: useState */}
        <MyInput
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="Post name"
        />
        {/* Non-controlled Component: useRef, ref as props and React.forwardRef() */}
        <MyInput
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text"
          placeholder="Post description"
        />
        <MyButton type="submit" onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title="Posts about JS" />
    </div>
  );
}

export default App;
