import {update, filter} from 'lodash-es'

function filterIn(object, path, predicate) {
    return update(object, path, v => filter(v, predicate))
}

export default filterIn