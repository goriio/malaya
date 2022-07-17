import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../components/Post';
import { PostForm } from '../components/PostForm';
import { Spinner } from '../components/Spinner';
import { api } from '../lib/axios';

export function PostDetails() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [newComment, setNewComment] = useState(null);

  const getPost = async () => {
    const post = await api.get(`/posts/${id}`);
    setPost(post.data);
  };

  useEffect(() => {
    getPost();
  }, [newComment]);

  const addComment = async (comment) => {
    await api.patch(`/posts/${id}`, {
      ...post,
      comments: [comment, ...post.comments],
    });
    setNewComment(comment);
    setPost({ ...post, comments: [...post.comments, comment] });
  };

  if (!post) return <Spinner />;

  return (
    <>
      <Post post={post} />
      <PostForm onSubmit={addComment} submitLabel="Comment" />
      {post.comments &&
        post.comments
          .map((comment) => <Post key={comment._id} post={comment} />)
          .reverse()}
    </>
  );
}
