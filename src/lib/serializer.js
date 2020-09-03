import _mapValues from 'lodash/mapValues';
import _isArray from 'lodash/isArray';
import _isObject from 'lodash/isObject';
import _map from 'lodash/map';

function toJson(data, key) {
    if (_isArray(data)) {
        return `[${_map(data, toJson).join(',')}]`;
    }
    if (_isObject(data)) {
        return `{${_map(data, (value, key) => `${key}: ${toJson(value)}`).join(
            ','
        )}}`;
    }
    if (key === 'body') return data;
    else return JSON.stringify(data);
}

export default async stepData => _mapValues(stepData, toJson);
