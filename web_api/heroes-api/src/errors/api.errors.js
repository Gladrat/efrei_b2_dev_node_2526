class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

class ConflictError extends ApiError {
  constructor(message) {
    super(message, 409); // Conflit
  }
}

class ValidatorError extends ApiError {
  constructor(message) {
    super(message, 400); // Bad request
  }
}

class NotFoundError extends ApiError {
  constructor(message) {
    super(message, 404); // Not found
  }
}

class InternalServerError extends ApiError {
  constructor(message) {
    super(message, 500); // Internal server error
  }
}

export {
  ApiError,
  ValidatorError,
  ConflictError,
  NotFoundError,
  InternalServerError,
};
