const enum SeatChoice {
  AISLE = "aisle",
  MIDDLE = 3,
  WINDOW,
  FOURTH,
}

const sSeat = SeatChoice.AISLE;

enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}
//if (status === Status.Success) { ... }
