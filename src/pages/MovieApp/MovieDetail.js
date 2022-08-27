import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(movieId: $movieId) {
      id
      title
    }
  }
`;

function MovieDetail() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });

  return (
    <main>
      {loading && (
        <aside>
          <span>Loading...</span>
        </aside>
      )}

      {error && (
        <aside>
          <span>Failed to fetch.</span>
        </aside>
      )}

      <section>
        <h1>{data?.movie.title}</h1>
      </section>
    </main>
  );
}

export default MovieDetail;
