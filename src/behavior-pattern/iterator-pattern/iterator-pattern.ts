import { AlphabeticalOrderIterator } from "./classes/AlphabeticalOrderIterator";
import { IIterator } from "./classes/iterator.interface";
import { WordsCollection } from "./classes/WordsCollection";

export class IteratorPattern {
  constructor() {
    this.main();
  }

  private main() {
    const wordCollection = new WordsCollection();
    wordCollection.addItem("Tonkla");
    wordCollection.addItem("Pentor");
    wordCollection.addItem("Film");
    const wcIterator: IIterator<string> = wordCollection.getIterator();
    console.log(wcIterator.current());
    console.log(wcIterator.next());
    console.log(wcIterator.next());
    wcIterator.rewind();
    console.log(wcIterator.current());
  }
}
