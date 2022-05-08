class Devepoler{
  constructor(name, type){
    this.name = name;
    this.type = type;
  }

}

class Tester{
  constructor(name, type){
    this.name = name;
    this.type = type;
  }
}

class EmployeeFactory{
  static create(name, type){
    switch (type) {
      case 'developer':
        return new Devepoler(name, type)
      case 'tester':
        return new Devepoler(name, type)
    }
  }
}

const employees = [];

employees.push(EmployeeFactory.create('john', 'developer'));
employees.push(EmployeeFactory.create('sara', 'developer'));
employees.push(EmployeeFactory.create('jane', 'tester'));

for (const employee of employees){
  console.log(employee)
}