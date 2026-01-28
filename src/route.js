import { createBrowserRouter } from "react-router-dom";
import LandingPageLayout from "./Pages/Landingpages/LandingPageLayout";
import Home from "./Pages/Landingpages/Home";
import About from "./Pages/Landingpages/About";
import AuthCompo from "./Pages/Auth/AuthCompo";
import Register from "./Pages/Auth/Register";
import Signin from "./Pages/Auth/Signin";
import DataFetch from "./components/DataFetch";
import Blogs from "./blogs";

export const route = createBrowserRouter([
    {
        path: '/',
        Component: LandingPageLayout,
        children: [
            {index: true, Component: Home},
            {path: 'about', Component: About},
            {path: 'blog', Component: Blogs},
            {path: 'datafetch', Component: DataFetch}
        ]
    },
    {
       path: '/auth',
       Component: AuthCompo,
       children: [
        {index: true, Component: Register},
        {path: 'signin', Component: Signin}
       ]
    }
])