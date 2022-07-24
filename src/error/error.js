class BaseError extends Error {
  constructor(type, message, status) {
    super(message);
    this.type = type;
    this.status = status;
  }
}

class ValidationError extends BaseError {
  constructor(message = 'Invalid data format!') {
    super('Validation', message, 422);
  }
}

class EntityError extends BaseError {
  constructor(message = 'Url already taken!') {
    super('Entity conflict', message, 409);
  }
}

class DuplicateError extends BaseError {
  constructor(message = 'You are trying to insert duplicate values!') {
    super('Entity conflict', message, 409);
  }
}

class NotFoundError extends BaseError {
  constructor(message = 'Page not found.') {
    super('Not found', message, 404);
  }
}

module.exports = {
  BaseError,
  ValidationError,
  EntityError,
  NotFoundError,
  DuplicateError,
};
