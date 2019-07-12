import {update} from 'lodash-es'

function appendIn(object, path, value) {
    return update(object, path, v => v.concat(value))
}

export default appendIn