import { BaseServices } from "./BaseService";

class SpecialUtilityService extends BaseServices {
  getAllSpecialUtilityService = () => {
    return this.get(`v1/specialUtilitys`);
  };
}

export default SpecialUtilityService = new SpecialUtilityService();
