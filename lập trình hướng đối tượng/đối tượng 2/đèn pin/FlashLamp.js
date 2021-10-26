class FlashLamp {
    status;
    battery;


    constructor(status) {
        this.status = status;
    }

    setBattery(battery) {
        this.battery = battery;
    }

    getBatteryInfor() {
        return this.battery.getEnergy();
    }

    light() {
        if (this.status) {
            alert("Lighting");
        } else {
            alert("Not lighting");
        }
    }

    turnOn() {
        this.status = true;
        this.battery.decreaseEnergy()
    }

    turnOff() {
        this.status = false;
    }
}