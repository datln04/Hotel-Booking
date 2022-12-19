import { BaseServices } from "./BaseService";

class AbstractionService extends BaseServices {
  getAllAbstraction = () => {
    return this.get(`v1/abstractions`);
  };
}

export default AbstractionService = new AbstractionService();
