import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export function MainLayout() {
  return (
    <Container>
      <Header>
        <h1>
          <Link to="/" style={{ color: 'unset' }}>
            Malaya
          </Link>
        </h1>
        <a
          href="https://github.com/goriio/malaya"
          rel="noopener nereferrer"
          target="_blank"
        >
          GitHub
        </a>
      </Header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
