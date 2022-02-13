const API_KEY = '4a61d3620ee71d7af49f9069e0219a8a';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
  const request = await fetch(`${API_BASE}${endpoint}`);
  const json = await request.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Only on Netflix',
        items: await basicFetch(
          `/discover/tv?with_network=213&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'trending',
        title: 'Trending Now',
        items: await basicFetch(`/trending/all/week?api_key=${API_KEY}`),
      },
      {
        slug: 'top-rated',
        title: 'Popular on Netflix',
        items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}`),
      },
      {
        slug: 'action',
        title: 'Action & Adventure',
        items: await basicFetch(
          `/discover/movie?with_genres=28&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'comedy',
        title: 'Comedies',
        items: await basicFetch(
          `/discover/movie?with_genres=35&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'horror',
        title: 'Horror Movies',
        items: await basicFetch(
          `/discover/movie?with_genres=27&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'romance',
        title: 'Romantic Movies',
        items: await basicFetch(
          `/discover/movie?with_genres=10749&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'documentary',
        title: 'Documentaries',
        items: await basicFetch(
          `/discover/movie?with_genres=99&api_key=${API_KEY}`
        ),
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case 'movie':
          info = await basicFetch(`/movie/${movieId}?api_key=${API_KEY}`);
          break;
        case 'tv':
          info = await basicFetch(`/tv/${movieId}?api_key=${API_KEY}`);
          break;
        default:
          info = {};
      }
    }

    return info;
  },
};
