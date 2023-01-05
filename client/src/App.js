import {RouterProvider, createBrowserRouter, Outlet} from 'react-router-dom';
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Single from "./pages/Single";
import Write from "./pages/Write";
import About from "./pages/About";
const Layout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children: [
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/post/:id",
                element:<Single/>
            },

            {
                path:"/write",
                element:<Write/>
            },
            {
                path:"/about",
                element:<About/>,
            }
        ]
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/login",
        element:<Login/>
    }
])

function App() {
  return (
      <div >
          <RouterProvider router={router}/>
      </div>
  );
}

export default App;
