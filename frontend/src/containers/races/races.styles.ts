import styled from "styled-components";
export const Botton_Bar = styled.div`
  
  position: fixo;
  top: 0;
  left: 0;
  width: 50%;
  height: 80px;


  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 clamp(16px, 4vw, 40px);

  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  border-top: none;


  button {
    background: transparent;
    color: black;
    font-size: 14px;
    font-weight: 600;
    padding: 6px 10px;
    border: none;
    border-radius: 8px;

  button:hover {
    color: #1E88E5;
    border: none;
    border-radius: 8px;
    background: #a6daff;
  }
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: auto;   /* largura da tela */
  margin-left: calc(-50vw + 50%); /* centraliza quebrando o container pai */

  background: white;
  overflow: hidden;
  border: none;

  img {
    display: block;
    width: 100%;
    height: 380px;
    object-fit: cover;
    filter: brightness(0.7);
  }

  h2 {
    font-size: 18px;
    font-weight: 600;
    padding: 0 16px;
    margin: 0;
  }

  p {
    padding: 0 16px;
    margin: 0;
    font-size: 14px;
    color: #666;
  }
`;


export const ModalityBadge = styled.span`
  position: absolute;
  
  bottom: 30%;
  left: 4%;

  background: #1E88E5;
  color: white;
  font-size: 12px;
  font-weight: 600;

  padding: 6px 10px;
  border-radius: 20px;

`;

export const Titulo_race = styled.div`
  position: absolute;
  bottom: 13%;
  left: 3.3%;

  background: transparent ;
  color: white;
  font-size: clamp(24px, 5vw, 40px);
  font-weight: 600;

  padding: 6px 10px;
  border-radius: 20px;

`;
  export const Local_Data_Container = styled.span`
  position: absolute;
  bottom: 6%;
  left: 2.3%;

  display: flex;
  flex-direction: row;

  background: transparent;
  color: white;

  font-size: clamp(12px, 2vw, 20px);
  font-weight: 600;

  padding: 6px 10px;
  border-radius: 20px;

  box-shadow: 0 2px 6px rgba(0,0,0,0.1);

  p{
    color: white;
    margin: 0;
  }
`;