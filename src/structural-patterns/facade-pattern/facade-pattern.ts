import { Dvd } from "./classes/dvd";
import { HomeTheater } from "./classes/home-theater";
import { Projector } from "./classes/projector";

export class FacadePattern {
  constructor() {
    this.main();
  }
  private main(): void {
    const dvd = new Dvd();
    const projector = new Projector();
    const homeTheater = new HomeTheater(projector, dvd);
    homeTheater.OpenTheather();
    homeTheater.CloseTheather();
  }
}
