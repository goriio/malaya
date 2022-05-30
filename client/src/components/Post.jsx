import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { formatDate } from '../utils/date';

const StyledPost = styled.article`
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #e2e2e2;
  border-radius: 0.5rem;
  transition: 200ms ease;

  &:hover {
    border-color: #474747;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Author = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

const Date = styled.span`
  font-size: 0.8rem;
  color: #474747;
`;

const Content = styled.p`
  font-size: 1rem;
`;

const CommentsCount = styled.span`
  display: inline-block;
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #474747;
`;

export function Post({ post }) {
  const element = (
    <StyledPost>
      <Header>
        <Author>{post.author}</Author>
        <Date>{formatDate(post.date)}</Date>
      </Header>
      <Content>{post.content}</Content>
      {post.comments && (
        <CommentsCount>
          {post.comments.length.toLocaleString()}{' '}
          {post.comments.length > 1 ? 'comments' : 'comment'}
        </CommentsCount>
      )}
    </StyledPost>
  );

  if (!post.comments) return element;

  return (
    <Link
      to={`/posts/${post._id}`}
      style={{ textDecoration: 'none', color: 'unset' }}
    >
      {element}
    </Link>
  );
}
