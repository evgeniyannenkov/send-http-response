const rootSettings = {
    variables: ['sdafasdfsadf'],
    listItems: [
        {
            componentId: '@onereach/sc-textinput@0.0.1',
            uuid: 'ad6e9ea8-fc69-4b49-8126-afaf5f9cfb65'
        }
    ],
    settingsByUuid: {
        'ad6e9ea8-fc69-4b49-8126-afaf5f9cfb65': {
            label: 'lab',
            variable: 'sdafasdfsadf',
            placeholder: '',
            helpText: 'asdfsdf',
            defaultValue: '`asdfsdsdf`',
            multiline: false,
            allowMergeFields: true,
            allowCodeMode: true,
            customValidator: '(payload, {Joi}) => Joi.string().min(9)',
            renderCondition: '',
            disabledCondition: ''
        }
    }
};

async function getValidatorById(id) {
    return import('http://localhost:5000/' + id + '/lib/validator.js').then(
        m => m.default
    );
}

async function root(settings) {
    return async function(payload) {
        const validator = await getValidatorById('@onereach/sc-root@0.0.1');

        const getJoiSchema = await validator(settings);

        return getJoiSchema(payload);
    };
}

export default root(rootSettings);
