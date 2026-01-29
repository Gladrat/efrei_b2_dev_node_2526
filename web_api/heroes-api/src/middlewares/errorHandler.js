import ErrorManager from "../errors/api.errors.js";

export function errorHandler(err, req, res, next) {
  if (err instanceof ErrorManager.ApiError) {
    res.status(err.statusCode).json({ error: err.message });
  } else {
    console.error("Unexpected error:", err);

    const internalError = new ErrorManager.InternalServerError();
    res.status(internalError.statusCode).json({ error: internalError.message });
  }
}
