export interface IReview {
  data: IData[]
}

interface IData {
  id: number
  name: string
  images: string
  star: string
  message: string
  created_at: string
  updated_at: string
}
