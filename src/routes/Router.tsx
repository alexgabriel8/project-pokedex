import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Root from "./Root/Root";
import WelcomePage from "./outlet-routes/Welcome/Welcome";
import PokemonDetails from "./outlet-routes/PokemonDetails/PokemonDetails";

import Error from "./error-routes/Error";
import NotFound from "./error-routes/NotFound";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route path="*" element={<NotFound />} />
      <Route index element={<WelcomePage />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
    </Route>,
  ),
);

export default Router;
