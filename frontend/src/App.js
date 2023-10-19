import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardDetail from "./CardDetail";
import CardList from "./CardList";
import FilterGuide from "./FilterGuide";
import Home from "./Home";
import Layout from "./Layout";

function App() {
  return (
    <div class="h-screen overflow-auto bg-gradient-to-b from-[#c4aa71] to-gray-900">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="card-list"
            element={
              <Layout>
                <CardList />
              </Layout>
            }
          />
          <Route
            path="/card-detail"
            element={
              <Layout>
                <CardDetail />
              </Layout>
            }
          />
          <Route
            path="filter-guide"
            element={
              <Layout>
                <FilterGuide />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
