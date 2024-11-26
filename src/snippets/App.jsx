import Navbar from "../components/navbar/Navbar";

const Layout = () => {
    return (

        <>
            <Navbar />
            <Outlet />
            <Footer />
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
                path: "/",
                element: <Home />
            },

            {
                path: "/write",
                element: <Write />
            },

            {
                path: "/post/:id",
                element: <Single />
            }
        ]


    },

    {
        path: "/register",
        element: <Register />
    },

    {
        path: "/login",
        element: <Login />

    }
]);

function App() {
    return (
        <div className='app'>
            <div className="container">
                <RouterProvider router={router} />

            </div>

        </div>
    );
}


export default App;
