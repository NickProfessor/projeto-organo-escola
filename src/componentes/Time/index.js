import Membro from "../Membro";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

const Time = ({ nome, cor, membros, aoDeletar, mudarCor }) => {
  return (
    membros.length > 0 && (
      <section className="time" style={{ backgroundColor: hexToRgba(cor, "0.4") }}>
        <input type="color" className="input-cor" value={cor} onChange={e => mudarCor(e.target.value, nome)}/>
        <h3 style={{ borderColor: cor }}>{nome}</h3>
        <div className="membros">
          {membros.map((membro) => (
            <Membro
              corDeFundo={cor}
              key={membro.nome}
              nome={membro.nome}
              cargo={membro.cargo}
              imagem={membro.imagem}
              aoDeletar={aoDeletar}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
