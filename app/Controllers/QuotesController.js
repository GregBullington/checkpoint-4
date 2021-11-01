import { ProxyState } from "../AppState.js"
import { quotesService } from "../Services/QuotesService.js"



function _drawQuotes() {
  document.getElementById('quotes').innerHTML = `<div class="reveal"> <p class="m-0"><b>${ProxyState.quotes.content}</b></p> <p class="hide m-0"><b>${ProxyState.quotes.author}</b></p></div>`
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