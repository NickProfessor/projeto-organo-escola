import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="listaSuspensa">
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.aoAlterado(evento.target.value)}
        required={props.obrigatorio}
        valor={props.valor}
      >
        <option value=""></option>
        {props.times.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
