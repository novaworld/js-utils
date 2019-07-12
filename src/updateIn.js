import {update as _update, isPlainObject, merge, isFunction } from 'lodash-es'

function updateIn (object, path, updater) {
    if(isFunction(updater)) return _update(object, path, updater)

    if(isPlainObject(updater)) return _update(object, path, v => merge(v, updater))

    return object
}

export default updateIn