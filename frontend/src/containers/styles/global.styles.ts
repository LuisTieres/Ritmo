import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;

  box-sizing: border-box; /* ⭐ FIX */

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 clamp(16px, 4vw, 40px);

  background-color: white;
  border-bottom: 1px solid #e5e7eb;

  z-index: 1000;

  /* LOGO */
  .logo-name {
    display: flex;
    align-items: center;
    gap: clamp(8px, 2vw, 16px);
  }

  .logo-name h1 {
    font-size: 20px;
    font-weight: 700;
    color: #263238;
  }

  .logo-name img {
    width: 40px;
    height: auto;
    border-radius: 25%;
  }

  /* SEARCH */
  .search-box {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 15px;
    padding: 1px 10px;
    width: 100%;
    max-width: 320px;
    background-color: #fff;
    gap: clamp(8px, 2vw, 16px);

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .search-box input {
    border: none;
    outline: none;
    flex: 1;
    font-size: 14px;
    padding: 8px 10px;
  }

  .search-box button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }

  /* BUTTONS */
  .entra-cadastro {
    display: flex;
    align-items: center;
    gap: clamp(8px, 2vw, 16px);
  }

  .btn-entrar {
    background: transparent;
    color: #1e88e5;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    padding: 8px 16px;
    cursor: pointer;
  }

  .btn-cadastro {
    background-color: #ff7a00;
    color: #fff;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    padding: 8px 16px;
    cursor: pointer;
  }

  .btn-conteudo {
    background: transparent;
    color: black;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    padding: 8px 16px;
    cursor: pointer;
  }

  .btn-cadastro:hover {
    background-color: #ff9333;
  }

  .btn-cadastro:active {
    background-color: #FFFFFF;
    color: #263238;
  }
  .btn-entrar:hover {
    background-color: #E3F2FD;
    color: #1E88E5;
  }

  .btn-entrar:active {
    background-color: #FFFFFF;
    color: #263238;
  }

  .btn-conteudo:hover {
    background-color: #E3F2FD;
    color: black;
  }

  .btn-conteudo:active {
    background-color: #FFFFFF;
    color: #263238;
  }
`;


export const FooterContainer = styled.footer`
  background: #FAFAFA;
  padding: 60px clamp(16px, 4vw, 40px);
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px;
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  img {
    width: 40px;
    border-radius: 25%;
  }

  h1 {
    font-size: 20px;
    font-weight: 700;
    color: #263238;
  }

  p {
    font-size: 14px;
    color: rgb(114, 114, 114);
    line-height: 1.6;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  strong {
    margin-bottom: 8px;
    color: #263238;
  }

  a {
    text-decoration: none;
    color: rgb(114, 114, 114);
    font-size: 14px;
    transition: color 0.2s;
  }

  a:hover {
    color: hsl(208, 78%, 52%);
  }
`;

export const BottomBar = styled.div`
  border-top: 1px solid #e6e6e6;

  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  padding: 20px clamp(16px, 4vw, 40px);

  font-size: 14px;
  color: rgb(114, 114, 114);

  p {
    margin: 0;
  }
`;

export const PrivacyLinks = styled.div`
  margin-left: auto;
  display: flex;
  gap: 16px;

  a {
    text-decoration: none;
    color: rgb(114, 114, 114);
    transition: color 0.2s;
  }

  a:hover {
    color: hsl(208, 78%, 52%);
  }
`;