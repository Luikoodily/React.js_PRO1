function validateLogin (values) {
  let error = {};

  // Username validation
  if (!values.username.trim()) {
    error.username = 'Username is required';
  } else if (!/^[a-zA-Z0-9_]{3,20}$/.test(values.username)) {
    error.username = 'Invalid Username';
  }

  // Password validation
  if (!values.password) {
    error.password = 'Password is required';
  } else if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(values.password)) {
    error.password = 'Invalid Username Or Password';
  }

  return error;
};

export default validateLogin;
