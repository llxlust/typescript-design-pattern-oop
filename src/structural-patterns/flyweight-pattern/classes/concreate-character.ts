import { ICharacter } from "./character.interface";

export class ConcreateCharacter implements ICharacter {
  private readonly symbol: string;
  constructor(symbol: string) {
    this.symbol = symbol;
  }
  render(posX: number, posY: number) {
    console.log(
      `User with symbol ${this.symbol} render on X:${posX} Y:${posY}`
    );
  }
}
