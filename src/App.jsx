
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { routes } from "./Components/utils/routes";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useUserStates } from "./Components/utils/global.context";

function App() {
  const { state } = useUserStates();

  useEffect(() => {
    document.body.classList.toggle('dark', state.darkMode);
  }, [state.darkMode]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.fav} element={<Favs />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path="*" element={<h1>Error 404 - Page not found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
