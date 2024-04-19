import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const times = [
    {
      nome: "Direção",
      corPrimaria: "#c02828",
      corSecundaria: "#f37777",
    },
    {
      nome: "Coordenação",
      corPrimaria: "#c04428",
      corSecundaria: "#F2A950",
    },
    {
      nome: "Professores",
      corPrimaria: "#d86ebf",
      corSecundaria: "#ffb3e8",
    },
    {
      nome: "Estagiários",
      corPrimaria: "#57c278",
      corSecundaria: "#93ffcd",
    },
    {
      nome: "Alunos",
      corPrimaria: "#60c0f7",
      corSecundaria: "#96dafa",
    },
  ];

  const [membros, setMembros] = useState([
    {
      nome: "Nickollas Silva",
      time: "Direção",
      cargo: "Diretor de Ensino",
      imagem: "https://github.com/NickProfessor.png",
    },
    {
      nome: "Emely Oliveira",
      time: "Coordenação",
      cargo: "Coordenadora de Informática para Internet",
      imagem: "",
    },
    {
      nome: "Julio D'Eleutério",
      time: "Coordenação",
      cargo: "Coordenador de Marketing",
      imagem:
        "https://media.licdn.com/dms/image/D4D35AQGKoxWkDcZNOA/profile-framedphoto-shrink_200_200/0/1711853615728?e=1714165200&v=beta&t=IJS6ZGC_zf6FWB0-BHkQ7gAFWzkIxrSlgw8WsxdizIE",
    },
    {
      nome: "Nathan Leite",
      time: "Professores",
      cargo: "Professor de Interfaces Web",
      imagem: "https://github.com/NathanLe1te.png",
    },
    {
      nome: "Sávio Pereira",
      time: "Alunos",
      cargo: "Aluno de Informática para Internet",
      imagem:
        "https://media.licdn.com/dms/image/D4D03AQE6xyMwttrQig/profile-displayphoto-shrink_200_200/0/1713053526320?e=1718841600&v=beta&t=Wg4HnskImqV_P2XZEpaip5jBdU5kVOkO9BWNhiKzjYg",
    },
  ]);

  const aoNovoMembroAdicionado = (membro) => {
    console.log(membro);
    setMembros([...membros, membro]);
  };
  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoMembroCadastrado={(membro) => aoNovoMembroAdicionado(membro)}
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          membros={membros.filter((membro) => membro.time === time.nome)}
        />
      ))}
    </div>
  );
}

export default App;
