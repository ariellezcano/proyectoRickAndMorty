import AppTs from "./App";
import FiltroPersonaje from "./pages/filter/fil-personajes";
import LstPersonajes from "./pages/list/lst-personajes";

function App() {
  //obtiene los datos del custom hooks del formulario ts const{" "}
  const { onSubmit, onChange, data, estaCargando } = AppTs();

  return (
    <div className="App">
      <FiltroPersonaje onSubmit={onSubmit} onChange={onChange} />
      <div>
        <h1 id="h1">Lista de Personajes</h1>

        {estaCargando ? <h2>Cargando...</h2> : <LstPersonajes data={data} />}
      </div>
    </div>
  );
}

export default App;
