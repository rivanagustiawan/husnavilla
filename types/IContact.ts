export interface IContact {
  data: IData
}

interface IData {
  id: number
  email: string
  phone: number
  address: string
  maps: string
  instagram: string
  tiktok: string
  created_at: string
  updated_at: string
}