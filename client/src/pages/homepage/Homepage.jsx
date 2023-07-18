import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Feature from "../../components/feature/Feature";
import CardProvider from "../../components/card/CardProvider";
import { getKitties } from "../../api/callsAPI";
import MainHeader from "../../components/mainHeader/MainHeader";
import LoadDataError from "../../components/loadDataError/LoadDataError";
import axios from "axios";
import CreateKittyModale from "../../components/createKittyModale/CreateKittyModale";

const Homepage = () => {
  const [kittiesData, setKittiesData] = useState(null);
  const [dataIsUpdated, setDataIsUpdated] = useState(true);
  const [userIP, setUserIP] = useState("");
  const [createKittyModale, setCreateKittyModale] = useState(false);

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
    callGetKitties();
    // if (dataIsUpdated) {
    // }
  }, [dataIsUpdated]);

  return (
    <div className="page-container homepage">
      <Header />
      <Feature />
      <main className="homepage_main" id="kitties">
        <MainHeader
          title={"Support your favourite kitty"}
          functionOnClick={() => setCreateKittyModale(true)}
        />
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
      {createKittyModale ? (
        <CreateKittyModale
          closeModaleFunction={() => setCreateKittyModale(false)}
          setDataIsUpdated={setDataIsUpdated}
        />
      ) : null}
    </div>
  );
};

export default Homepage;
