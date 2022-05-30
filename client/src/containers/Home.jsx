import { useEffect, useState } from 'react';
import { PostForm } from '../components/PostForm';
import { Post } from '../components/Post';
import { api } from '../lib/axios';

export function Home() {
  const [posts, setPosts] = useState(null);
  const [newPost, setNewPost] = useState(null);

  const getPosts = async () => {
    const posts = await api.get('/posts');
    setPosts(posts.data.sort((a, b) => b - a));
  };

  useEffect(() => {
    getPosts();
  }, [newPost]);

  const addPost = async (post) => {
    const newPost = await api.post('/posts', post);
    setNewPost(newPost);
    setPosts((current) => [newPost, ...current]);
  };

  return (
    <>
      <PostForm onSubmit={addPost} submitLabel="Post" />

      <h2>Posts</h2>
      {posts ? (
        posts.length ? (
          posts.map((post) => <Post key={post._id} post={post} />)
        ) : (
          <div>No content</div>
        )
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
