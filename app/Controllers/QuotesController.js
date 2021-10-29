import { ProxyState } from "../AppState.js"
import { quotesService } from "../Services/QuotesService.js"



function _drawQuotes() {
  document.getElementById('quotes').innerHTML = `<p><b>${ProxyState.quotes.content}</b></p> <p><b>${ProxyState.quotes.author}</b></p>`
}


export class QuotesController {

  constructor() {
    ProxyState.on('quotes', _drawQuotes)
    this.getQuotes()
  }

  async getQuotes() {
    try {
      await quotesService.getQuotes()
    } catch (error) {
      console.log(error);
    }
  }

}