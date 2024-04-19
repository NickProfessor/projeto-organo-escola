import "./BotaoEnviar.css";

const BotaoEnviar = (props) => {
  return <button className="botaoEnviar">{props.children}</button>;
};

export default BotaoEnviar;
