import Joi from '@hapi/joi';

export default async payload => {
    return Joi.object({
        code: Joi.string(),
        body: Joi.string().min(5)
    }).unknown();
};
