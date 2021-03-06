const Spiderman = require ('./../app/spiderman')

describe("Unit Test for Spiderman class", () => {
  test('1. Create an spiderman object', () => {

    // Aquí escribimos el codigo que queremos usar tal cuál
    // Quiero poder instanciar un objeto Spiderman con esta info
    const andrewGarfield = new Spiderman('Spiderman Sony', 31, "Andrew Garfield", 2, "Sony")

    //Validamos que este código funcine de la forma esperada

    expect(andrewGarfield.name).toBe("Spiderman Sony");
    expect(andrewGarfield.age).toBe(31);
    expect(andrewGarfield.actor).toBe("Andrew Garfield");
    expect(andrewGarfield.movies).toBe(2);
    expect(andrewGarfield.studio).toBe("Sony");
  });

  test('create tomb holland info',()=>{
    const tomHolland = new Spiderman('Spiderman Marvel', 25, "Tom Holland", 5, "Marvel")

    expect(tomHolland.getInfo()).toBe("Spiderman Marvel");
    
  });
})