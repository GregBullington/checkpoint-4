import { ProxyState } from "../AppState.js"
import { ToDo } from "../Models/ToDo.js";
import { sandBox } from "../Services/AxiosService.js";
import { toDoService } from "../Services/ToDoService.js"


function _drawItems() {
  const items = ProxyState.toDoItems
  let template = ``
  items.forEach(item => template += item.Template)
  document.getElementById('listItems').innerHTML = template
}


export class ToDoController {
  constructor() {
    ProxyState.on('toDoItems', _drawItems)

    this.getItems()
    console.log("ToDo working");
  }

  async addItem(id) {
    try {
      window.event.preventDefault()
      const form = window.event.target

      let itemData = {
        //@ts-ignore
        description: form.description.value,
        id: id
      }
      toDoService.addItem(itemData)

    } catch (error) {
      console.log(error);
    }
  }

  async editItem(id) {
    try {
      toDoService.editItem(id)
    } catch (error) {
      console.log(error);

    }
  }

  async getItems() {
    try {
      await toDoService.getItems()

    } catch (error) {
      console.log(error);

    }
  }

  async deleteItem(id) {
    try {
      toDoService.deleteItem(id)

    } catch (error) {
      console.log(error);
    }

  }

}
