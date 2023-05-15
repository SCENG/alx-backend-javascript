function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
      const grade = matchingGrade ? matchingGrade.grade : defaultGrade.grade;

      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade,
      };
    });
}

export default updateStudentGradeByCity;
