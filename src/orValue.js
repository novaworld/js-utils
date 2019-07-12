function orValue() {
    for (let i in arguments) {
        if (arguments[i]) {
            return arguments[i]
        }
    }
}

export default orValue