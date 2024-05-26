import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard.tsx';
import Songs from './pages/Songs.tsx';
import Layout from './components/Layout.tsx';
import { Provider } from 'react-redux';
import store from './context/index.ts';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')!);
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Dashboard/>
      },
      {
        path:'/songs',
        element:<Songs/>
      }
    ]
  }
  
],
)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App>
        <RouterProvider router={router}/>
      </App>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
