class Creation {
  constructor(){
    this.isHuman = true;
  }
}
class Person extends Creation {
  constructor(name, gender){
    super();
    this.gender = gender;
    this.name = name; 
  }

  printPerson(){
    return this.name;
  }

  printGender(){
    return this.gender;
  }

  // Utility method
  static countNameLetters(name){
    return name.length;
  }
}

 let student1 = new Person("Sandra", "F");
 let student2 = new Person("Xander", "M");

 console.log(student1.printPerson());
 console.log(student2.printGender());

 console.log("Student 1 Instance: ", student1);
 console.log("Student 2 Instance: ", student2);

 console.log("Answer", Person.countNameLetters("Yuna"));