import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Feature from "../../components/feature/Feature";
import CardProvider from "../../components/card/CardProvider";
import { getKitties } from "../../api/callsAPI";
import MainHeader from "../../components/mainHeader/MainHeader";
import LoadDataError from "../../components/loadDataError/LoadDataError";
import axios from "axios";

const Homepage = () => {
  const [kittiesData, setKittiesData] = useState(null);
  const [dataIsUpdated, setDataIsUpdated] = useState(true);
  const [userIP, setUserIP] = useState("");

  const callGetKitties = async () => {
    const res = await getKitties();
    setKittiesData(res.data);
    setDataIsUpdated(false);
  };

  const getUserIP = async () => {
    const response = await axios.get("https://ipapi.co/json/");
    const data = response.data;
    setUserIP(data.ip);
  };

  useEffect(() => {
    getUserIP();

    if (dataIsUpdated) {
      callGetKitties();
    }
  }, [dataIsUpdated]);

  return (
    <div className="page-container homepage">
      <Header />
      <Feature />
      <main className="homepage_main" id="kitties">
        <MainHeader title={"Support your favourite kitty"} />
        {kittiesData ? (
          <div className="homepageMain_kitties">
            {kittiesData.map((item, index) => (
              <CardProvider
                key={"kitty-" + index}
                data={item}
                userIP={userIP}
                setDataIsUpdated={setDataIsUpdated}
              />
            ))}
          </div>
        ) : (
          <LoadDataError message={"An error occured. Please try later"} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
