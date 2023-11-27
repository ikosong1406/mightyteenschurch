import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "../src/pages/home/home";
import About from "../src/pages/about/about";
import Events from "../src/pages/events/events";
import Contact from "../src/pages/contact/contact";
import Resources from "../src/pages/resources/resources";
import Partnership from "../src/pages/partnership/partnership";
import Dashboard from "../src/components/dashboard";
import Menu from "./components/menu/Menu";

function App() {
  const [clicked, isClicked] = useState(false);

  const Layout = ({ children }) => (
    <>
      <Header clicked={clicked} isClicked={isClicked} />
      {children}
      <Footer />
    </>
  );

  return (
    <div>
      {clicked ? <Menu /> : null}
      <Routes>
        <Route
          index
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="events"
          element={
            <Layout>
              <Events />
            </Layout>
          }
        />
        <Route
          path="contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="resources"
          element={
            <Layout>
              <Resources />
            </Layout>
          }
        />
        <Route
          path="partnership"
          element={
            <Layout>
              <Partnership />
            </Layout>
          }
        />
        <Route
          path="dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
