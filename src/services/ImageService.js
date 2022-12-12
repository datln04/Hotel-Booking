import { BaseServices } from "./BaseService";

class ImageService extends BaseServices {
  getImageByTypeContains = (type) => {
    return this.get(`v1/image/getImageByImageTypeContain?type=${type}`);
  };
}

export default ImageService = new ImageService();
