import styled from "styled-components";
export const Button_Bar = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 50%;
  height: 80px;

  display: flex;
  align-items: center;

  padding: 0 clamp(16px, 4vw, 40px);

  background-color: white;
  border-bottom: 1px solid #e5e7eb;

  button{
    background: transparent;
    color: black;
    font-size: 14px;
    font-weight: 600;
    padding: 6px 10px;
    border: none;
    border-radius: 8px;

    &:hover {
      color: #1E88E5;
      background: #a6daff;
    }
  }
`;
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

export const RaceDetaisl = styled.div`
  width: 20%;
  position: relative;
  flex: 1 1 280px;
  max-width: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;

  background: transparent;
  border-radius: 16px;
  overflow: hidden;
  padding:  clamp(64px, 4vw, 120px);

`

export const About_race = styled.div`
  
  width: 60%;
  position: relative;
  flex: 1 1 280px;
  max-width: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;

  background: white;
  border-radius: 16px;
  overflow: hidden;

  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;


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

export const DistancesContainer = styled.div`
  width: 60%;
  position: relative;
  flex: 1 1 280px;
  max-width: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;

  background: white;
  border-radius: 16px;
  overflow: hidden;

  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;


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
  distance_tag {
      display: inline-block;
      flex-direction: row;}
    }`
  

export  const Kits_Container = styled.div`
  width: 60%;
  position: relative;
  flex: 1 1 280px;
  max-width: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;

  background: white;
  border-radius: 16px;
  overflow: hidden;

  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;


  h2 {
    font-size: 18px;
    font-weight: 600;
    padding: 0 16px;
    margin: 0;
  }

  .kit_tag {
    padding: 0 16px;
    margin: 0;
    font-size: 14px;
    color: #666;
    flex-direction: column;
  }
    `
export const Organisation_Container = styled.div`
  width: 60%;
  position: relative;
  flex: 1 1 280px;
  max-width: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;

  background: white;
  border-radius: 16px;
  overflow: hidden;

  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;


  h2 {
    font-size: 18px;
    font-weight: 600;
    padding: 0 16px;
    margin: 0;
  }

    `
export const Lotes_Container = styled.div`
  width: 20%;
  position: relative;
  flex-direction: column;

  background: white;

  padding: 0 clamp(16px, 4vw, 40px);

  margin-buttom: 3000px;



  h2 {
    font-size: 18px;
    font-weight: 600;
    padding: 0 16px;
    margin: 0;
  }
  .lote{
    background: white;
    border-radius: 16px;
    overflow: hidden;

    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  }`

export const Inforow = styled.div`
  display: flex; 
  flex-direction: row;
  background: #F8FAFC;
  `