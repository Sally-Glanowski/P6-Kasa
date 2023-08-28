import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Collapse from "../components/Collapse";
import Carrousel from "../components/Caroussel";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Loader from "../components/Loader";

function Logement() {
  const { logementId } = useParams();
  const [logement, setLogement] = useState(null);
  const [isDataLoading, setDataLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLogement = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve 1000));
        const response = await axios.get(
          process.env.PUBLIC_URL + "/logements.json"
        );
        const logementData = response.data.find(
          (logement) => logement.id == logementId
        );
        if (logementData) {
          setLogement(logementData);
        } else {
          navigate("/404");
        }
        setDataLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
      }
    };

    fetchLogement();
  }, []);

