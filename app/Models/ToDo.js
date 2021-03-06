import { ProxyState } from "../AppState.js";
import { toDoService } from "../Services/ToDoService.js";



export class ToDo {

  constructor(data) {
    this.id = data.id
    this.user = data.user
    this.description = data.description
    this.completed = data.completed || false
  }

  get Template() {
    return `
    <div>
    <input class="form-check-input" type="checkbox" id="checkbox" name="checkbox" ${this.completed
        ? 'checked' : ''} onclick = "app.toDoController.editItem('${this.id}')" >  
    <label class="form-check-label ${this.completed ? "strikeout" : ''}" for="checkbox" id="itemName"> ${this.description}
    </label>
    </input>
  <button class="btn btn-sm gxbtn" id="removeItem" type="submit"
    onclick="app.toDoController.deleteItem('${this.id}')">✖</button>
      </div > `
  }

}


