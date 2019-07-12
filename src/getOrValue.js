import { get, isArray } from 'lodash-es'

function getOrValue(object, path, defaultValue) {
    if(isArray(path)){
        for (let p of path) {
            if(get(object, p)){
                return get(object, p)
            }
        }
    }
    return defaultValue
}

export default getOrValue