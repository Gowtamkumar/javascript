interface JoiValidationError {
  name: string;
  error: any; // Adjust the type as per your JoiValidationError structure
}

interface CustomError {
  name: string;
  errors?: any; // Adjust the type as per your CustomError structure
}

class ErrorResponse extends Error {
  statusCode: number;
  joiValidationErrors?: any;
  customErrors?: any;

  constructor(message: string, statusCode: number, option?: JoiValidationError | CustomError) {
    super(message);
    this.statusCode = statusCode;

    if (option && option.name === "JoiValidationError") {
      this.joiValidationErrors = (option as JoiValidationError).error;
    }
    if (option && option.name === "CustomError") {
      this.customErrors = (option as CustomError).errors || {};
    }

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorResponse;
