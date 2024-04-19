import "./Membro.css";

const Membro = ({ nome, imagem, cargo, corDeFundo }) => {
  return (
    <div className="membro">
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
