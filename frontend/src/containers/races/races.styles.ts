import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;    

  padding: 0 clamp(16px, 4vw, 40px);
  background-color: #E3F2FD;
  min-height: 400px;

  background: white;
  border-radius: 16px;
  overflow: hidden;

  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
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