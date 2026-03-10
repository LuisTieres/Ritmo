import { races } from "../../data/races";
import type{ Heads } from '../../types/Head.ts'
import { ImageContainer, Botton_Bar, ModalityBadge, Titulo_race,Local_Data_Container } from "./races.styles";
import { useNavigate } from "react-router-dom";
import Header from "../Head/Head";
import Footer from "../Footer/Footer.tsx";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Button } from "style-components";

export default function RacePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const race = races.find(r => r.id === id);

    if (!race) {
        return <p>Corrida não encontrada</p>;
    }

     const headType: Heads = {
        head_type: false
      }

    return (
        <main style={{ marginTop: "100px" }}>
            <Header head_type={headType.head_type}/>
            <Botton_Bar>
                <Button onClick={() => navigate(`/`)}>← Voltar</Button>
            </Botton_Bar>
            
            <ImageContainer>
                <img src={race.image} alt={race.title} />
                <ModalityBadge>
                    {race.modality}
                </ModalityBadge>

                <Titulo_race>
                    {race.title}
                </Titulo_race>

                <Local_Data_Container>
                    <p> <FaLocationDot /> {race.location}</p>
                    <p> <FaCalendar /> {race.date}</p>
                </Local_Data_Container>
            </ImageContainer>
            <Footer/>
        </main>
    )
}
