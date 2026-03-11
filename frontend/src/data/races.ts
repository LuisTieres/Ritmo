// src/data/races.ts
import type{ Race } from '../types/Race.ts'

export const races: Race[] = [
  {
    id: "sp-marathon-2026",
    title: "Maratona Internacional de São Paulo 2026",
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&h=400&fit=crop",
    city: "São Paulo - SP",
    location_clue: "Parque do Ibirapuera - Portão 7",
    location_street:  "Av. Pedro Álvares Cabral - Vila Mariana, São Paulo - SP",
    date: "12 Mar 2026",
    time: {"all" : ["06:00"]},
    distances: ["5km", "10km", "21km"],
    modality: "Rua",
    price: "R$ 120",
    description: "A maratona clássica de São Paulo com trajetos para todos os níveis",
    about: "A Maratona Internacional de São Paulo é um dos eventos mais tradicionais do calendário de corridas brasileiro. Com percurso totalmente plano, passa pelos principais pontos turísticos da cidade, proporcionando uma experiência única aos participantes.",
    kit: ["Kit de corrida com camiseta oficial", "Número de peito com chip de cronometragem", "Medalha de conclusão",
"Hidratação durante o percurso", "Frutas e alimentação pós-prova","Seguro de acidentes pessoais"],
    organizer: [
      {
        name: "SP Running Events",
        email: "contato@sprunningevents.com.br",
        phone: "(11) 98765-4321"
      }
    ],
    lotes: [
    {
      name: "1º Lote",
      status: "Esgotado",
      distances: [
        { distance: "5K", price: "R$ 79.90" },
        { distance: "10K", price: "R$ 89.90" },
        { distance: "21K", price: "R$ 119.90" },
        { distance: "42K", price: "R$ 149.90" },
      ]
    },
    {
      name: "2º Lote",
      status: "Disponível",
      distances: [
        { distance: "5K", price: "R$ 89.90" },
        { distance: "10K", price: "R$ 99.90" },
        { distance: "21K", price: "R$ 139.90" },
        { distance: "42K", price: "R$ 179.90" },
      ]
    }
  ]
  },
  {
    id: "trail-pao-de-acucar-2026",
    title: "Corrida Trail do Pão de Açúcar",
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&h=400&fit=crop",
    city: "Rio de Janeiro, RJ",
    location_clue: "Parque do Ibirapuera - Portão 7",
    location_street:  "Av. Pedro Álvares Cabral - Vila Mariana, São Paulo - SP",
    date: "22 de Abril de 2026",
    time: {"all" : ["08:00"]},
    distances: ["10K", "21K"],
    modality: "Trilha",
    price: "R$ 120,00",
    description: "Uma emocionante corrida de trilha com vista panorâmica do Pão de Açúcar",
    about: "A Maratona Internacional de São Paulo é um dos eventos mais tradicionais do calendário de corridas brasileiro. Com percurso totalmente plano, passa pelos principais pontos turísticos da cidade, proporcionando uma experiência única aos participantes.",
    kit: ["Kit de corrida com camiseta oficial", "Número de peito com chip de cronometragem", "Medalha de conclusão",
"Hidratação durante o percurso", "Frutas e alimentação pós-prova","Seguro de acidentes pessoais"],
    organizer: [
      {
        name: "SP Running Events",
        email: "contato@sprunningevents.com.br",
        phone: "(11) 98765-4321"
      }
    ],
    lotes: [
    {
      name: "1º Lote",
      status: "Esgotado",
      distances: [
        { distance: "5K", price: "R$ 79.90" },
        { distance: "10K", price: "R$ 89.90" },
        { distance: "21K", price: "R$ 119.90" },
        { distance: "42K", price: "R$ 149.90" },
      ]
    },
    {
      name: "2º Lote",
      status: "Disponível",
      distances: [
        { distance: "5K", price: "R$ 89.90" },
        { distance: "10K", price: "R$ 99.90" },
        { distance: "21K", price: "R$ 139.90" },
        { distance: "42K", price: "R$ 179.90" },
      ]
    }
  ]
  }
]
