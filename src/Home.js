import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.amazon.fr/images/G/08/digital/video/gateway/placement/launch/PSG_S1/ICPAR_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_fr-FR._CB405642446_.jpg"
          alt=""
        />
        <div className="home__row"></div>
      </div>
    </div>
  );
}

export default Home;
