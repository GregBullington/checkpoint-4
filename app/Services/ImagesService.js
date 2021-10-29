import { ProxyState } from "../AppState.js"
import { sandBox } from "./AxiosService.js"


class ImagesService {
  async getImages() {
    const res = await sandBox.get('images')
    console.log(res.data.largeImgUrl);
    ProxyState.images = res.data.largeImgUrl
  }


}



export const imagesService = new ImagesService()