import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'aa', body: 'jj' },
    { id: 2, title: 'dd 2', body: 'ss' },
    { id: 3, title: 'bb 3', body: 'ee' },
  ]);
  const [selectedFilter, setSelectedFilter] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  };

  // Receiving post from child component
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const filterPosts = (filter) => {
    setSelectedFilter(filter);
    setPosts([...posts].sort((a, b) => a[filter].localeCompare(b[filter])));
  }


  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect
          value={selectedFilter}
          onChange={filterPosts}
          defaultValue="Filters"
          options={[
            {value: 'title', name: 'Name'},
            {value: 'body', name: 'Description'},
          ]}
        />
      </div>
      {posts.length
        ?
        <PostList remove={removePost} posts={posts} title="Posts about JS" />
        :
        <h1 style={{ textAlign: 'center' }}>
          Posts not found
        </h1>
      }
    </div>
  );
}

export default App;
