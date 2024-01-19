// Define the class Airport
class Airport {
    // Constructor with attributes stored as underscore attributes
    constructor(name, code) {
      this._name = name;
      this._code = code;
    }

    toString() {
      return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
    }
  }

  export default Airport;