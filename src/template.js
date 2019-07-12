import {get, isString, isPlainObject, isFunction} from 'lodash-es'
import Handlebars from 'handlebars/dist/cjs/handlebars'

const template = (tpl, data) => {
    let content = ''

    if (isString(tpl)) {
        content = Handlebars.compile(tpl)(data)
    } else if (isPlainObject(tpl)) {
        let url = get(tpl, 'url')
        return $.post(url, data)
    } else if (isFunction(tpl)) {
        content = tpl(data)
    }

    return content
}

export default template