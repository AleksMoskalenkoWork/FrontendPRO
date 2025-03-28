let company = {
  sales: [
    { name: 'alex', salary: 1 },
    { name: 'kate', salary: 2 },
  ],
  development: {
    frontend: [
      { name: 'oleg', salary: 3 },
      { name: 'max', salary: 4 },
    ],
    backend: [
      { name: 'igor', salary: 5 },
      { name: 'aleksandr', salary: 6 },
    ],
    qa: [
      { name: 'inna', salary: 7 },
      { name: 'anni', salary: 8 },
    ],
  },
  cto: [
    { name: 'nicolas', salary: 9 },
    { name: 'leo', salary: 10 },
  ],
  pm: [
    { name: 'sasha', salary: 11 },
    { name: 'marry', salary: 12 },
  ],
  seo: { name: 'jade', salary: 13 },
};

function getSalary(currentData, newArray) {
  if (!Array.isArray(currentData)) {
    const getValuesFromCurrentData = Object.values(currentData);
    for (const element of getValuesFromCurrentData) {
      if (Array.isArray(element)) {
        element.map((x) => {
          newArray.push(x.salary);
        });
      } else {
        const objectKeys = Object.keys(element);
        if (objectKeys.length > 2) {
          getSalary(element, newArray);
        } else {
          newArray.push(element.salary);
        }
      }
    }
  }

  return newArray;
}

function accSalaryTotal(data) {
  const arrayOfSalaryValue = [];
  const salaryArray = getSalary(data, arrayOfSalaryValue);
  let total = null;

  for (let i = 0; i < salaryArray.length; i++) {
    total += salaryArray[i];
  }

  return alert(`Total salary of employee is: ${total}`);
}

accSalaryTotal(company);
