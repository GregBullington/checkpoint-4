import { ProxyState } from "../AppState.js"
import { sandBox } from "./AxiosService.js"


class ImagesService {
  async getImages() {
    const res = await sandBox.get('images')
    ProxyState.images = res.data
  }


}



export const imagesService = new ImagesService()