import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MovieList from './pages/MovieApp/MovieList';
import MovieDetail from './pages/MovieApp/MovieDetail';

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
