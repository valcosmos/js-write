function Person(name) {
  this.name = name
}

Person.prototype.drink = function () {
  console.log('===>drink')
}

function Student(name, score) {
  Person.call(this, name)
  this.score = score
}

Student.prototype = new Person()
Student.prototype.constructor = Student
const stu = new Student('Cupid', 200)
console.log(stu)
stu.drink()
