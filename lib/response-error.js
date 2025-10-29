export class ResponseError extends Error {
  constructor(status, message) {
    super(message);
    this.name = "ResponseError"; 
    this.status = status;
  }
}
