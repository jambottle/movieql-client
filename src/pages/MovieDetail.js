import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(movieId: $movieId) {
      id
      title
      rating
      medium_cover_image
      isLiked @client
    }
  }
`;

export default function MovieDetail() {
  const { id } = useParams();

  const {
    loading,
    data,
    client: { cache },
  } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });

  const handleClick = () => {
    cache.writeFragment({
      id: `Movie:${id}`,
      fragment: gql`
        fragment MovieFragment on Movie {
          isLiked
        }
      `,
      data: {
        isLiked: !data.movie.isLiked,
      },
    });
  };

  return (
    <Container>
      <Header>
        <Title>{loading ? 'Loading...' : `${data.movie?.title}`}</Title>
        <Subtitle>⭐️ {data?.movie?.rating}</Subtitle>
        <button onClick={handleClick}>
          {data?.movie?.isLiked ? 'Unlike' : 'Like'}
        </button>
      </Header>

      <Poster background={data?.movie?.medium_cover_image} />
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  color: white;
`;

const Header = styled.header`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  margin-bottom: 15px;
  font-size: 65px;
`;

const Subtitle = styled.h4`
  margin-bottom: 10px;
  font-size: 35px;
`;

const Poster = styled.figure`
  width: 25%;
  height: 60%;
  border-radius: 7px;

  background-color: transparent;
  background-image: url(${props => props.background});
  background-position: center center;
  background-size: cover;
`;
