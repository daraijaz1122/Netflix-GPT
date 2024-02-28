export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ import.meta.env.VITE_TMDB_KEY
    }
  };

export const IMAGE_CDN ="https://image.tmdb.org/t/p/w400" 