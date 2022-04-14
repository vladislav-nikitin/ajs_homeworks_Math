export default class Character {
  constructor(type) {
    this.type = type;
    this.attack = undefined;
    this.distance = undefined;
    this.stoned = undefined;
  }

  set stoned() {
    this.stoned = true
  }

  get stoned() {
    return this.stoned
  }

  set attack() {
    //this.attack = attack
  }

   get attack() {
    const attack = this.attack * (1 - (this.distance - 1) / 10);
    if (this.stoned === true) {
      return attack - Math.log2(this.distance) * 5;
    }
    return attack;
  }
}
