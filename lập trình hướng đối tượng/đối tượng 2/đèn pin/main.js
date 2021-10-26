let battery = new Battery();
battery.setEnergy(10);

let flashLamp = new FlashLamp(false);
flashLamp.setBattery(battery);

document.write("Battery infor: " + flashLamp.getBatteryInfor() + "<br/>");
flashLamp.light();

document.write("Turn on <br/>")
flashLamp.turnOn();
flashLamp.light();
document.write("Battery infor: " + flashLamp.getBatteryInfor() + "<br/>");

document.write("Turn off <br/>")
flashLamp.turnOff();
flashLamp.light();