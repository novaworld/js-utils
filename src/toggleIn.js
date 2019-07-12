import {update} from 'lodash-es'

function toggleIn(object, path) {
    return update(object, path, v => !v)
}

export default toggleIn