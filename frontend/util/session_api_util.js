
export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    data: user
  });
};

export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    data: user
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/session'
  });
};

export const demoUserLogin = () => {
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    data: {
      user: { 
        email: "demouser@email.com",
        password: "hunter1234"
      }
    }
  });
};