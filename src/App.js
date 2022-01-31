import Header from "./components/Header";
import Form from "./components/Form";
import ListaRecetas from "./components/ListaRecetas";

import CategoriasProvider from "./context/CategoriasContext";
import RecetasProvider from "./context/RecetasContext";
import ModalProvider from "./context/ModalContext";

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <Form />
            <ListaRecetas />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
