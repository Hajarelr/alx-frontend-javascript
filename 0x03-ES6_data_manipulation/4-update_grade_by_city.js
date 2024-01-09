/** Create a function updateStudentGradeByCity
that returns an array of students for a specific city with their new grade **/
export default function updateStudentGradeByCity(students, city, newGrade) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grades = newGrade.find((grade) => grade.studentId === student.id);
      const grade = grades ? grades.grade : 'N/A';
      return { ...student, grade };
    });
}
