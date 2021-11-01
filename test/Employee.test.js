
const Employee = require("../lib/Employee");

test("can instantiate Employee instance", ()=>{
    const e = new Employee();
    expect(typeof(e)).toBe("object")
})

test("Can set name via constructor agruments", ()=>{
    const name = "Mariya";
    const e = new Employee(name);
    expect(e.name).toBe(name);
})

test("Can set id via constructor agruments", ()=>{
    const testValue = 100;
    const e = new Employee("EmployeeName", 100);
    expect(e.id).toBe(testValue);
})

test("Can set email via constructor agruments", ()=>{
    const testEmail = "test@test.com"
    const e = new Employee("EmployeeName", 1, testEmail);
    expect(e.email).toBe(testEmail);
})