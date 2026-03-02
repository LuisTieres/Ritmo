import { races } from "../../data/races";
import { ImageContainer } from "./races.styles";
import{
  HeaderContainer,
  FooterContainer,
  FooterContent,
  LogoSection,
  Column,
  BottomBar,
  PrivacyLinks
} from "../styles/global.styles";
import { useParams } from "react-router-dom";

export default function RacePage() {
    const { id } = useParams();

    const race = races.find(r => r.id === id);

    if (!race) {
        return <p>Corrida não encontrada</p>;
    }

    return (
        <main style={{ marginTop: "80px" }}>
            <HeaderContainer>
            
                <div className="logo-name">
                  <img src="/assets/logo.png" alt="Ritmo" />
                  <h1>Ritmo</h1>
                </div>
            
                <div className="entra-cadastro">
                  <button className="btn-conteudo">Conteúdo</button>
                  <button className="btn-entrar">Entrar</button>
                  <button className="btn-cadastro">Cadastro</button>
                </div>
            
            </HeaderContainer>
            <ImageContainer>
                <img src={race.image} alt={race.title} />
            </ImageContainer>

            <FooterContainer>
                <FooterContent>

                <LogoSection>
                    <div>
                    <img src="/assets/logo.png" alt="Running training" />
                    <h1>Ritmo</h1>
                    </div>
                    <p>
                    Um cadastro para todas as suas corridas. Inscreva-se de forma rápida
                    e segura.
                    </p>
                </LogoSection>

                <Column>
                    <strong>Para Atleta</strong>
                    <a href="#">Como funciona</a>
                    <a href="#">Minhas inscrições</a>
                    <a href="#">Política de reembolso</a>
                    <a href="#">FAQ</a>
                </Column>

                <Column>
                    <strong>Para Organizadores</strong>
                    <a href="#">Sou organizador</a>
                    <a href="#">Cadastrar corrida</a>
                    <a href="#">Planos e preços</a>
                    <a href="#">Suporte</a>
                </Column>

                <Column>
                    <strong>Contato</strong>
                    <a href="#">contato@ritmo.com.br</a>
                </Column>

                </FooterContent>
            </FooterContainer>

            <BottomBar>
                <p>© 2026 Ritmo. Todos os direitos reservados.</p>

                <PrivacyLinks>
                <a href="#">Termos de Uso</a>
                <a href="#">Privacidade</a>
                </PrivacyLinks>
            </BottomBar>
        </main>
    )
}
