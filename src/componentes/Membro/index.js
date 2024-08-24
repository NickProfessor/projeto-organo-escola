import "./Membro.css";
import { IoIosCloseCircle } from "react-icons/io";

const Membro = ({ nome, imagem, cargo, corDeFundo, aoDeletar }) => {
  return (
    <div className="membro">
      <IoIosCloseCircle size={28} className="deletar" onClick={aoDeletar} />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        {imagem ? (
          <img src={imagem} alt={nome} />
        ) : (
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
            alt={nome}
          />
        )}
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Membro;
