/* Returns the sum of all student ids using the reduce function */
const getStudentIdsSum = (students) =>
  students.reduce((sum, student) => sum + student.id, 0);

export default getStudentIdsSum;
