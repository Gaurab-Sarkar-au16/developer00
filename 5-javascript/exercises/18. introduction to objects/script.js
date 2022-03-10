const myCountry = {
  country: "India",
  capital: "New Delhi",
  language: "Hindi",
  population: 1380,
  neighbours: ["pakistan", "bangladesh", "nepal"],
  describe: function(){
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`)
  },
  checkIsland:function(){
    this.neighbours.length > 0 ? this.isIsland = false: this.isIsland = true;
    return this.isIsland
  }
};

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`)

myCountry.describe()

console.log(myCountry.checkIsland())