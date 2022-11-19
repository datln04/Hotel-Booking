import { BaseServices } from "./BaseService";

class Service extends BaseServices {
  getAllServiceByCategoryId = (cateId) => {
    return this.get(`v1/service?cate_id=${cateId}`);
  };
}

export default Service = new Service();
