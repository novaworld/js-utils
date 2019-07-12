import shortid from 'shortid'

function uniqid(prefix, suffix) {
    return (prefix || '') + shortid.generate() || (suffix || '');
}

export default uniqid