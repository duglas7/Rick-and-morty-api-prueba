import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Home = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="row">
        {!!store.character &&
          store.character.results.map((character) => {
            return (
              <div className="col-3">
                <div className="card margen">
                  <img
                    src={character.image}
                    className="card-img-top margen"
                    alt={character.name}
                  />
                  <div className="card-body">
                    <Link to={`/character/${character.id}`}>
                      {character.name}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
