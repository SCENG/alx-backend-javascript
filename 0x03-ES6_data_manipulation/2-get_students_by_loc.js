export default function getStudentByLocation(student, city) {
  if (student instanceof Array) {
    return (
      student.filter((student) => student.location === city)
    );
  }
  return [];
}
