
const Manager = require("../lib/Manager");

test("Can create Manager object", () =>
{
    const manager = new Manager();
    expect(typeof(manager)).toBe('object')
})
//Foo  value that can change
 test ("Can set a office number via constructor arguments", () => {
     const testOfficeNum = 100;
    const manager = new Manager("Foo", 20, "mariya@qu.com", testOfficeNum);
       expect(manager.officeNumber).toBe(testOfficeNum);
  });
  
 test("Can get a roll via constuctor arguments", () => {

const testValue = "Manager";
    const manager = new Manager("Foo", 20, "mariya@qu.com", 100)
expect(manager.getRole()).toBe(testValue);
  });

 test(" Can get office number via constuctor argumnets", () => {
     const testOfficeNum = 100;
    const manager = new Manager("Foo", 1, "mariya@qu.com", testOfficeNum);
    expect(manager.getOfficeNumber()).toBe(testOfficeNum);
  });
 



