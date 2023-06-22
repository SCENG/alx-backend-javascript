interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentA: Student = {
  firstName: "Henry",
  lastName: "Lungu",
  age: 22,
  location: "Seoul, South Korea",
};

const studentB: Student = {
  firstName: "Anjali",
  lastName: "Prajapati",
  age: 22,
  location: "Lodz, Poland",
};

const studentsList: Student[] = [studentA, studentB];

const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  td:hover {
    background: gainsboro;
  }
  td:nth-child(1) {
    text-align: center;
  }
`;

/**
 * Displays information about students in a table.
 * @param students The list of students to display.
 */
function displayStudents(students: Student[]): void {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const headRow = document.createElement('tr');
  const tableBody = document.createElement('tbody');

  headRow.innerHTML = `
    <td>FirstName</td>
    <td>Location</td>
  `;
  tableHead.appendChild(headRow);

  for (const student of students) {
    const bodyRow = document.createElement('tr');
    bodyRow.innerHTML = `
      <td>${student.firstName}</td>
      <td>${student.location}</td>
    `;
    tableBody.appendChild(bodyRow);
  }

  table.appendChild(tableHead);
  table.appendChild(tableBody);
  document.body.appendChild(table);
}

displayStudents(studentsList);

const styleSheetElement = document.createElement('style');
styleSheetElement.textContent = styleSheet;
document.head.appendChild(styleSheetElement);

document.title = 'Task 0';
