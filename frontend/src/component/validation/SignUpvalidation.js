function validateSignUp(values) {
  let error = {};

  // Username validation
  if (!values.username.trim()) {
    error.username = "Username is required";
  } else if (!/^[a-zA-Z0-9_]{3,20}$/.test(values.username)) {
    error.username =
      "Username must be 3 to 20 characters long and can only contain letters, numbers, and underscores";
  }

  // Email validation
  if (!values.email) {
    error.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    error.email = "Email is invalid";
  }

  // Password validation
  if (!values.password) {
    error.password = "Password is required";
  } else if (
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(values.password)
  ) {
    error.password =
      "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit";
  }

  // Confirm Password validation
  if (!values.confirm_password) {
    error.confirm_password = "Confirm Password is required";
  } else if (values.confirm_password !== values.password) {
    error.confirm_password = "Passwords do not match";
  }

  return error;
}

export default validateSignUp;
