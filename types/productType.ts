type StringOrNull = string | undefined
type NumberOrNull = number | undefined

export interface Product {
  id?: NumberOrNull
  title?: StringOrNull
  description?: StringOrNull
  price?: NumberOrNull
  discountPercentage?: NumberOrNull
  rating?: NumberOrNull
  stock?: NumberOrNull
  brand?: StringOrNull
  category?: StringOrNull
  thumbnail?: StringOrNull
  images?: StringOrNull[]
}
