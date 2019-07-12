import {update, reject} from 'lodash-es'

function deleteIn(object, path, predicate) {
    return update(object, path, v => reject(v, predicate))
}

export default deleteIn