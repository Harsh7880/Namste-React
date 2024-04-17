import React, {lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact'
import Error from './components/Error'
import RestorantMenu from './components/RestorantMenu';
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
  } from "react-router-dom";


// Lazy Loading / Code Spliting / Dynamic Bundling
const Grocerey = lazy(()=> import('./components/Grocerey'));

const AppLayout = () => {
    return (
        <div className='app'>
            <Header/>
            <Outlet/>
            {/* <Footer/> */}
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocerey",
                element: <Suspense fallback={ <h1>Loading...............</h1> }> <Grocerey /></Suspense> 
            },
            {
                path: "/restaurant/:resID",
                element: <RestorantMenu />
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);