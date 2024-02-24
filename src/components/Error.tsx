import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { FC } from "react";

interface IErrorProps {
  error: SerializedError | FetchBaseQueryError | undefined;
}

const ErrorMessage: FC<IErrorProps> = ({ error }) => {
  if (!error) return null;
  if ("status" in error) {
    // you can acess all properties of `FetchBaseQueryError` here
    const err = "error" in error ? error.error : JSON.stringify(error.data);
    return (
      <div className="error-message">
        <p>An error has occurred:</p>
        <p>{err}</p>
      </div>
    );
  }
  // properties of `SerializedError` here
  return <div className="error-message">{error.message}</div>;
};

export default ErrorMessage;
