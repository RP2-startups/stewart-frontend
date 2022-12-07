import http from "../http-common";

class UserDataService {
  logout() {
    return http.post("/logout");
  }

  login(login: {}) {
    return http.post("/login", login);
  }

  create(data: FormData) {
    return http.post("/user", data);
  }

  getLogin() {
    return http.get("/user");
  }

  search(input: string) {
    return http.get(`/users?name=${input}`)
  }
}

export default new UserDataService();