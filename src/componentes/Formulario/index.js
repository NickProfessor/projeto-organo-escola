import { useState } from "react";
import BotaoEnviar from "../BotaoEnviar";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const enviarFormulario = (evento) => {
    evento.preventDefault();
    props.aoMembroCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setTime("");
    setImagem("");
  };

  return (
    <section className="formulario">
      <form onSubmit={enviarFormulario}>
        <h2>Preencha os dados para criar um card de membro da escola</h2>
        <CampoTexto
          label="Nome"
          placeholder="Digite seu nome"
          obrigatorio={true}
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          label="Cargo"
          placeholder="Digite seu cargo. Ex: aluno, professor, coordenador, etc"
          obrigatorio={true}
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Informe o endereço da imagem. Opcional"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          times={props.times}
          label="Time"
          obrigatorio={true}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <BotaoEnviar texto="Enviar">Criar Card</BotaoEnviar>
      </form>
    </section>
  );
};

export default Formulario;
