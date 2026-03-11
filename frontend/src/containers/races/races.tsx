import { races } from "../../data/races";
import type{ Heads } from '../../types/Head.ts'
import { ImageContainer, Button_Bar, ModalityBadge, Inforow, Lotes_Container, Kits_Container ,Titulo_race,Local_Data_Container,DistancesContainer, RaceDetaisl,About_race, Organisation_Container} from "./races.styles";
import { useNavigate } from "react-router-dom";
import Header from "../Head/Head";
import Footer from "../Footer/Footer.tsx";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Button } from "style-components";
import { CgOrganisation } from "react-icons/cg";

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
        <main style={{ marginTop: "80px"}}>
            <Header head_type={headType.head_type}/>
            <Button_Bar>
                <Button onClick={() => navigate(`/`)}>← Voltar</Button>
            </Button_Bar>
            
            <ImageContainer>
                <img src={race.image} alt={race.title} />
                <ModalityBadge>
                    {race.modality}
                </ModalityBadge>

                <Titulo_race>
                    {race.title}
                </Titulo_race>

                <Local_Data_Container>
                    <p> <FaLocationDot /> {race.city}</p>
                    <p> <FaCalendar /> {race.date}</p>
                </Local_Data_Container>
            </ImageContainer>
            < Inforow>
                <RaceDetaisl>
                    <About_race>
                        <h2 className="about_race_string">Sobre a corrida</h2>

                        <p>{race.about}</p>
                        <p>{race.location_clue}</p>
                        <p>{race.location_street}</p>
                        <p>Largada ás {race.time.all.join(", ")}</p>

                    </About_race>

                    <DistancesContainer>
                        <h2> Distâncias disponíveis </h2>
                        <p className="distance_tag">
                            {race.distances.map((dist, index) => (
                                <span key={index} >{ dist }</span>
                            ))}
                        </p>
                    </DistancesContainer>

                    <Kits_Container>
                        <ul className="kit_tag">
                            {race.kit.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </Kits_Container>

                    <Organisation_Container>
                        <h2>Organizador</h2>
                        <p>{race.organizer[0]?.name}</p>
                        <p>{race.organizer[0]?.email}</p>
                        <p>{race.organizer[0]?.phone}</p>
                    </Organisation_Container>

                </RaceDetaisl>

                <Lotes_Container> 
                    {race.lotes.map(lote => (
                        <div className="lote" key={lote.name}>
                            <h3>{lote.name} - {lote.status}</h3>

                            <ul>
                                {lote.distances.map((dist, index) => (
                                    <li key={index}>{dist.distance} - {dist.price}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </Lotes_Container>
            </Inforow>

            <Footer/>
        </main>
    )
}
