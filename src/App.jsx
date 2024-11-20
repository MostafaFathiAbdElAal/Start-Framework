import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./Pages/Portfolio";
import Contact from './Pages/Contact';
import Layout from './components/Layout/Layout';
import WarningPath from './Pages/WarningPath';
import Home from './Pages/Home';
import About from './Pages/About';
function App() {
    const router = createBrowserRouter([
        {
            path: "/", element: <Layout />, children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "Portfolio",
                    element: <Portfolio />,
                },
                {
                    path: "Contact",
                    element: <Contact />,
                },
                {
                    path: "About",
                    element: <About />,
                }
            ],
        },
        {
            path: "*",
            element: <WarningPath />,
        },
    ]);

    return <>

        <RouterProvider router={router}></RouterProvider>
    </>

}

export default App
