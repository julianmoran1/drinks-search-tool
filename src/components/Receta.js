import React, { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Receta({ receta }) {
  //configuracion modal material UI

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    guardarIdReceta(null);
    guardarReceta({})
  };

  // extraer valores del context
  const { infoReceta, guardarReceta, guardarIdReceta } = useContext(ModalContext);

  //muestra y formatea los ingredientes
  const mostrarIngredientes = (infoReceta) => {
    let ingredientes = []
    for (let i=1; i<16; i++){
      if(infoReceta[`strIngredient${i}`]) {
        ingredientes.push(<li>{infoReceta[`strIngredient${i}`]} - {infoReceta[`strMeasure${i}`]}</li>)
      }
    }
    return ingredientes
  }

  return (
    <>
      <div className="col-md-4 mb-3">
        <div className="card">
          <h2 className="card-header">{receta.strDrink}</h2>
          <img
            className="card-img-top"
            src={receta.strDrinkThumb}
            alt={`Imagen de ${receta.strDrink}`}
          />
          <div className="card-body">
            <button
              onClick={() => {
                guardarIdReceta(receta.idDrink);
                handleOpen();
              }}
              type="button"
              className="btn btn-block btn-primary"
            >
              Ver receta
            </button>
          </div>
        </div>
      </div>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <h2>{infoReceta.strDrink}</h2>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <h3>Instrucciones</h3>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {infoReceta.strInstructions}
            </Typography>
            <img
              className="img-fluid my-4"
              src={infoReceta.strDrinkThumb}
              alt={`Imagen de ${infoReceta.strDrink}`}
            />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Ingredientes y cantidades
            </Typography>
            <ul>
              {mostrarIngredientes(infoReceta)}
            </ul>
          
          </Box>
        </Modal>
      </div>
    </>
  );
}
