import { Dvd } from "./dvd";

export class Projector {
  isOn!: boolean;
  dvd!: Dvd;
  isSurround!: boolean;
  volume!: number;
  constructor() {}

  on(): void {
    this.isOn = true;
    console.log("Projector is on.");
  }
  off() {
    this.isOn = false;
    console.log("Projector is off.");
  }
  setDvd(dvd: Dvd) {
    this.dvd = dvd;
    console.log("Dvd is coming.");
  }

  setSurround() {
    this.isSurround = true;
    console.log("Projector is surround");
  }

  setVolume(vol: number) {
    this.volume = vol;
    console.log(`Volume is set to ${vol}.`);
  }
}
