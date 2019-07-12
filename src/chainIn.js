import {update, chain} from 'lodash-es'

function chainIn(object, path) {
    return chain(object).get(path)
}

export default chainIn