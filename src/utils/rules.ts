export const rules = {
  required: (message: string = "This filed is required") => ({
    required: true,
    message,
  }),
};
