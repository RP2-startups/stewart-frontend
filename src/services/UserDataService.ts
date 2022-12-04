import http from "../http-common";

class UserDataService {
  getAll() {
    return http.get("/user");
  }

  login(login: {}) {
    return http.post("/login", login);
  }

  create(data: FormData) {
    return http.post("/user", data);
  }

  
}

export default new UserDataService();