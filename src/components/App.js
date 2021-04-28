import React from "react";
import Header from "./Header";
import CoinList from "./CoinList";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <CoinList />
      </main>
      <Footer />
    </>
  );
};

export default App;
