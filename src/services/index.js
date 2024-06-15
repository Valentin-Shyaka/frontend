import axios from "axios";

export const API_URL = "http://localhost:8001/api";


class AppServices {
  adminLogin(body) {
    return axios.post(`${API_URL}/admin/login`, body);
  }


  updateAdmin(body, id) {
    return axios.put(`${API_URL}/admin`, body);
  }

  getCurrentAdmin() {
    return axios.get(`${API_URL}/admin/current`,{
      headers:{
        "Authorization":`Bearer ${localStorage.getItem('token')}` 
      }
    });
  }

  AdminRegister(body) {
    return axios.post(`${API_URL}/admin`, body);
  }

  deleteAdmin(id) {
    return axios.delete(`${API_URL}/admin/[id]`,id);
  }

  employeeLogin(body) {
    return axios.post(`${API_URL}/employees/login`, body);
  }

  updateEmployee(body, id) {
    return axios.put(`${API_URL}/employees`, body);
  }

  getAllEmployee() {
    return axios.get(`${API_URL}/employees/`,{
      headers:{
        "Authorization":`Bearer ${localStorage.getItem('token')}` 
      }
    });
  }


  deleteEmployee(id) {
    return axios.delete(`${API_URL}/employees/[id]`,id);
  }

  employeeRegister(body) {
    return axios.post(`${API_URL}/employees`, body,{
      headers:{
        "Authorization":`Bearer ${localStorage.getItem('token')}` 
      }
    });
  }

   getAllLaptops = (page = 2, limit = 5) => {
    return axios.get(`${API_URL}/laptops/`, {
      params: { page, limit },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  };

  registerLaptop(body) {
    return axios.post(`${API_URL}/laptops/`,body,{
      headers:{
        "Authorization":`Bearer ${localStorage.getItem('token')}` 
      }
    });
  }
}

export default new AppServices()