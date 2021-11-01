const Engineer = require("../lib/Engineer");

test("Can create engineer object", () => 
{
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe('object')
})


test  ("can set gitHub account Through  constructor", () =>{
      const testValue  = "githubUser";
      const e = new Engineer("Mariya", 1, "mariya@qu.com", testValue)
      expect(e.github).toBe(testValue);
});
test ("Can set a role via costructor arguments", () =>{
    const testValue ="Engineer";
     const engineer = new Engineer("Mariya",20,"mariya@qu.com","githubUser");
      expect(engineer.getRole()).toBe(testValue);
});
