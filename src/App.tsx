import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {BlockerComponent} from "./BlockerComponent.tsx";
import {DefaultComponent} from "./DefaultComponent.tsx";

const router = createBrowserRouter([
  {
  path: '1',
  element: <DefaultComponent/>
  },
  {
  path: '2',
  element: <DefaultComponent/>
  },
  {
    path: '3',
    element: <DefaultComponent/>
  },
  {
    path: '*',
    element: <BlockerComponent/>
  }
])

function App() {

  return <RouterProvider router={router}/>
}

export default App
