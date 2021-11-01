



export class ClockController {
  constructor(element) {
    this.element = element
  }

  start() {
    this.update()
    setInterval(() => { this.update() }, 500)
  }

  update() {
    const parts = this.getTime()
    const minuteFormatted = parts.minute.toString().padStart(2, "0")
    const timeFormatted = `${parts.hour}:${minuteFormatted}`
    const amPm = parts.isAm ? "AM" : "PM"
    const phrase = parts.isAm ? "Good morning, Greg" : "Good evening, Greg"

    this.element.querySelector(".clock-time").textContent = timeFormatted
    this.element.querySelector(".clock-ampm").textContent = amPm
    this.element.querySelector(".clock-phrase").textContent = phrase
  }

  getTime() {
    const now = new Date()

    return {
      hour: now.getHours() % 12 || 12,
      minute: now.getMinutes(),
      isAm: now.getHours() < 12

    }
  }
}

const clockElement = document.querySelector(".clock")
const clockObject = new ClockController(clockElement)

clockObject.start()