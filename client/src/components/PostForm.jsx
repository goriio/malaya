import { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  margin: 1rem 0;
`;

const InputWrapper = styled.div`
  margin: 1rem 0;
`;

const TextInput = styled.input.attrs({ type: 'text' })`
  width: 100%;
  padding: 1rem;
  border: 1px solid #e2e2e2;
  border-radius: 0.5rem;
  font-size: 1rem;

  &:focus {
    outline: 1px solid #474747;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #e2e2e2;
  border-radius: 0.5rem;
  resize: none;

  &:focus {
    outline: 1px solid #474747;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  background: black;
  color: #f2f2f2;
  transition: 200ms ease;

  &:focus {
    opacity: 90%;
  }

  &:active {
    transform: translateY(0.25rem);
  }
`;

export function PostForm({ onSubmit, submitLabel }) {
  const [author, setAuthor] = useState(localStorage.getItem('author') || '');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ author: author?.trim() || undefined, content: content.trim() });
    author
      ? localStorage.setItem('author', author.trim())
      : localStorage.removeItem('author');
    setContent('');
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputWrapper>
        <TextInput
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          placeholder="Name (Optional)"
          aria-label="Name"
        />
      </InputWrapper>
      <InputWrapper>
        <TextArea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Your message here"
          aria-label="message"
          required
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button type="submit">{submitLabel || 'Submit'}</Button>
      </ButtonWrapper>
    </FormWrapper>
  );
}
