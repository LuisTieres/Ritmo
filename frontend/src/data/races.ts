// src/data/races.ts
import type{ Race } from '../types/Race.ts'

export const races: Race[] = [
  {
    id: "sp-marathon-2026",
    title: "São Paulo Marathon",
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&h=400&fit=crop",
    location: "São Paulo - SP",
    date: "12 Mar 2026",
    distances: ["5km", "10km", "21km"],
    modality: "Rua",
    price: "R$ 120",
    description: "A maratona clássica de São Paulo com trajetos para todos os níveis"
  },
  {
    id: "trail-pao-de-acucar-2026",
    title: "Corrida Trail do Pão de Açúcar",
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&h=400&fit=crop",
    location: "Rio de Janeiro, RJ",
    date: "22 de Abril de 2026",
    distances: ["10K", "21K"],
    modality: "Trilha",
    price: "R$ 120,00",
    description: "Uma emocionante corrida de trilha com vista panorâmica do Pão de Açúcar"
  }
]
