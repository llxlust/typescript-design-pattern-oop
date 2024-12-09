// creational-pattern
import { AbstractFactory } from "./creational-pattern/abstract-factory-pattern/abstract-factory-pattern";
import { Builder } from "./creational-pattern/builder-pattern/builder-pattern";
import { FactoryMethod } from "./creational-pattern/factory-method-pattern/factory-method-pattern";
import { Prototype } from "./creational-pattern/prototype-pattern/prototype-pattern";
import { SingletonPattern } from "./creational-pattern/singleton-pattern/singleton-pattern";
// structural-pattern
import { AdapterPattern } from "./structural-patterns/adapter-pattern/adapter-pattern";
import { BridgePattern } from "./structural-patterns/bridge-pattern/bridge-pattern";
import { CompositePattern } from "./structural-patterns/composite-pattern/composite-pattern";
import { DecoratorPattern } from "./structural-patterns/decorator-pattern/decorator-pattern";
import { FacadePattern } from "./structural-patterns/facade-pattern/facade-pattern";
import { ProxyPattern } from "./structural-patterns/proxy-pattern/proxy-pattern";
import { FlyWeight } from "./structural-patterns/flyweight-pattern/flyweight-pattern";
// behavior-pattern
import { ChainPattern } from "./behavior-pattern/chain-of-responsibility-pattern/chain-of-responsibility-pattern";
import { CommandPattern } from "./behavior-pattern/command-pattern/command-pattern";
class Main {
  constructor() {
    this.main();
  }
  private main(): void {
    const command = new CommandPattern();
  }
}
const mainInstance: Main = new Main();
