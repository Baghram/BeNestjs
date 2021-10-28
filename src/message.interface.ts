export interface MessageResponse {
  message: String;
}

export interface OKResponse extends MessageResponse {
  data: String;
}
export interface AddBalanceResponse extends MessageResponse {
  data: {
    email: String;
    balance: Number;
  };
}
export interface ErrorResponse extends MessageResponse {
  error: String;
}
