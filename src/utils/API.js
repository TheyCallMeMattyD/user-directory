import axios from "axios";

export default {
  // Populates Employees for the Directory
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=5&nat=us");
  }
};
