import { IAggregator } from "./aggregator.interface";
import { AlphabeticalOrderIterator } from "./AlphabeticalOrderIterator";
import { IIterator } from "./iterator.interface";

export class WordsCollection implements IAggregator {
  private items: string[] = [];

  public getItem(): string[] {
    return this.items;
  }

  public getCount(): number {
    return this.items.length;
  }

  public addItem(input: string): void {
    this.items.push(input);
  }

  public getIterator(): IIterator<string> {
    return new AlphabeticalOrderIterator(this);
  }

  public getReverseIterator(): IIterator<string> {
    return new AlphabeticalOrderIterator(this, true);
  }
}
