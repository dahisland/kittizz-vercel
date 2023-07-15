import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Feature from "../../components/feature/Feature";
import Card from "../../components/card/Card";
import { kitties } from "../../data/mockData";

const Homepage = () => {
  return (
    <div className="page-container homepage">
      <Header />
      <Feature />
      <main className="homepage_main" id="kitties">
        <h2>Choose your favourite kitty</h2>
        <div className="homepageMain_kitties">
          {kitties.map((item, index) => (
            <Card key={"kitty-" + index} data={item} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
