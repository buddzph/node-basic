/**
 * By Default, a function has a property called prototype and this prototype
 * Could have methods and properties
 * 
 * In Javascript it's prototype inheritance
 * In Javascript you create constructor instead of class
 * 
 * Using prototype makes the object smaller, you won't 
 * inherit all the properties once you create a new object
 * from a master object
 * 
 */

 // Simple form
 let Person = function(name, gender){
    this.name = name;
    this.gender = gender;
 };

 Person.prototype.printPerson = function(){
    return this.name;
 };

 Person.prototype.printGender = function(){
    return this.gender;
 };

 let student1 = new Person("Sandra", "F");
 let student2 = new Person("Xander", "M");

 console.log(student1.printPerson());
 console.log(student2.printGender());

console.log("Student 1 Instance: ", student1);
console.log("Student 2 Instance: ", student2);
