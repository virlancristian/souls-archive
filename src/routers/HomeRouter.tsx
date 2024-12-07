import { RouteObject } from "react-router-dom";
import { HomeComponent } from "../components/home/HomeComponent";

export const homeRouter: RouteObject = {
    path: '/',
    element: <HomeComponent />
}