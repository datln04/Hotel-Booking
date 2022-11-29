import { BaseServices } from "./BaseService";

class ServiceCategory extends BaseServices {
  getServiceCategoryById = (payload) => {
    return this.get(`v1/serviceCategory/${payload}`);
  };
  getAllServiceCategory = () => {
    return this.get("v1/serviceCategories");
  };
}

export const serviceCategory = new ServiceCategory();
