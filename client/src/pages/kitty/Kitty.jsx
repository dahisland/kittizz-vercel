import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { getOneKitty } from "../../api/callsAPI";
import LoadDataError from "../../components/loadDataError/LoadDataError";
import CreateKittyModale from "../../components/createKittyModale/CreateKittyModale";
import UpdateKittyModale from "../../components/updateKittyModale/UpdateKittyModale";
import MainKitty from "../../components/mainKitty/MainKitty";

const Kitty = () => {
  const { kittyID } = useParams();
  const [createKittyModale, setCreateKittyModale] = useState(false);
  const [updateKittyModale, setUpdateKittyModale] = useState(false);
  const [dataIsUpdated, setDataIsUpdated] = useState(false);

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
    setDataIsUpdated(false);
  }, [kittyID, dataIsUpdated]);

  return (
    <div className="page-container kitty">
      <Header />
      <main className="kitty_main">
        {kittyData.data ? (
          <MainKitty
            data={kittyData.data}
            functionOnClick={() => setCreateKittyModale(true)}
            functionOpenUpdateModale={() => setUpdateKittyModale(true)}
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
      {updateKittyModale ? (
        <UpdateKittyModale
          closeModaleFunction={() => setUpdateKittyModale(false)}
          setDataIsUpdated={setDataIsUpdated}
          kittyData={kittyData.data}
        />
      ) : null}
    </div>
  );
};

export default Kitty;
