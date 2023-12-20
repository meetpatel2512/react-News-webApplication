import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import News from './Components/News.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import './index.css'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="/" element={<News category='general' />} />
      <Route path="/business" element={<News category='business' />} />
      <Route path="/entertainment" element={<News category='entertainment' />} />
      <Route path="/health" element={<News category='health' />} />
      <Route path="/science" element={<News category='science' />} />
      <Route path="/sports" element={<News category='sports' />} />
      <Route path="/technology" element={<News category='technology' />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}>

    </RouterProvider>

  </React.StrictMode>,
)
