class AuthService {
  constructor() {
    this.token = null;
  }

  setToken = (token) => {
    this.token = token;
  };

  getToken = () => {
    return this.token;
  };

  removeToken = () => {
    this.token = null;
  };
}

export const authService = new AuthService();
