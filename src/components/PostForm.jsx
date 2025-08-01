import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (e) => {
        e.preventDefault(); // to stop page updating when pressing the button
        const newPost = {
            ...post, id: Date.now()
        };
        create(newPost);
        setPost({ title: '', body: '' });
    };


    return (
        <form>
            {/* Controlled Component: useState */}
            <MyInput
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder="Post name"
            />
            {/* Non-controlled Component: useRef, ref as props and React.forwardRef() */}
            <MyInput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder="Post description"
            />
            <MyButton type="submit" onClick={addNewPost}>Create post</MyButton>
        </form>
    );
};

export default PostForm;