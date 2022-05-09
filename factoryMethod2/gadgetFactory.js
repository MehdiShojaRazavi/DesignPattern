const Laptop = require('./Laptop');
const Tablet = require('./tablet');
const gadget = {Laptop, Tablet};

console.log(gadget)
module.exports = {
  createGadget (type, attributes) {
    const GadgetType = gadget[type];
    console.log(gadget[type])
    console.log(attributes)
    return new GadgetType(attributes);
  }
}
