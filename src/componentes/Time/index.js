import Membro from "../Membro";
import "./Time.css";

const Time = ({ nome, corPrimaria, corSecundaria, membros, aoDeletar }) => {
  return (
    membros.length > 0 && (
      <section className="time" style={{ backgroundColor: corSecundaria }}>
        <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
        <div className="membros">
          {membros.map((membro) => (
            <Membro
              corDeFundo={corPrimaria}
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
