import app from "./app";
import { ErrorHandler } from "./components/error";

const server = app.listen(3334);

process.on("unhandledRejection", (reason: string) => {
  throw reason;
});

process.on("uncaughtException", (error: Error) => {
  ErrorHandler.handleError(error);
  if (!ErrorHandler.isTrustedError(error)) {
    server.close(() => {
      console.log("chegou aqui");
      process.exit(1);
    });
  }
});
