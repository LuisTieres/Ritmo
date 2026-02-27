// src/types/Race.ts
export interface Race {
  id: string
  title: string
  image: string
  location: string
  date: string
  distances: string[]
  modality: 'Rua' | 'Trilha' | 'Maratona'
  price: string
  description: string
}