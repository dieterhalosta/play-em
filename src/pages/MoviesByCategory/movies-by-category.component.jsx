import React, {
  useState,
  useEffect,
  useReducer,
  useRef,
  useCallback,
} from "react";
import {
  PageContainer,
  TitleContainer,
  Title,
  ItemsContainer,
  Items,
  MovieCard,
} from "./movies-by-category.style";
import { getMoviesByCategory } from "../../movieApi/movieApi.utils";
import Spinner from "../../components/spinner/spinner.component";

export const renderMovies = (movies) => {
  return movies.map((item) => {
    return (
      <Items key={item.id}>
        <MovieCard to={`asset/${item.id}`}>
          <img
            className='className="card-img-top" '
            alt={item.title}
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
          />
        </MovieCard>
      </Items>
    );
  });
};

const MovieByCategory = (props) => {
  const [element, setElement] = useState(null);
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      movies: [],
      errorMessage: "",
      loading: false,
      page: 0,
      hasMore: true,
    }
  );

  const { categoryId } = props.match.params;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadMore = useCallback(() => {
    if (state.hasMore) {
      setState({ loading: true, errorMessage: "" });
      getMoviesByCategory(categoryId, state.page + 1)
        .then((data) => {
          setState({
            loading: false,
            movies: state.movies.concat(data.results),
            page: data.page,
            hasMore:
              state.movies.length + data.results.length < data.total_results,
          });
          console.log(state);
        })
        .catch((error) => {
          setState({
            loading: false,
            errorMessage: error,
          });
        });
    }
  });

  const loader = useRef(loadMore);
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          loader.current();
        }
      },
      { threshold: 1 }
    )
  );

  useEffect(() => {
    loader.current = loadMore;
  }, [loadMore]);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  return (
    <PageContainer>
      <TitleContainer>
        <Title>Movie List</Title>
      </TitleContainer>
      <ItemsContainer>
        {renderMovies(state.movies)}
        <div ref={setElement}>
          {state.loading ? <Spinner /> : null}
          {state.errorMessage ? (
            <Spinner message={`${state.errorMessage}`} />
          ) : null}
        </div>
      </ItemsContainer>
    </PageContainer>
  );
};

export default MovieByCategory;
