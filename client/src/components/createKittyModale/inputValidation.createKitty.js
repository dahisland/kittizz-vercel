export function inputValidations(reg) {
  switch (reg) {
    case "title":
      return {
        required: {
          value: true,
          message: "This field is required",
        },
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
        required: {
          value: true,
          message: "This field is required",
        },
        minLength: {
          value: 6,
          message: "Min 6 characters",
        },
        maxLength: {
          value: 180,
          message: "Max 180 characters",
        },
      };
    case "details":
      return {
        required: {
          value: true,
          message: "This field is required",
        },
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
        required: {
          value: true,
          message: "This field is required",
        },
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
        required: {
          value: true,
          message: "This field is required",
        },
        pattern: {
          value: /^[1-9]{1}[0-9]{0,}/,
          message: "Must be a integer number up to 0",
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
      return {
        required: {
          value: true,
          message: "This field is required",
        },
      };
  }
}
