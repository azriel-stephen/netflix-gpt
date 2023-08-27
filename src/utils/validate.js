export const checkValid = (email, password, name = null) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (name !== null && name.trim() === "") return "Name cannot be empty";
  if (!isEmailValid && !isPasswordValid)
    return "Email and Password is not valid";
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";
};
