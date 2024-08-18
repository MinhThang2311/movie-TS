import MovieDetail from "../pages/MovieDetail";
import MovieList from "../pages/MovieList";
export const publicRoutes = [
  { path: "/", component: MovieList },
  { path: "/movie/:id", component: MovieDetail },
];

export const privateRoutes = [];

export default { publicRoutes, privateRoutes };
