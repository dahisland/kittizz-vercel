import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { getOneKitty } from "../../api/callsAPI";
import MainHeader from "../../components/mainHeader/MainHeader";
import LoadDataError from "../../components/loadDataError/LoadDataError";

const Kitty = () => {
  const { kittyID } = useParams();
  const [kittyData, setKittyData] = useState({
    data: null,
    message: "",
  });

  useEffect(() => {
    const callGetOneKitty = async () => {
      const res = await getOneKitty(kittyID);
      setKittyData(res);
    };
    callGetOneKitty();
  }, [kittyID]);

  return (
    <div className="page-container kitty">
      <Header />
      <main className="kitty_main">
        {kittyData.data ? (
          <MainHeader title={kittyData.data.title} />
        ) : (
          <LoadDataError message={kittyData.message} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Kitty;
