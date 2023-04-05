const isDev: boolean = process.env.NODE_ENV === "development";

export const logger = {
  debug: isDev ? console.log : console.debug,
  info: console.log,
  error: console.error,
};
