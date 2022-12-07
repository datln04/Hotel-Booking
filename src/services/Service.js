import { BaseServices } from "./BaseService";

class Service extends BaseServices {
  getAllServiceByCategoryId = (cateId) => {
    return this.get(`v1/serviceByCateWithImage?cate_id=${cateId}`);
  };
}

export default Service = new Service();
