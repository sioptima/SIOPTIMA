export class ResponseError extends Error {
  constructor(status, message, success, data) {
    super(message);
    this.name = "ResponseError"; 
    this.status = status;
    this.success = success || false;
    this.data = data || null
  }
}
