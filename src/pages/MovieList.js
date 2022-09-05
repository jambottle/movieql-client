import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GET_ALL_MOVIES = gql`
  query getAllMovies {
    allMovies {
      id
      title
      medium_cover_image
    }
  }
`;

export default function MovieList() {
  const { loading, data } = useQuery(GET_ALL_MOVIES);

  return (
    <Container>
      <Header>
        <Title>Apollo Movies</Title>
      </Header>

      {loading && <Loading>Loading...</Loading>}

      <MovieGrid>
        {data?.allMovies?.map(movie => (
          <MovieItem key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <Poster background={movie.medium_cover_image} />
            </Link>
          </MovieItem>
        ))}
      </MovieGrid>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 45vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  color: white;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 60px;
  font-weight: 600;
`;

const Loading = styled.aside`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 500;
  opacity: 0.5;
`;

const MovieGrid = styled.section`
  position: relative;
  top: -50px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
`;

const MovieItem = styled.article`
  width: 100%;
  height: 400px;
  border-radius: 7px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const Poster = styled.figure`
  width: 100%;
  height: 100%;
  border-radius: 7px;

  background-color: transparent;
  background-image: url(${props => props.background});
  background-position: center center;
  background-size: cover;
`;
