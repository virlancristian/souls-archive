import { createBrowserRouter, DataRouter } from "react-router-dom";

import { homeRouter } from "./HomeRouter";

export const router: DataRouter = createBrowserRouter([
    homeRouter
]);