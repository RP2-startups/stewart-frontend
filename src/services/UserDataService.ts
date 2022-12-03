import http from "../http-common";

class UserDataService {
  getAll() {
    return http.get("/user");
  }

  get(id: String) {
    return http.get(`/user/${id}`);
  }

  create(data: {}) {
    return http.post("/user", data);
  }

  
}

export default new UserDataService();