/*Returns an array of students located*/
const getStudentsByLocation = (students, city) =>
	students.filter((student) => student.location === city);


export default getStudentsByLocation;
