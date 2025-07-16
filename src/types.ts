export type ApiResponse =
  | { status: 'success'; data: string }
  | { status: 'error'; message: string }
  | { status: 'pending' };
