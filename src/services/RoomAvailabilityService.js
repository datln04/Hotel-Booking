import { BaseServices } from "./BaseService";

class RoomAvailabilityService extends BaseServices {
    getAllRoomAvailabilityService = (url) => {
        return this.get(`v1/roomType/checkAvailability?${url}`)
    };
}

export default RoomAvailabilityService = new RoomAvailabilityService();