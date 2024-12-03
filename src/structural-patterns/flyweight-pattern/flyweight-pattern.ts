import { CharacterFactory } from "./classes/character-factory";
import { ConcreateCharacter } from "./classes/concreate-character";

export class FlyWeight {
  constructor() {
    this.main();
  }
  private main(): void {
    const flyWeightFactory = new CharacterFactory();
    const characterA: ConcreateCharacter = flyWeightFactory.getCharacter("A");
    const characterB: ConcreateCharacter = flyWeightFactory.getCharacter("B");
    const characterA2: ConcreateCharacter = flyWeightFactory.getCharacter("A");
    characterA.render(10, 20);
    characterB.render(20, 40);
    console.log(
      characterA === characterA2,
      ":check intrinsic between characterA and characterA2"
    );
  }
}
