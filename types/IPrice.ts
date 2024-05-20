export interface IPrice {
  data: IData
}

interface IData {
  id: number
  type: string
  normal: string
  discount: string
  price: string
  display: string
  created_at: string
  updated_at: string
}
