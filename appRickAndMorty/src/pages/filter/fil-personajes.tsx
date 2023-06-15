function FiltroPersonaje({onSubmit,onChange}) {
    return (
      <div className="Filtro">
        <form  onSubmit={onSubmit}>
          <input id="inputBuscador" type="text" onChange={onChange} />
          <button type="submit">Botón</button>
        </form>
      </div>
    );
}

export default FiltroPersonaje;