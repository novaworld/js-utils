import {get} from 'lodash-es'

function stringifyJSON() {
    const replacerFn = (k, v) => {
        // if we get a function, give us the code for that function
        if (typeof v === 'function') {
            return v.toString();
        }
        return v;
    }

    let value = get(arguments, 0),
        replacer = get(arguments, 1, replacerFn),
        // get a stringified version of our object
        // and indent the keys at 2 spaces
        indent = get(arguments, 2, 2)

    return JSON.stringify(value, replacer, indent)
}

export default stringifyJSON