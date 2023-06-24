import CardsPersonaje from "../component/cards/cards-personaje";

function LstPersonajes({ data }) {
  return (
    <div>
      {data.map((item: any, index: number) => (
        <div key={item.id}>
          {item.image ? (
            <CardsPersonaje
              id={item.id}
              imagen={item.image}
              nombre={item.name}
              especie={item.species}
            />
          ) : (
            <h1>No posee imagen...</h1>
          )}

          {/* <img src={item.image} alt="" />
          <h4>
            <b>Nombre:&nbsp;{item.name}</b>
          </h4>
          <p>Especie:&nbsp;{item.species}</p> */}
        </div>
      ))}
    </div>
  );
}

export default LstPersonajes;
