import {update, castArray} from 'lodash-es'

function prependIn(object, path, value) {
    return update(object, path, v => castArray(value).concat(v))
}

export default prependIn