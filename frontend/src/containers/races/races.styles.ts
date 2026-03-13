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

  background-color: transparent;
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
  flex: 2 1 600px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: clamp(0px, 4vw, 0px);
`
export const About_race = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 24px;

  background: white;
  border-radius: 16px;

  box-shadow: 0 4px 20px rgba(0,0,0,0.05);

  /* título */
  h4{
    font-size: 16px;
    font-weight: 600;
    color: #263238;
    line-height: 1;
    margin: 0;
  }

  /* descrição */
  .description{
    font-size: 16px;
    font-weight: 400;
    color: #6B7280;
    line-height: 1.625;
    margin: 0;
  }

  /* linha com ícone */
  .info_row{
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }

  /* ícone */
  .icon{
    font-size: 20px;
    color: #1E88E5;
    flex-shrink: 0;
    margin-top: 2px;
  }

  /* nome do local */
  .location{
    font-size: 16px;
    font-weight: 500;
    color: #263238;
    margin: 0;
  }

  /* endereço */
  .address{
    font-size: 14px;
    font-weight: 400;
    color: #6B7280;
    margin: 0;
    line-height: 1.5;
  }

  /* horário */
  .time{
    font-size: 16px;
    font-weight: 500;
    color: #263238;
    margin: 0;
  }
`;

export const DistancesContainer = styled.div`
  width: auto;
  position: relative;
  flex: 1 1 280px;
  max-width: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px; 

  background: white;
  border-radius: 16px;
  overflow: hidden;
  max-height: max-content;
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
  .distance_tag {
      display: inline-block;
      flex-direction: row;}
    }`
  

export  const Kits_Container = styled.div`
  width: auto;
  position: relative;
  flex: 1 1 280px;
  max-width: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px; 

  background: white;
  border-radius: 16px;
  overflow: hidden;
  max-height: max-content;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;


  h2 {
    font-size: 18px;
    font-weight: 600;
    padding: 0 16px;
    margin: 0;
  }

  .kit_tag {
  list-style: none;
  padding: 0;
  }

  .kit_tag li {
    position: relative;
    padding-left: 46px;
    margin-bottom: 16px; 
    color: #6B7280;
    font-size: 17px;

    }

  .kit_tag li::before {
    content: "";
    width: 8px;
    height: 8px;
    background: #1E88E5;
    border-radius: 50%;
    position: absolute;
    left: 16px;
    top: 0px;
    border: 6px solid #ebf4fc;
  }
    `

export const DistanceTag = styled.span`
  background: #1E4FA3;
  color: #ffffff;

  font-size: 16px;
  font-weight: 600;

  padding: 10px 18px;

  border-radius: 10px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: max-content;
`;
export const DistancesRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;
export const Organisation_Container = styled.div`
  width: auto;
  position: relative;
  flex: 1 1 280px;
  max-width: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px; 

  background: white;
  border-radius: 16px;
  overflow: hidden;
  max-height: max-content;
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
  flex: 1 1 320px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 24px; 

  height: max-content;

  background: white;
  border-radius: 16px;
  position: sticky;
  top: 20px;
`;

export const Info_about = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap; 

  margin: 0 auto;
  margin-top: 40px;

  max-width: 1200px;

`

export const Head_Lote = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 12px;
`

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 6px 0;

  span{
    font-size: 14px;
    color: #475569;
  }
`
export const Lote = styled.div<{ status: string }>`
  display: flex;
  flex-direction: column;



  background: ${({ status }) =>
    status === "Disponível" ? "#eef4ff" : "white"};

  border: ${({ status }) =>
    status === "Disponível" ? "2px solid #2563eb" : "1px solid #e2e8f0"};

  border-radius: 16px;

  padding: 20px;
  gap: 3px;
  margin-bottom: 1px;

  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
`

export const Status = styled.span<{status:string}>`

  padding: 4px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;

  color: white !important;

  background: ${({status}) =>
    status === "Disponível"
      ? "#2563eb"
      : status === "Esgotado"
      ? "#1e3a8a"
      : "#64748b"};
`
