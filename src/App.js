import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./App.css"
// import react router dom


import {
  createBrowserRouter,
  Outlet,
  RouterProvider,

} from "react-router-dom";
// import HomePage from "./pages/home/Home";
// import Map from "./components/map/Map";
// import Posts from "./pages/posts/Posts";
// import Map from "./pages/Map";
// import Maps from "./pages/Map";
// import Map from "./pages/map/Map"
// import NewsDetail from "./pages/singlePost/SinglePost";
// import Prompt from "./components/germinI/prompt";
import Registration from "./components/auth/Register";
import Login from "./components/auth/Login";
import ProfilePage from "./pages/profile/Profile";
import SideLeft from "./components/left/Left";
import RightBar from "./components/right/Right";
import "./layout.css"



// create our outlet here to avoid duplication
const Layout = () => {
  return (

    <>
      <div className="layout">

        <Navbar />
        <div className="mid">
          <div className="left">
            <SideLeft />
          </div>
          <div className="content">
            <Outlet />
          </div>
          <div className="right">
            <RightBar />

          </div>

        </div>

        <Footer />

      </div>

    </>
  );
}

// create our routes






const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/profile",
        element: <ProfilePage />
      },

      // {
      //   path: "/write",
      //   element: <Write />
      // },

      // {
      //   path: "/post/:id",
      //   element: <Single />
      // }
    ]
  },

  {
    path: "/register",
    element: <Registration />,

  },

  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/login",
    element: <Login />

  },

  {
    path: "/profile",
    element: <ProfilePage />

  }
]);


function App() {
  return (
    <>

      <RouterProvider router={router} />



    </>
  );
}


export default App;
