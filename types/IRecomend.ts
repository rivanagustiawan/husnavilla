export interface IRecomend {
  data: IData[]
}
interface IData {
  id: number
  name: string
  distance: number
  maps: string
  created_at: string
  updated_at: string
}