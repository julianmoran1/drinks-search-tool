import React, { useContext, useState } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import { RecipesContext } from "../context/RecipesContext";

export default function Form() {
  const { categories } = useContext(CategoriesContext);
  const { buscarRecetas, guardarConsultar } = useContext(RecipesContext);

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
              {categories.map((category) => (
                <option
                  key={category.strCategory}
                  value={category.strCategory}
                >
                  {category.strCategory}
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
