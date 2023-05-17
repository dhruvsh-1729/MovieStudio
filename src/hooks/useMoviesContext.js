import React, {useContext} from 'react';
import MoviesContext from '../context/MovieContext';

export const useMoviesContext = () => {
    const movieContext = React.useContext(MoviesContext);
    if (movieContext === undefined) {
      throw new Error('useOnboardingContext must be inside a OnboardingProvider');
    }
    return movieContext;
  };