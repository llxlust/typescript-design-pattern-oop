import { ConcreateCharacter } from "./concreate-character";

export class CharacterFactory {
  private characters: Map<string, ConcreateCharacter> = new Map();

  constructor() {}

  getCharacter(symbol: string): ConcreateCharacter {
    if (!this.characters.has(symbol)) {
      this.characters.set(symbol, new ConcreateCharacter(symbol));
      return this.characters.get(symbol) as ConcreateCharacter;
    }
    return this.characters.get(symbol) as ConcreateCharacter;
  }
}
