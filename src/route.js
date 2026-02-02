import { createBrowserRouter } from "react-router-dom";
import LandingPageLayout from "./Pages/Landingpages/LandingPageLayout";
import Home from "./Pages/Landingpages/Home";
import About from "./Pages/Landingpages/About";
import AuthCompo from "./Pages/Auth/AuthCompo";
import Register from "./Pages/Auth/Register";
import Signin from "./Pages/Auth/Signin";
import DataFetch from "./components/DataFetch";
import Blogs from "./Pages/blogs";
import CreateBlog from "./Pages/blogs/CreateBlog";
import SingleBlog from "./Pages/blogs/SingleBlog";
import Cars from "./Pages/Cars";
import CreateCar from "./Pages/Cars/Createcar";
import SingleCar from "./Pages/Cars/SingleCar";

export const route = createBrowserRouter([
    {
        path: '/',
        Component: LandingPageLayout,
        children: [
            {index: true, Component: Home},
            {path: 'about', Component: About},
            {path: 'blogs', Component: Blogs},
            {path: 'datafetch', Component: DataFetch},
            {path: 'create-blog', Component: CreateBlog},
            {path: 'blog/:id', Component: SingleBlog},
            {path: 'cars', Component: Cars},
            {path: 'cars/create', Component: CreateCar},
            {path: 'cars/:id', Component:SingleCar}
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