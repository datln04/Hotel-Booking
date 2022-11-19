import { BaseServices } from "./BaseService";

class ServiceCategory extends BaseServices {
  getAllServiceCategory = (payload) => {
    return this.get(`v1/image?type=${payload}`)
  };
  getServiceCategoryById = (payload) =>{
    return this.get(`v1/serviceCategory/${payload}`)
  }
}

export const serviceCategory = new ServiceCategory();