exports.checkIfNULLOrUndefined = function (val) {
    if (val == null || typeof val === 'undefined' || val === '') {
        return true;
    }
    return false;
}