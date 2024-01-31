/* Returns an array of students located in a specific city using the filter function */
const getStudentsByLocation = (students, city) =>
	students.filter((student) => student.location === city);

export default getStudentsByLocation;
