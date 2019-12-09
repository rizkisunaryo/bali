import { CONTAINER_MAX_WIDTH } from '../constants/DimensionConstants'

export const getProductCardImageHeight = () =>
  ((CONTAINER_MAX_WIDTH / 2 - 5 * 3) * 3) / 4
