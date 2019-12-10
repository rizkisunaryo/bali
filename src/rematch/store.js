import { init } from '@rematch/core'

import * as PageModel from './models/PageModel'
import * as ProductModel from './models/ProductModel'

export const initializeStore = () =>
  init({ models: { ...PageModel, ...ProductModel } })
