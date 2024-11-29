import { Dvd } from "./dvd";
import { IHomeTheather } from "./home-theater.interface";
import { Projector } from "./projector";

export class HomeTheater implements IHomeTheather {
  private projector: Projector;
  private dvd: Dvd;
  constructor(projector: Projector, dvd: Dvd) {
    this.projector = projector || new Projector();
    this.dvd = dvd || new Dvd();
  }

  OpenTheather(): void {
    this.projector.on();
    this.projector.setDvd(this.dvd);
    this.projector.setSurround();
    this.projector.setVolume(5);
  }

  CloseTheather(): void {
    this.projector.off();
  }
}
