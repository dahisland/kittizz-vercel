import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Feature from "../../components/feature/Feature";
import CreateKittyBtn from "../../components/createKittyBtn/CreateKittyBtn";
import CardProvider from "../../components/card/CardProvider";
import { getKitties } from "../../api/callsAPI";

const Homepage = () => {
  const [kittiesData, setKittiesData] = useState({
    data: null,
    message: "",
  });

  useEffect(() => {
    const callGetKitties = async () => {
      const res = await getKitties();
      setKittiesData(res);
    };
    callGetKitties();
  }, []);

  return (
    <div className="page-container homepage">
      <Header />
      <Feature />
      <main className="homepage_main" id="kitties">
        <div className="homepageMain_header">
          <h2>Support your favourite kitty</h2>
          <CreateKittyBtn />
        </div>
        {kittiesData.data ? (
          <div className="homepageMain_kitties">
            {kittiesData.data.map((item, index) => (
              <CardProvider key={"kitty-" + index} data={item} />
            ))}
          </div>
        ) : (
          <div className="homepageMain_error">{kittiesData.message}</div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
