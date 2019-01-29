const Park = function (name, price, dinos = []) {
  this.name = name;
  this.price = price;
  this.dinos = dinos;
};

module.exports = Park;
