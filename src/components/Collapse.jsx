import React, { useState } from "react";
import arrowImage from "../images/vector.png"; 


function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="collapse">
      <div className="encadre-collapse" onClick={handleToggle}>
        <h3>{title}</h3>
        <span className={`arrow ${isOpen ? "open" : "closed"}`}></span>
        <img className="fleche"src={arrowImage} alt="Flèche" />
      </div>
      {isOpen && (
        <div className="reglement">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;