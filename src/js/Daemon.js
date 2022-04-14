import Character from "./app";

export default class Daemon extends Character {
  constructor(type) {
    super(type);
    this.attack = 100;
    this.stoned = false;
  }
}
