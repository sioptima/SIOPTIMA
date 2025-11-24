export class ResponseError extends Error {
  constructor(status, message, success) {
    super(message);
    this.name = "ResponseError"; 
    this.status = status;
    this.success = success || false;
  }
}
