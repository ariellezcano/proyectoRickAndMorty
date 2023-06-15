function LstPersonajes({ data }) {
  return (
    <div>
      {data.map((item: any, index: number) => (
        <div key={item.id} className="card">
          <img src={item.image} alt="" />
          <h4>
            <b>Nombre:&nbsp;{item.name}</b>
          </h4>
          <p>Especie:&nbsp;{item.species}</p>
        </div>
      ))}
    </div>
  );
}

export default LstPersonajes;
