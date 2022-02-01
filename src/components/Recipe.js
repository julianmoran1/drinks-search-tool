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

export default function Recipe({ recipe }) {
  //modal material UI config

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setRecipeId(null);
    setRecipe({})
  };

  // extract values from context
  const { recipeInformation, setRecipe, setRecipeId } = useContext(ModalContext);

  //shows and formats ingredients
  const showIngredients = (recipeInformation) => {
    let ingredients = []
    for (let i=1; i<16; i++){
      if(recipeInformation[`strIngredient${i}`]) {
        ingredients.push(<li>{recipeInformation[`strIngredient${i}`]} - {recipeInformation[`strMeasure${i}`]}</li>)
      }
    }
    return ingredients
  }

  return (
    <>
      <div className="col-md-4 mb-3">
        <div className="card">
          <h2 className="card-header">{recipe.strDrink}</h2>
          <img
            className="card-img-top"
            src={recipe.strDrinkThumb}
            alt={`Image of ${recipe.strDrink}`}
          />
          <div className="card-body">
            <button
              onClick={() => {
                setRecipeId(recipe.idDrink);
                handleOpen();
              }}
              type="button"
              className="btn btn-block btn-primary"
            >
              View recipe
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
              <h2>{recipeInformation.strDrink}</h2>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <h3>Instructions</h3>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {recipeInformation.strInstructions}
            </Typography>
            <img
              className="img-fluid my-4"
              src={recipeInformation.strDrinkThumb}
              alt={`Image of ${recipeInformation.strDrink}`}
            />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Ingredients and quantities
            </Typography>
            <ul>
              {showIngredients(recipeInformation)}
            </ul>
          
          </Box>
        </Modal>
      </div>
    </>
  );
}
