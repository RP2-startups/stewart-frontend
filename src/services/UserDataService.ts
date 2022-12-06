import http from "../http-common";

class UserDataService {
  logout() {
    return http.post("/logout");
  }

  login(login: {}) {
    return http.post("/login", login)
    .then(response => {
      http.get("/user");
    });
  }

  create(data: FormData) {
    return http.post("/user", data);
  }

  getLogin() {
    return http.get("/user");
  }
}

export default new UserDataService();