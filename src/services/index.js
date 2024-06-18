import axios from "axios";

export const API_URL = "http://localhost:8001/api";


class AppServices {
  studentLogin(body) {
    return axios.post(`${API_URL}/students/login`, body);
  }


  updateStudent(body, id) {
    return axios.put(`${API_URL}/students`, body);
  }

  getCurrentStudent() {
    return axios.get(`${API_URL}/students/current`,{
      headers:{
        "Authorization":`Bearer ${localStorage.getItem('token')}` 
      }
    });
  }

  studentRegister(body) {
    return axios.post(`${API_URL}/students`, body);
  }

  deleteStudent(id) {
    return axios.delete(`${API_URL}/students/[id]`,id);
  }

  // employeeLogin(body) {
  //   return axios.post(`${API_URL}/employees/login`, body);
  // }

  // updateEmployee(body, id) {
  //   return axios.put(`${API_URL}/employees`, body);
  // }

  // getAllEmployee(page = 2, limit = 5) {
  //   return axios.get(`${API_URL}/employees/`,{
  //     params: { page, limit },
  //     headers:{
  //       "Authorization":`Bearer ${localStorage.getItem('token')}` 
  //     }
  //   });
  // }


  // deleteEmployee(id) {
  //   return axios.delete(`${API_URL}/employees/[id]`,id);
  // }

  // employeeRegister(body) {
  //   return axios.post(`${API_URL}/employees`, body,{
  //     headers:{
  //       "Authorization":`Bearer ${localStorage.getItem('token')}` 
  //     }
  //   });
  // }

   getAllBooks = (page = 2, limit = 5) => {
    return axios.get(`${API_URL}/books/`, {
      params: { page, limit },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  };

  registerBook(body) {
    return axios.post(`${API_URL}/books/`,body,{
      headers:{
        "Authorization":`Bearer ${localStorage.getItem('token')}` 
      }
    });
  }
}

export default new AppServices()