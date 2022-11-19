import { BaseServices } from "./BaseService";

class HotelService extends BaseServices {
  getHotelServiceById = (id) => {
    return this.get(`v1/hotel/${id}`);
  };
}

export default HotelService = new HotelService();
