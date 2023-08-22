import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../components/Banner";
import HomeBanner from "../images/banner-home.png";
import Card from "../components/Card";



function Home() {
  const [logements, setLogements] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve) => 
        const response = await axios.get(
          process.env.PUBLIC_URL + "/logements.json"
        );
        setLogements(response.data);
        setDataLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Banner
        bannerImg={HomeBanner}
        bannerTitle="Chez vous, partout et ailleurs"
        page="home"
      />
      <section className="logements">
         {} logements.map((logement) => (
            <Card key={logement.id} logement={logement} />
          ))
        )}
      </section>
    </>
  );
}

export default Home;

