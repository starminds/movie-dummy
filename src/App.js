import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Header } from "./components/pages/Header";
import { GlobalStyled } from "./components/styles/globalStyle";
import { Detail } from "./components/detail/Detail";
import { Interest } from "./components/insterest/Interest";
import { Search } from "./components/search/Search";
import { Footer } from "./components/pages/Footer";
import { Login } from "./components/login/Login";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GlobalStyled />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/Interest" element={<Interest />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}
export default App;
