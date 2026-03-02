// src/containers/styles/global.ts
import styled from "styled-components";


export const BannerContainer = styled.section`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;    

  padding: 0 clamp(16px, 4vw, 40px);
  background-color: #E3F2FD;
  min-height: 400px;

  .dark-blue {
    color: #1E3A5F;
  }

.light-blue {
    color: #1E88E5;
  }

  .slogan {
    font-size: clamp(24px, 5vw, 40px);
    font-weight: 700;
    text-align: center;
    margin-bottom: 16px;
  }

  .titulo-2 {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    color: #585858;
}
`;
export const NavFiltrosContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #FAFAFA;

  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    gap: 12px;

    list-style: none;
    margin: 0;
    padding: 16px clamp(16px, 4vw, 40px);

    width: 100%;
    max-width: 1200px;
  }

  li {
    display: flex;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;

    color: #263238;
    font-size: clamp(14px, 2vw, 18px);
    font-weight: 500;

    padding: 8px 20px;
    border-radius: 20px;
    white-space: nowrap;

    transition: all 0.2s ease;
  }

  button:hover {
    background-color: #E3F2FD;
    color: #1E88E5;
  }

  button.active {
    background-color: #1E88E5;
    color: white;
  }
`;
export const FiltrosCorridaContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 24px;
  background: #FAFAFA;

  select {
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-size: 14px;
    background: white;
  }

  h3 {
    margin-bottom: 8px;
  }

  /* DESKTOP */
  @media (min-width: 1024px) {
    width: 280px;
    min-height: 400px;
    border-right: 1px solid #e5e7eb;
  }

  /* MOBILE */
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const FiltroButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;

  background-color: #1E88E5;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 14px 20px;
  font-size: 16px;
  cursor: pointer;

  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  z-index: 1100;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MobileSheet = styled.div<{ open: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70%;

  background: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 24px;
  box-shadow: 0 -4px 20px rgba(0,0,0,0.15);

  transform: ${({ open }) =>
    open ? "translateY(0)" : "translateY(100%)"};

  transition: transform 0.3s ease-in-out;

  z-index: 1200;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MobileDrawer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 280px;

  background: white;
  padding: 24px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  box-shadow: 4px 0 20px rgba(0,0,0,0.15);

  transform: ${({ open }) =>
    open ? "translateX(0)" : "translateX(-100%)"};

  transition: transform 0.3s ease-in-out;

  z-index: 1200;

  select {
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-size: 14px;
  }

  button.close {
    align-self: flex-end;
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);

  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? "all" : "none")};

  transition: opacity 0.3s ease-in-out;

  z-index: 1100;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const RacesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  padding: 24px;
  width: 100%;
`;

export const RaceCard = styled.div`
  width: 100%;
  position: relative;
  flex: 1 1 280px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 12px;

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

export const ModalityBadge = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;

  background: white;
  color: #1E88E5;
  font-size: 12px;
  font-weight: 600;

  padding: 6px 10px;
  border-radius: 20px;

  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;

export const DistancesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 16px;
`;

export const DistanceTag = styled.span`
  background: #E3F2FD;
  color: #1E88E5;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 12px;
`;

export const RaceFooter = styled.div`
  margin-top: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px;

  border-top: 1px solid #f0f0f0;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 12px;
    color: #999;
  }

  strong {
    font-size: 20px;
    font-weight: 700;
    color: #FF7A00;
  }
`;

export const ViewButton = styled.button`
  background-color: #FF7A00;
  color: white;

  border: none;
  border-radius: 8px;

  padding: 8px 14px;
  font-weight: 600;
  cursor: pointer;

  transition: background 0.2s ease;

  &:hover {
    background-color: #ff9333;
  }
`;
