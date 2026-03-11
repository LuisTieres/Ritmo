// src/types/Race.ts
export interface Distance_Lotes {
  distance: string
  price: string
}

export interface Lote {
  name: string       
  status: 'Disponível' | 'Esgotado' | 'Em breve'
  distances: Distance_Lotes[]
}

export interface Company {
  name: string
  email: string
  phone: string
}

export interface Race {
  id: string
  title: string
  image: string
  city: string
  location_clue: string
  location_street: string
  date: string
  time: { [key : string] : string[] }
  distances: string[]
  modality: 'Rua' | 'Trilha' | 'Maratona'
  price: string
  description: string
  about: string
  kit: string[]
  lotes: Lote[]
  organizer: Company[]
}