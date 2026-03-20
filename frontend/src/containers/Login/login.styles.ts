import styled from "styled-components";
export const Container = styled.main`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: "#fafafa";
`;
export const Card = styled.div`
  width: 100%;
  max-width: 420px;
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
`;

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
export const Title = styled.h2`
  margin-bottom: 24px;
  text-align: center;
`;

export const InputGroup = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-size: 14px;
  display: block;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const PasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  button {
   
    background-color: #2563eb;
    color: black;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    padding: 8px 16px;
    cursor: pointer;
  }
   button:hover {
    background-color: #2563eb;
    color: white;   
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: none;
  background: #2563eb;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-top: 12px;

  &:hover {
    background: #1d4ed8;
  }
`;

export const LinkButton = styled.button`
  background: none;
  border: none;
  color: #2563eb;
  cursor: pointer;
  font-size: 13px;
  margin-top: 8px;
`;