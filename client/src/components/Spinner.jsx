import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }

`;

export const Spinner = styled.div`
  margin: 1rem auto;
  width: 12px;
  padding: 12px;
  border: 6px solid #e2e2e2;
  border-top-color: #000;
  border-radius: 50%;
  animation: ${spin} 700ms linear infinite;
`;
