const Park = function (name, price, dinos = []) {
  this.name = name;
  this.price = price;
  this.dinos = dinos;
};

Park.prototype.addDino = function(species, diet, visitors) {
  dino = [species, diet, visitors];
  this.dinos.push(dino);
};

module.exports = Park;
