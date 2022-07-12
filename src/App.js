import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MovieList from './pages/MovieSmiley/MovieList';
import MovieDetail from './pages/MovieSmiley/MovieDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MovieList />} />
        <Route exact path="/movie" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
