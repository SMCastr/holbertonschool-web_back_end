// 1-get_list_student_ids.js

/**
 * Function to get an array of student ids from a list of student objects.
 * @param {Array} studentsList - Array of student objects with id, firstName, and location attributes.
 * @returns {Array} - Array of student ids.
 */
function getListStudentIds(studentsList) {
	// Check if the input is an array
	if (!Array.isArray(studentsList)) {
	  // If not an array, return an empty array
	  return [];
	}
  
	// Use map to extract ids from the array of student objects
	const studentIds = studentsList.map((student) => student.id);
  
	return studentIds;
  }
  
  // Export the function to make it accessible from other files
  export default getListStudentIds;
  