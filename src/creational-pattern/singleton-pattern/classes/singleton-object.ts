export class SingletonObject {
  private static instance: SingletonObject;
  public username: string | null = null;
  public static getSingletonObjectInstance(): SingletonObject {
    if (!this.instance) {
      this.instance = new SingletonObject();
      return this.instance;
    }
    return this.instance;
  }
}
