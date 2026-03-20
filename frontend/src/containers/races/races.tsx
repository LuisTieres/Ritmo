import { races } from "../../data/races";
import type{ Heads } from '../../types/Head.ts'
import { ImageContainer, DistanceTag, Button_Bar, ModalityBadge, Lotes_Container, Kits_Container, Head_Lote ,Titulo_race,Local_Data_Container,DistancesContainer, RaceDetaisl,About_race, Organisation_Container, Lote, Status, InfoRow, Info_about, DistancesRow} from "./races.styles";
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
        head_type: 'race'
      }

    return (
        <main style={{ marginTop: "80px", background: "#fafafa" }}>
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

            < Info_about>
                <RaceDetaisl>
                    <About_race>
                        <h4>Sobre a corrida</h4>

                        <p className="description">
                            {race.about}
                        </p>

                        <div className="info_row">
                            <span className="icon">📍</span>
                            <div>
                            <p className="location">{race.location_clue}</p>
                            <p className="address">{race.location_street}</p>
                            </div>
                        </div>

                        <div className="info_row">
                            <span className="icon">⏰</span>
                            <p className="time">Largada às {race.time.all.join(", ")}</p>
                        </div>
                        </About_race>

                    <DistancesContainer>
                        <h2> Distâncias disponíveis </h2>
                        <DistancesRow>
                        {race.distances.map((dist, index) => (
                            <DistanceTag key={index}>{dist}</DistanceTag>
                        ))}
                        </DistancesRow>
                    </DistancesContainer>

                    <Kits_Container>
                        <h2>O que está incluso</h2>
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

                    <h2>Lotes e valores</h2>

                    {race.lotes.map(lote => (
                        <Lote key={lote.name} status={lote.status}>
                        <Head_Lote>
                            <h3>{lote.name}</h3>
                            <Status status={lote.status}>{lote.status}</Status>
                        </Head_Lote>
                        {lote.distances.map((dist, index) => (
                            <InfoRow key={index}>
                            <span>{dist.distance}</span>
                            <span>{dist.price}</span>
                            </InfoRow>
                        ))}

                        </Lote>
                    ))}

                    </Lotes_Container>
            </Info_about>

            <Footer/>
        </main>
    )
}
