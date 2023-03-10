import { createAction, props } from '@ngrx/store';
import { IMovie, IMovieItem } from 'src/app/types';

export const searchMovies = createAction(
  '[Movies] Search Movies',
  props<{ searchTerm: string }>()
);

export const searchMoviesSuccess = createAction(
  '[Movies] Search Movies Success',
  props<{ searchResults: IMovieItem[], error: null }>()
);

export const searchMoviesFailure = createAction(
  '[Movies] Search Movies Failure',
  props<{ searchResults: [], error: 'Search movies failed' }>()
);

export const addToFavorites = createAction(
  '[Movies] Add To Favorites',
  props<{ movie: IMovie }>()
);

export const removeFromFavorites = createAction(
  '[Movies] Remove From Favorites',
  props<{ movieId: string }>()
);

export const searchMovieById = createAction(
  '[Movies] Fetch Movie By Id',
  props<{ movieId: string }>()
);

export const searchMovieByIdSuccess = createAction(
  '[Movies] Fetch Movie By Id Success',
  props<{ movie: IMovie }>()
);

export const searchMovieByIdFailure = createAction(
  '[Movies] Fetch Movie By Id Failure',
  props<{ error: 'Fetch movie by id failed' }>()
);

export const selectMovieById = createAction(
  '[Movies] Select Movie By Id',
  props<{ movieId: string }>()
);

export const updateMovie = createAction(
  '[Movies] Update Movie',
  props<{ movie: IMovie }>()
);
