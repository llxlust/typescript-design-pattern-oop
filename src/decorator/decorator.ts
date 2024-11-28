function xssValidator() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(args, ":from decorator");
      const pattern = /[<>/]/;
      for (let i = 0; i < args.length; i++) {
        if (pattern.test(args[i])) {
          throw new Error("Found XSS");
        }
      }
      return originalMethod.apply(this, args);
    };
  };
}

class DecoratorTest {
  constructor() {}
  @xssValidator()
  decorator(name: string, age: number) {
    console.log("Hello original");
  }
}
const decoratorTest = new DecoratorTest();
decoratorTest.decorator("Tonkla", 20);
