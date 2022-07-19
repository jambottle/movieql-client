import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MovieList from './pages/MovieSmiley/MovieList';
import MovieDetail from './pages/MovieSmiley/MovieDetail';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<MovieList />} />
        <Route exact path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
