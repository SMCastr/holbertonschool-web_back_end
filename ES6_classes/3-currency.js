// Define a class Currency:
class Currency {
    constructor(code, name) {
        if (typeof code === 'string'
        && typeof name === 'string') {
            this._code = code;
            this._name = name;
        }
        else {
            throw TypeError('Invalid attribute type');
        }
    }

    get code() {
        return this._code;
    }

    set code(newCode) {
        if (typeof newCode === 'string') {
            this._code = newCode;
        }
        else {
            throw TypeError('Code must be a string');
        }
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName === 'string') {
            this._name = newName;
        }
        else {
            throw TypeError('Name must be a string');
        }
    }

    displayFullCurrency() {
        return `${this.name} (${this.code})`;
    }
}

export default Currency;