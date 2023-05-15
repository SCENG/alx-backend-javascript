export default function getListStudentIds(student) {
  if (student instanceof Array) {
    return student.map((student) => student.id);
  }
  return [];
}
