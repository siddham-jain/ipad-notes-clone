const Joi = require('joi');

const imageDataSchema = Joi.object({
    image: Joi.string().required(),
    dict_of_vars: Joi.object().required()
});

module.exports = {
    imageDataSchema
};