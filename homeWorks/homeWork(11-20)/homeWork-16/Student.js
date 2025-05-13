const persons = {
  excellentStudent: {
    firstName: 'Aleks',
    lastName: 'Moskalenko',
    yearOfBirthday: 35,
    marks: [100, 100, 100, 80, 100],
  },

  goodStudent: {
    firstName: 'Aleks',
    lastName: 'Moskalenko',
    yearOfBirthday: 35,
    marks: [100, 100, 100, 80, 100],
  },

  satisfyStudent: {
    firstName: 'Aleks',
    lastName: 'Moskalenko',
    yearOfBirthday: 35,
    marks: [100, 10, 10, 80, 10],
  },
};

function Student(student) {
  this.firstName = student.firstName;
  this.lastName = student.lastName;
  this.yearOfBirthday = student.yearOfBirthday;
  this.marks = student.marks;
  this.attendance = new Array(25);
}

Student.prototype.getStudentAge = function () {
  return this.yearOfBirthday;
};

Student.prototype.getStudentAverageMark = function () {
  const total = this.marks.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  const averageMark = total / this.marks.length;

  return averageMark;
};

Student.prototype.getStudentAverageAttendance = function () {
  const totalAttendance = this.attendance.length;
  const totalPresentAttendance = this.attendance.filter(
    (x) => x === true
  ).length;
  const averageAttendance = totalPresentAttendance / totalAttendance;
  const roundedValue = Math.round(averageAttendance * 10) / 10;

  return roundedValue;
};

Student.prototype.present = function () {
  const emptySlotIndex = this.attendance.findIndex((x) => x === undefined);
  if (emptySlotIndex !== -1) {
    this.attendance[emptySlotIndex] = true;
  } else {
    alert('Empty slots end');
  }
};

Student.prototype.absent = function () {
  const emptySlotIndex = this.attendance.findIndex((x) => x === undefined);
  if (emptySlotIndex !== -1) {
    this.attendance[emptySlotIndex] = false;
  } else {
    alert('Empty slots end');
  }
};

Student.prototype.summary = function () {
  const averageMark = this.getStudentAverageMark();
  const averageAttendance = this.getStudentAverageAttendance();

  if (averageMark >= 90 && averageAttendance >= 0.9) {
    alert('Молодець!');
  } else if (averageMark < 90 && averageAttendance < 0.9) {
    alert('Редиска!');
  } else {
    alert('Добре, але можна краще');
  }
};

const excellentStudent = new Student(persons.excellentStudent);
const goodStudent = new Student(persons.goodStudent);
const satisfyStudent = new Student(persons.satisfyStudent);

// excellentStudent.getStudentAge();
// excellentStudent.getStudentAverageMark();
for (let i = 0; i < 23; i++) {
  excellentStudent.present();
}
for (let i = 0; i < 2; i++) {
  excellentStudent.absent();
}
// excellentStudent.getStudentAverageAttendance();
excellentStudent.summary();

// goodStudent.getStudentAge();
// goodStudent.getStudentAverageMark();
for (let i = 0; i < 2; i++) {
  goodStudent.present();
}
for (let i = 0; i < 23; i++) {
  goodStudent.absent();
}
// goodStudent.getStudentAverageAttendance();
goodStudent.summary();

// satisfyStudent.getStudentAge();
// satisfyStudent.getStudentAverageMark();
for (let i = 0; i < 2; i++) {
  satisfyStudent.present();
}
for (let i = 0; i < 23; i++) {
  satisfyStudent.absent();
}
// satisfyStudent.getStudentAverageAttendance();
satisfyStudent.summary();
