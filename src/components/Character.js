import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

const Character = ({ match }, props) => {
  const { store, actions } = useContext(Context);

  const id = match.params.id;

  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="card margen mt-5">
            <img
              src={store.character.results[id - 1].image}
              className="card-img-top margen"
              alt={store.character.results[id - 1].name}
            />
            <div className="card-body">
              <h5 className="card-title">
                {store.character.results[id - 1].name}
              </h5>
              <ul class="list-group">
                <li class="list-group-item">
                  Especie: {store.character.results[id - 1].species}
                </li>
                <li class="list-group-item">
                  Genero: {store.character.results[id - 1].gender}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Character;
