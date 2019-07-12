import shortid from 'shortid'

function uniqid(prefix, suffix) {
    return (prefix || '') + shortid.generate() || (suffix || '');
}

uniqid.isValid = (id) => shortid.isValid(id)
uniqid.seed = (int) => shortid.seed(int)

export default uniqid