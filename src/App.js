import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const [times, setTimes] = useState([
    {
      nome: "Direção",
      cor: "#f37777",
    },
    {
      nome: "Coordenação",
      cor: "#F2A950",
    },
    {
      nome: "Professores",
      cor: "#ffb3e8",
    },
    {
      nome: "Estagiários",
      cor: "#93ffcd",
    },
    {
      nome: "Alunos",
      cor: "#96dafa",
    },
  ]);

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

  const deletandoColaborador = () => {
    console.log("deletou");
  };

  const mudarCorTime = (cor, nomeDoTime) => {
    setTimes(times.map(time => {
      if(time.nome === nomeDoTime){
        time.cor = cor;
      }
      return time;
    }))
  }
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
          cor={time.cor}
          membros={membros.filter((membro) => membro.time === time.nome)}
          aoDeletar={deletandoColaborador}
          mudarCor={mudarCorTime}
        />
      ))}
    </div>
  );
}

export default App;
