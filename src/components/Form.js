import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

export default function Form() {
  const { categorias } = useContext(CategoriasContext);
  const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

  const [busqueda, guardarBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  const obtenerDatosReceta = (event) => {
    event.preventDefault();
    guardarBusqueda({
      ...busqueda,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <fieldset className="text-center">
        <legend>Find Cocktail by category or ingredient</legend>
      </fieldset>
      <form className="col-12" onSubmit={event => {
        event.preventDefault()
        buscarRecetas(busqueda)
        guardarConsultar(true)
      }}>
        <div className="row">
          <div className="col-md-4">
            <input
              name="nombre"
              className="form-control"
              type="text"
              placeholder="Search ingredient"
              onChange={obtenerDatosReceta}
            />
          </div>
          <div className="col-md-4">
            <select
              name="categoria"
              className="form-control"
              onChange={obtenerDatosReceta}
            >
              <option value="">Select category</option>
              {/* Get options from api  */}
              {categorias.map((categoria) => (
                <option
                  key={categoria.strCategory}
                  value={categoria.strCategory}
                >
                  {categoria.strCategory}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <button type="submit" className="btn btn-block btn-primary">
              Search recipes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
