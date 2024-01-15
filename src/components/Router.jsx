import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Todos from "../pages/Todos";
import Test from "../pages/Test";
import Layout from "../components/layout/Layout";
import Login from "../pages/Login";

export default function Router() {
  // routes 의 자식은 route 만 올 수 있다.
  // 즉 layout 은 안됨.
  // routes 는 두번 선언될 수 없다. -> 문제생김!!
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/test" element={<Test />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}