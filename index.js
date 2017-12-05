const Service, Characteristic;

var state = 0;

function debug() {
    console.log.apply(this, arguments);
}

function mySwitch(log, config) {
    this.log = log;
}

mySwitch.prototype = {

    getSwitchOnCharacteristic: function(next) {
        const me = this;
        debug('Returning state', state)
        return next(null, state);
    },

    setSwitchOnCharacteristic: function(on, next) {
        const me = this;
        state = on;
        debug('State is now', state);
        return next();
    }
};

module.exports = function(homebridge) {
    Service = homebridge.hap.Service;
    Characteristic = homebridge.hap.Characteristic;
    homebridge.registerAccessory("switch-plugin", "MyAwesomeSwitch", mySwitch);
};
