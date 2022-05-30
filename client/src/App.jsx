import { Home } from './containers/Home';
import { GlobalStyle } from './styles/GlobalStyle';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { PostDetails } from './containers/PostDetails';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="posts/:id" element={<PostDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
