export const createResponse = <T>(
  data: T,
  message: string | object = {},
  success: boolean = true
): { res: T; message: string | object; success: boolean } => {
  return {
    res: data,
    message,
    success,
  };
};
