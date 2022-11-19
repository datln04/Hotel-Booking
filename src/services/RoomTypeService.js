import { BaseServices } from "./BaseService";

class RoomTypeService extends BaseServices {
  getAllRoomType = () => {
    return this.get(`v1/RoomType/getRoomTypes`);
  };
}

export const roomTypeService = new RoomTypeService();
