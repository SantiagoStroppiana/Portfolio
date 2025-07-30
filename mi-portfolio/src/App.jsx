import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 50,
    });
  }, []);

  const routes = [
    {
      path: "/",
      element: <Home />,
      name: "Home",
    },
  ];

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />

        <Routes>
          {routes.map((route) => (
            <Route key={route.nam} path={route.path} element={route.element} />
          ))}
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
