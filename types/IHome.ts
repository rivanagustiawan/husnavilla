export interface IHome {
  data: IData
}

interface IData {
  id: number
  title: string
  sub_title: string
  hero_img: string
  created_at: string
  updated_at: string
}
