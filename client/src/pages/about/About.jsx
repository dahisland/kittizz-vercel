import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MainHeader from "../../components/mainHeader/MainHeader";
import CreateKittyModale from "../../components/modales/CreateKittyModale";

const About = () => {
  const [createKittyModale, setCreateKittyModale] = useState(false);

  return (
    <div className="page-container about">
      <Header />
      <main className="about_main">
        <MainHeader
          title={"Discover how to kitty"}
          functionOnClick={() => setCreateKittyModale(true)}
        />
        <p className="aboutMain_txt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non
          quam sed sapien volutpat aliquam quis sit amet urna. Mauris laoreet
          condimentum eros. Sed placerat faucibus odio, in elementum orci
          faucibus sit amet. Morbi quis nibh pellentesque, varius massa vel,
          ornare dui. Cras ultrices mauris et ex vehicula, ut suscipit lacus
          molestie. Nullam sagittis congue quam vel mattis. In cursus enim ut
          felis tincidunt, quis suscipit sapien viverra. In et tempor urna.
          Fusce imperdiet porta arcu vel laoreet. Vivamus id interdum turpis, ut
          ornare libero.
        </p>
        <p className="aboutMain_txt">
          Vestibulum dolor nulla, molestie vel tempus vel, varius nec est. Duis
          maximus nec urna a gravida. Nulla sed sapien ut velit rhoncus aliquam.
          Donec tempor ut neque vitae volutpat. Nullam velit erat, varius in
          neque suscipit, molestie tristique nunc. In vel porta justo, et mollis
          arcu. Suspendisse risus libero, suscipit id mattis et, mattis non mi.
          Nullam tellus leo, vehicula sit amet arcu eu, interdum efficitur
          augue.
        </p>
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

export default About;
