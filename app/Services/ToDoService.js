import { ProxyState } from "../AppState.js"
import { sandBox } from "./AxiosService.js"
import { ToDo } from "../Models/ToDo.js"

class ToDoService {

  async getItems() {
    const res = await sandBox.get('gregs/todos')
    const items = res.data.map(it => new ToDo(it))
    ProxyState.toDoItems = items

  }

  async addItem(data) {
    const res = await sandBox.post('gregs/todos', data)
    const item = new ToDo(res.data)
    ProxyState.toDoItems = [...ProxyState.toDoItems, item]
  }

  async editItem(id) {
    const item = ProxyState.toDoItems.find(it => it.id == id)
    item.completed = !item.completed
    const res = await sandBox.put('gregs/todos/' + id, item)
    const index = ProxyState.toDoItems.findIndex(it => it.id == id)
    ProxyState.toDoItems.splice(index, 1, new ToDo(res.data))
    ProxyState.toDoItems = ProxyState.toDoItems
  }
  async deleteItem(id) {
    await sandBox.delete('gregs/todos/' + id)
    ProxyState.toDoItems = ProxyState.toDoItems.filter(item => item.id != id)
  }

}










export const toDoService = new ToDoService()