export const REQUIRED_FIELD_ERROR_MESSAGE = "This field is required";

export const getServerErrorMessage = (error: any): string => {
  if (error === null || error === undefined) return "";

  if (error?.response?.data?.errorMessage !== undefined)
    return error.response.data.errorMessage;
  if (error?.response?.data?.message !== undefined)
    return error.response.data.message;
  if (error?.errorMessage !== undefined) return error.errorMessage;
  if (error.message !== undefined) return error.message;
  if (error?.request?.status === 500) {
    return error;
  } else if (error?.request?.status === 404) {
    return "Ups, something wen wrong";
  } else {
    return "Error!";
  }
};
