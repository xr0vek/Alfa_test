import "@app/style/normilize.scss";
import "@app/style/index.scss";
import { AppRouter } from "@app/router/AppRouter";
import { useAppDispatch } from "./redux/hooks";
import { fetchMovieList } from "@features/movie";

function App() {
  const dispatch = useAppDispatch();
  dispatch(fetchMovieList());
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
