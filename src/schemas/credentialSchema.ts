import Joi from 'joi'

export const credentialSchema = Joi.object({
  title: Joi.string().required(),
  url: Joi.string().uri().required(),
  username: Joi.string().required(),
  password: Joi.string().required()
})
