import modelFactory from 'macaw-ui/dist/libs/models'
import models from '../models/index.js'

const _m = {}
Object.keys(models).forEach((key) => {
  _m[`$${key}`] = models[key]
})

export default modelFactory(_m)
