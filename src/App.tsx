import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import Comapny from "./pages/Company/Comapny";
import Search from "./pages/Search/Search";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <Router>
      <div className="app-container">
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/search"
            element={
              <Layout>
                <Search />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            path="club/:id"
            element={
              <Layout>
                <Comapny />
              </Layout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
