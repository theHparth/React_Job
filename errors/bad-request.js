import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api.js";

class BedRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default BedRequestError;
