export const createResponse = (data, message = {}, success = true) => {
  return {
    res: data,
    message,
    success,
  };
};
