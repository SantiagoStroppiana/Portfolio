import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { AboutMe } from "./pages/AboutMe/AboutMe";
import { Stack } from "./pages/AboutMe/Stack";
import { Projects } from "./pages/Projects/Projects";
import { Contact } from "./pages/Contact/Contact";
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
    {
      path: "/sobreMi",
      element: (
        <>
          <AboutMe />
          <Stack />
        </>
      ),
      name: "AboutMe",
    },
    {
      path: "/proyectos",
      element: <Projects />,
      name: "Projects",
    },
    {
      path: "/contacto",
      element: <Contact />,
      name: "Contact",
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

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
