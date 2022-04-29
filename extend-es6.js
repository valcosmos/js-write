class Person {
  constructor(name) {
    this.name = name
  }

  drink() {
    console.log('====> drink')
  }
}

class Student extends Person {
  constructor(name, score) {
    super(name)
    this.score = score
  }

  introduce() {
    console.log(`I am ${this.name}, my score is ${this.score}`)
  }
}

const student = new Student('张三', 99)

student.introduce()
student.drink()

class Teacher extends Person {
  constructor(name, subject) {
    // this.name = name
    super(name)
    this.subject = subject
  }

  teach() {
    console.log(`I am ${this.name}, I teach ${this.subject}`)
  }
}
const teacher = new Teacher('teacher', 'web')

// console.log(teacher)
teacher.teach()
teacher.drink()
