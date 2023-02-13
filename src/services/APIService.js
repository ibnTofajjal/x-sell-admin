import { authService } from "./authService";

class APIService {
  constructor(baseURL, authService) {
    this.baseURL = baseURL;
    this.authService = authService;
  }

  login = (username, password) => {
    return fetch(`${this.baseURL}/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((response) => response.json());
  };

  createUser = (user) => {
    return fetch(`${this.baseURL}/admin/create-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.authService.getToken()}`,
      },
      body: JSON.stringify(user),
    }).then((response) => response.json());
  };
}

export const apiService = new APIService(
  "http://173.82.175.143:3000",
  authService
);
