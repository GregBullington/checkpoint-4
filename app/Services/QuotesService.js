import { ProxyState } from "../AppState.js"
import { sandBox } from "./AxiosService.js"


class QuotesService {

  async getQuotes() {
    const res = await sandBox.get('quotes')
    ProxyState.quotes = res.data
  }

}

export const quotesService = new QuotesService()