import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { ToDoController } from "./Controllers/ToDoController.js";
import { ClockController } from "./Controllers/ClockController.js"
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {
  // valuesController = new ValuesController();

  imagesController = new ImagesController()
  quotesController = new QuotesController()

  toDoController = new ToDoController()

  clockController = new ClockController()

  weatherController = new WeatherController()

}

window["app"] = new App();
