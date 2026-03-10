import type { Heads } from "../../types/Head";
import{
  HeaderContainer} from "../styles/global.styles";
import { useParams } from "react-router-dom";

export default function Header({head_type}: Heads) {

    return(
    <HeaderContainer>
        <div className="logo-name">
            <img src="/assets/logo.png" alt="Ritmo" />
          <h1>Ritmo</h1>
        </div>
        
        { head_type && <div className="search-box">
          <button type="button">🔍</button>
          <input
            type="text"
            placeholder="Buscar por corrida, cidade ou estado"
              />
        </div>}

        <div className="entra-cadastro">
          <button className="btn-conteudo">Conteúdo</button>
          <button className="btn-entrar">Entrar</button>
          <button className="btn-cadastro">Cadastro</button>
        </div>

    </HeaderContainer>
    )
}