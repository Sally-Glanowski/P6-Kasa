import React, { useState } from "react";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="collape">
      <div className="encadre-collapse" onClick={handleToggle}>
        <h3>{title}</h3>
        <span className={`arrow ${isOpen ? "open" : "closed"}`}></span>
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