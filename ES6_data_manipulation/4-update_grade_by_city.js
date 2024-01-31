/*Returns an array of students for a
new grades using filter and map*/
const updateStudentGradeByCity = (students, city, newGrades) =>
  students
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade:
        newGrades.find((grade) =>
        grade.studentId === student.id)?.grade || 'N/A',
    }));

export default updateStudentGradeByCity;
