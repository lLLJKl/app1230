// import { createBrowserRouter } from "react-router";
// import { RouterProvider } from "react-router/dom";
import {BrowserRouter, Routes, Route} from "react-router";
import Page1 from '@pages/Page1.jsx'
import Page2 from '@pages/Page2.jsx'
import Page3 from '@pages/Page3.jsx'
import Page4 from '@pages/Page4.jsx'

const Router = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     Component: Page1
  //   },
  //   {
  //     path: "/page2",
  //     Component: Page2
  //   },
  //   {
  //     path: "/page3",
  //     Component: Page3
  //   },
  //   {
  //     path: "/page4",
  //     Component: Page4
  //   },

  // ]);
  // return <RouterProvider router={router} />
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1/>} />
        <Route path="/page2" element={<Page2/>} />
        <Route path="/page3" element={<Page3/>} />
        <Route path="/page4" element={<Page4/>} />
      </Routes>

    </BrowserRouter>
  )



}

export default Router