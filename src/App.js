import logo from "./logo.svg";
import "./App.css";
import DemoState from "./pages/DemoState";
import Home from "./pages/Home";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import HomeTemplate from "./template/HomeTemplate";
import DemoUseEffect from "./pages/DemoUseEffect";
import ShoeDetail from "./pages/ShoeDetail";
import useRoutesCustom from "./routes/useRoutesCustom";

function App() {
  const myRoutes = useRoutesCustom();

  return myRoutes;
}

export default App;

{
  /* <div className="App">

  <Header />
  <Home />
  <Contact />
</div> */
}

//  <Route path='' element={<Home />} ></Route>
//         <Route path='home' element={<Home />} ></Route>
//         <Route path='contact' element={<Contact />} ></Route>
//         <Route path='demo-use-state' element={<DemoState />} ></Route>
//         <Route path='login' element={<Login />} ></Route>
//         <Route path='profile' element={<Profile />} ></Route>
//         <Route path='*' element={<Home/>}></Route>
// {/* <Route path='*' element={<div>404</div>}></Route> */ }
