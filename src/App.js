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
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  function getSortedPosts() {
    console.log('FUNCTION SORTED POSTS WORKED');
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  };

  const sortedPosts = getSortedPosts();

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  };

  // Receiving post from child component
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }


  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search for..."
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Filters"
          options={[
            { value: 'title', name: 'Name' },
            { value: 'body', name: 'Description' },
          ]}
        />
      </div>
      {posts.length
        ?
        <PostList remove={removePost} posts={sortedPosts} title="Posts about JS" />
        :
        <h1 style={{ textAlign: 'center' }}>
          Posts not found
        </h1>
      }
    </div>
  );
}

export default App;
