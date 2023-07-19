export function inputValidations(reg) {
  switch (reg) {
    case "title":
      return {
        minLength: {
          value: 6,
          message: "Min 6 characters",
        },
        maxLength: {
          value: 40,
          message: "Max 40 characters",
        },
      };
    case "slogan":
      return {
        minLength: {
          value: 6,
          message: "Min 6 characters",
        },
        maxLength: {
          value: 100,
          message: "Max 100 characters",
        },
      };
    case "details":
      return {
        minLength: {
          value: 6,
          message: "Min 6 characters",
        },
        maxLength: {
          value: 400,
          message: "Max 400 characters",
        },
      };
    case "author":
      return {
        minLength: {
          value: 6,
          message: "Min 6 characters",
        },
        maxLength: {
          value: 18,
          message: "Max 18 characters",
        },
      };
    case "goal":
      return {
        pattern: {
          value: /^[1-9]{1}[0-9]{0,}/,
          message: "Must be a integer number up to 0",
        },
        maxLength: {
          value: 6,
          message: "Max 999 999 $",
        },
      };
    case "img":
      return {
        pattern: {
          value: /^(https:\/\/)/,
          message: "Wrong url format",
        },
      };
    default:
      return {};
  }
}
