// Import the Building class
import Building from './5-building.js';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors === 'number') {
      this._floors = floors;
    }
    else {
      throw TypeError('Floors must be a number');
    }
  }

  get floors() {
    return this._floors;
  }

  set floors(newFloors) {
    if (typeof newFloors === 'number') {
      this._floors = newFloors;
    }
    else {
      throw TypeError('Floors must be a number');
    }
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

export default SkyHighBuilding;