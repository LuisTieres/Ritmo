
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { estados, meses, distancias, modalidades } from '../../data/filters.ts'
import { races } from '../../data/races.ts'
import Header from "../Head/Head";
import Footer from "../Footer/Footer.tsx";
import type{ Heads } from '../../types/Head.ts'
import {
  NavFiltrosContainer,
  BannerContainer,
  FiltrosCorridaContainer,
  FiltroButton,
  Overlay,
  MobileDrawer,
  RacesContainer,
  RaceCard,
  RaceFooter,
  ViewButton,
  DistancesRow,
  PriceContainer,
  DistanceTag,
  ModalityBadge,
} from "./home.styles";

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [estado, setEstado] = useState('')
  const [mes, setMes] = useState('')
  const [distancia, setDistancia] = useState('')
  const [modalidade, setModalidade] = useState('')
  const [categoria, setCategoria] = useState("");
  
  const headType: Heads = {
    head_type: true
  }

  return (
    <main style={{ marginTop: "80px" }}>

      <Header head_type={headType.head_type}/>

      <BannerContainer>
        <h2 className="slogan">
          <span className="dark-blue">Um cadastro para </span>
          <span className="light-blue">
            todas as suas
            <br />
            corridas
          </span>
        </h2>

        <p className="titulo-2">
          Encontre e inscreva-se nas melhores corridas de rua, trilha e maratonas
          do Brasil
          <br />
          em poucos cliques.
        </p>
      </BannerContainer>

      <NavFiltrosContainer>
        <ul>
          <li><button onClick={() => setCategoria("")}>Todos</button></li>
          <li><button onClick={() => setCategoria("Rua")}>Rua</button></li>
          <li><button onClick={() => setCategoria("Trilha")}>Trilha</button></li>
          <li><button onClick={() => setCategoria("Maratona")}>Maratona</button></li>
        </ul>
      </NavFiltrosContainer>

      <section style={{ display: "flex", width : "100%" }}>

        <FiltrosCorridaContainer>
          <h3>Filtros</h3>
          <select onChange={e => setEstado(e.target.value)}>
            <option value="">Todos os Estados</option>
            {estados.map(uf => (
              <option key={uf} value={uf}>{uf}</option>
            ))}
          </select>

          <select onChange={e => setMes(e.target.value)}>
            <option value="">Todos os Meses</option>
            {meses.map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>

          <select onChange={e => setDistancia(e.target.value)}>
            <option value="">Todas as Distâncias</option>
            {distancias.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          <select onChange={e => setModalidade(e.target.value)}>
            <option value="">Todas as Modalidades</option>
            {modalidades.map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </FiltrosCorridaContainer>

        <RacesContainer>
          {races
            .filter(race => !categoria || race.modality === categoria)
            .map((race) => (
            <RaceCard key={race.id}>

              <img src={race.image} alt={race.title} />

              <ModalityBadge>
                {race.modality}
              </ModalityBadge>
              

              <h2>{race.title}</h2>
              <p>{race.city}</p>
              <p>{race.date}</p>

              <DistancesRow>
                {race.distances.map((distancia) => (
                  <DistanceTag key={`${race.id}-${distancia}`}>
                    {distancia}
                  </DistanceTag>
                ))}
              </DistancesRow>

              <RaceFooter>

                <PriceContainer>
                  <span>A partir de</span>
                  <strong>{race.price}</strong>
                </PriceContainer>

                <ViewButton
                  onClick={() => navigate(`/race/${race.id}`)}
                >
                  Ver Corrida
                </ViewButton>

              </RaceFooter>

            </RaceCard>
          ))}
        </RacesContainer>
        
      </section>

      <FiltroButton onClick={() => setOpen(true)}>
        Filtros
      </FiltroButton>

      <Overlay open={open} onClick={() => setOpen(false)} />

      <MobileDrawer open={open}>

        <button className="close" onClick={() => setOpen(false)}>
          ✕
        </button>

        <h3>Filtros</h3>

        <select onChange={e => setEstado(e.target.value)}>
          <option value="">Todos os Estados</option>
          {estados.map(uf => (
            <option key={uf} value={uf}>{uf}</option>
          ))}
        </select>

        <select onChange={e => setMes(e.target.value)}>
          <option value="">Todos os Meses</option>
          {meses.map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        <select onChange={e => setDistancia(e.target.value)}>
          <option value="">Todas as Distâncias</option>
          {distancias.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        <select onChange={e => setModalidade(e.target.value)}>
          <option value="">Todas as Modalidades</option>
          {modalidades.map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

      </MobileDrawer>
      
    <Footer />

    </main>
  );
}