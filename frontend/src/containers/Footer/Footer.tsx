import{
  FooterContainer,
  FooterContent,
  LogoSection,
  Column,
  BottomBar,
  PrivacyLinks} from "../styles/global.styles";

export default function Footer() {
    return(
    <><FooterContainer>
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
        </BottomBar></>
    )
}