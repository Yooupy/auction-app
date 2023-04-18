import Joi from "@hapi/joi";

export const registerValidation = (data) => {
  const userSchema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    balance: Joi.number().default(10000),
    fakeMoney: Joi.number().default(10000),
  });
  return userSchema.validate(data);
};

export const loginValidation = (data) => {
  const userSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  return userSchema.validate(data);
};
