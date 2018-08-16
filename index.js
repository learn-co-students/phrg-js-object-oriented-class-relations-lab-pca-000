let store = {drivers: [], passengers: [], trips: []}
let driverId = 0

class Driver {

  constructor(name) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }
  trips() {
    const trips1 = store.trips.filter(trip => {
      return trip.driverId === this.id
    })
    return trips1
  }
  passengers() {
    const trips2 = this.trips()
    let empty_array = []
    for(const trip of trips2) {
      empty_array.push(trip.passenger())
    }
    return empty_array
  }
}
let passengerId = 0

class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }
  trips() {
    const trips3 = store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
    return trips3
  }
  drivers() {
    const trips4 = this.trips()
    let empty_array = []
    for(const trip of trips4) {
      empty_array.push(trip.driver())
    }
    return empty_array
  }
}
let tripId = 0

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)

  }
  setPassenger(passenger) {
    this.passengerId = passenger.id
  }

  passenger() {
    const test = store.passengers.filter(passenger => {
      return passenger.id === this.passengerId
    })
    return test[0]
  }
  driver() {
    const driver1 = store.drivers.filter(driver => {
      return driver.id === this.driverId
    })
    return driver1[0]
  }
}
