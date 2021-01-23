export default {
  signUp: {
    text: "Sign up",
    signList: [
      {
        id: "fullName",
        itemName: "Full Name",
        inputType: "text",
      },
      {
        id: "userName",
        itemName: "Username",
        inputType: "text",
      },
      {
        id: "email",
        itemName: "Email",
        inputType: "email",
      },
      {
        id: "password",
        itemName: "password",
        inputType: "password",
      },
    ],
    linkTexts: ["Already registered ? Sign in"],
  },

  signIn: {
    text: "Sign in",
    signList: [
      {
        id: "login",
        itemName: "login",
        inputType: "text",
      },
      {
        id: "signInPassword",
        itemName: "password",
        inputType: "password",
      },
    ],
    linkTexts: [
      "Didn't receive confirmation message?",
      "Dont have an account ? Sign up",
    ],
  },
};
