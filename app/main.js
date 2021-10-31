import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { ToDoController } from "./Controllers/ToDoController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  imagesController = new ImagesController()
  quotesController = new QuotesController()

  toDoController = new ToDoController()

}

window["app"] = new App();
