import Program from "../Program/Program";
import "./List.css";
import React from 'react';
import { Link, useLocation } from "react-router-dom";
function List({ programs }) {
  const location = useLocation();
  let programsList;

  if (location.pathname === "/" || location.pathname === "/programs"
    || location.pathname === "/exams" || location.pathname === "/adults"
  ) {
    programsList = programs.map((program) => (
      <Link to={`/${program.link}`} className="program__item link">
        <Program
          key={program.id}
          name={program.name}
          description={program.description}
          src={program.src}
        />
      </Link>
    ));
    return (
      <section className="list">{programsList}
      </section>

    )
  } else if (location.pathname === "/children") {
    programsList = programs.map((program) => (
      <Link to={`/${program.link}`} className="program__item link">
        <Program
          key={program.id}
          name={program.name}
          description={program.description}
          src={program.src}
        />
      </Link>
    ))
    return (
      <section className="list_children">{programsList}
      </section>

    )
  } else
    programsList = programs.map((program) => (
      <Link to={`/${program.link}`} className="program__item link">
      <Program
        key={program.id}
        name={program.name}
        description={program.description}
        src={program.src}
      /></Link>
    ))

  return (
  <>
  <section className="list">{programsList}</section>
      </>)
}
export default List;
