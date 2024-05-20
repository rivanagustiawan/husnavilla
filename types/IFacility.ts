export interface IFacility {
  data: IData[]
}

interface IData {
  id: number
  name: string
  description: string
  images: string
  created_at: string
  updated_at: string
}
