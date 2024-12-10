import { IIterator } from "./iterator.interface";
import { WordsCollection } from "./WordsCollection";

export class AlphabeticalOrderIterator implements IIterator<string> {
  private position: number = 0;

  private isReverse: boolean = false;

  private wordCollection: WordsCollection;

  constructor(wordCollection: WordsCollection, reverse: boolean = false) {
    this.wordCollection = wordCollection;
    this.isReverse = reverse;
    if (this.isReverse) {
      this.position = this.wordCollection.getCount() - 1;
    }
  }

  current(): string {
    return this.wordCollection.getItem()[this.position];
  }

  key(): number {
    return this.position;
  }

  next(): string {
    this.position += this.isReverse ? -1 : 1;
    const item = this.wordCollection.getItem()[this.position];

    return item;
  }

  rewind(): void {
    this.position = this.isReverse ? this.wordCollection.getCount() - 1 : 0;
  }

  valid(): boolean {
    if (this.isReverse) {
      return this.position >= 0;
    }
    return this.position < this.wordCollection.getCount();
  }
}
