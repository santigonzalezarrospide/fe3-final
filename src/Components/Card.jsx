import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item, children }) => {

  const { name, username, id } = item;

  return (
    <div className="card">
      <img src="../../public/images/doctor.jpg" alt="Doctor" />
      <Link to={"/detail/" + item.id}>
        <h4>
          Name: {name}
        </h4>
        <h4>
          Username: {username}
        </h4>
        <h4>
          Id: {id}
        </h4>
      </Link>
      {children}
    </div>
  );
};

export default Card;
