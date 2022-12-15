import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./common/footer";
import Header from "./common/header";
import Layout from "./common/layout";
import Carrito from "./pages/Carrito";
import Home from "./pages/Home";

function App() {
  return (
    <div className="">
      <Layout>
        <Header />
        <main>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/carrito" element={<Carrito />} />
            <Route path="*" element={<h2>La página no exíste.</h2>} />
          </Routes>
        </main>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
