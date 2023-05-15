function getStudentIdsSum(student) {
  if (student instanceof Array) {
    return (
      student.reduce((sum, student) => sum + student.id, 0)
    );
  }
  return 0;
}

export default getStudentIdsSum;
