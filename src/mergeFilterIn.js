import {get, filter, reject, merge, isFunction, map} from 'lodash-es'

function mergeFilterIn(object, path, predicate, respTrue, respFalse) {
    let data = get(object, path, [])

    map(filter(data, predicate), v2 => {
        if (isFunction(respTrue)) {
            respTrue(v2)
        } else {
            v2 = merge(v2, respTrue)
        }
    })

    if(respFalse){
        map(reject(data, predicate), v2 => {
            if (isFunction(respFalse)) {
                respFalse(v2)
            } else {
                v2 = merge(v2, respFalse)
            }
        })
    }
}

export default mergeFilterIn