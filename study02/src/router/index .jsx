import { BrowserRouter, Routes, Route } from "react-router";
import NotFound from "@pages/NotFound.jsx"
import Page1 from "@pages/Page1.jsx"
import Page2 from "@pages/Page2.jsx"
import Page3 from "@pages/Page3.jsx"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/page1" element={<Page1 />} /> 
        <Route path="/page2" element={<Page2 />} /> 
        <Route path="/page3" element={<Page3 />} /> 
        <Route path="*" element={<NotFound />} />  {/* 기본 페이지를 낫파운드로 설정시켜 없는 경로가 나올때에 기본화면으로 나타내게 하는것 조건문에 else같은 느낌이라 생각하면 된다. */}
        
      </Routes>
    </BrowserRouter>
  )
}

export default Router