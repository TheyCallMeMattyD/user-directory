import axios from "axios";
var employeeCount = 1000;

export default {
  // Populates Employees for the Directory
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=" + employeeCount + "&nat=us");
  }
};
