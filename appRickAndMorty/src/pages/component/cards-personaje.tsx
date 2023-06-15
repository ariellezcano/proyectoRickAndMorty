import "./cards-personaje.css";

function CardsPersonaje({ id, imagen, nombre, especie }) {
    console.log("cards personaje", imagen)
  return (
    <div className="CardsPersonaje">
      <img src={imagen} alt="" />
      <p>Nombre:&nbsp;<b>{nombre}</b></p>
      <p>Especie:&nbsp; <b>{especie}</b></p>
    </div>
  );
}

export default CardsPersonaje;
