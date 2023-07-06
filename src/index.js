import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/root/App';
import Minigeo from "./routes/minigeo/App";
import reportWebVitals from './reportWebVitals';
import Calc from "./routes/calculator/App"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<h1>404 not found</h1>
  },
  {
    path:"/mini-geoguessr",
    element:<Minigeo/>
  },
  {
    path:"/react-calculator",
    element:<Calc/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
