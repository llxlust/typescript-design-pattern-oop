export interface IHandler<Request = string, Result = string> {
  setNext(handler: IHandler<Request, Result>): IHandler<Request, Result>;

  handle(request: Request): Result | null;
}
