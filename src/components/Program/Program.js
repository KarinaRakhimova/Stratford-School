import "./Program.css";
import React from "react";
function Program( { name, description, src} ) {

  return (
    <article className="program" >
      <h2 className="program__title">{name}</h2>
      <div className="program__container">
        <img className="program__image" src={src} alt={`${name}`} />
        <p className="program__description">{description}</p>
      </div>
    </article>
  );
}

export default Program;
