import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { getOneKitty } from "../../api/callsAPI";
import MainHeader from "../../components/mainHeader/MainHeader";
import LoadDataError from "../../components/loadDataError/LoadDataError";
import CreateKittyModale from "../../components/createKittyModale/CreateKittyModale";

const Kitty = () => {
  const { kittyID } = useParams();
  const [createKittyModale, setCreateKittyModale] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [dataIsUpdated, setDataIsUpdated] = useState(true);
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
          <MainHeader
            title={kittyData.data.title}
            functionOnClick={() => setCreateKittyModale(true)}
          />
        ) : (
          <LoadDataError message={kittyData.message} />
        )}
      </main>
      <Footer />
      {createKittyModale ? (
        <CreateKittyModale
          closeModaleFunction={() => setCreateKittyModale(false)}
          setDataIsUpdated={null}
        />
      ) : null}
    </div>
  );
};

export default Kitty;
