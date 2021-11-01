const Intern = require("../lib/Intern")

test("Can create Intern object", () => 
{
    const intern = new Intern();
    expect(typeof(intern)).toBe('object')
})
test("Can set school via constructor afguments", () => {
    const testSchool = "StartSmart";
     const intern = new Intern("Mariya", 20, "mariya@qu.com", testSchool);
     expect(intern.school).toBe(testSchool);
  });
  test("Can get a roll via constructor arguments", ()=>{
       const testValue = "Intern";
    const intern = new Intern("Mariya", 20, "mariya@qu.com","StartSmart");
      expect(intern.getRole()).toBe(testValue);
  });
  test("Can get a school via constructor arguments", () =>{
      const testSchool = "StartSmart";
        const intern = new Intern("Mariya", 20, "mariya@qu.com", testSchool);
           expect(intern.getSchool()).toBe(testSchool);
  });
  




  