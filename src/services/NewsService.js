import { BaseServices } from "./BaseService";

class NewsService extends BaseServices {
  getAllNews = () => {
    return this.get(`v1/news`);
  };

  updateNewsEvent = (payload) => {
    return this.put(`v1/news`, payload);
  };
}

export default NewsService = new NewsService();
