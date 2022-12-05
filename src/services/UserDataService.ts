import http from "../http-common";

class UserDataService {
  logout(login: {}) {
    return http.post("/logout", login);
  }

  login(login: {}) {
    return http.post("/login", login);
  }

  create(data: FormData) {
    return http.post("/user", data);
  }

  
}

export default new UserDataService();