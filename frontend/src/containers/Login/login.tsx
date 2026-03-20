import { useState } from "react";
import Header from "../Head/Head";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Card,
  Title,
  InputGroup,
  Label,
  Input,
  Button,
  LinkButton,
  PasswordWrapper,
  Button_Bar
} from "./login.styles";

export default function Login_Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [mode, setMode] = useState<"login" | "register" | "reset">("login");
  const navigate = useNavigate();

  function handleSubmit() {
    if (mode === "login") {
      console.log("Login:", { email, password });
    }
    if (mode === "register") {
      console.log("Register:", { email, password });
    }
    if (mode === "reset") {
      console.log("Reset password:", { email });
    }
  }

  return (
    <main style={{ marginTop: "80px" }}>
      <Header head_type="login" />
    <Button_Bar>
        <button onClick={() => navigate("/")}>Voltar</button>
    </Button_Bar>

      <Container>
        
        <Card>
          <Title>
            {mode === "login" && "Login"}
            {mode === "register" && "Criar Conta"}
            {mode === "reset" && "Recuperar Senha"}
          </Title>

        <InputGroup>
            <Label>Email</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
        </InputGroup>            {mode !== "reset" && (
        <InputGroup>
              <Label>Senha</Label>
              <PasswordWrapper>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "Ocultar" : "Ver"}
                </button>
              </PasswordWrapper>
            </InputGroup>
          )}

          <Button onClick={handleSubmit}>
            {mode === "login" && "Entrar"}
            {mode === "register" && "Cadastrar"}
            {mode === "reset" && "Enviar link"}
          </Button>

          {mode === "login" && (
            <>
              <LinkButton onClick={() => setMode("reset")}>
                Esqueceu a senha?
              </LinkButton>
              <LinkButton onClick={() => setMode("register")}>
                Criar conta
              </LinkButton>
            </>
          )}

          {mode !== "login" && (
            <LinkButton onClick={() => setMode("login")}>
              Voltar para login
            </LinkButton>
          )}
        </Card>
      </Container>

      <Footer />
    </main>
  );
}