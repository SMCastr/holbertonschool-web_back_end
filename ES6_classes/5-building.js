// Define the class Building

class Building {

  constructor(sqft) {

    if (typeof sqft === 'number') {
      this._sqft = sqft;
    }
    else {
      throw TypeError('Invalid attribute type');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft === 'number') {
      this._sqft = newSqft;
    }
    else {
      throw TypeError('Sqft must be a number');
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;