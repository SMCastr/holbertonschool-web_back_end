// 0-get_list_students.js

/**
 * Function to create a list of students.
 * @returns {Array} - Array of student objects with id, firstName, and location attributes.
 */
function getListStudents() {
	// List of students in the specified order
	const students = [
	  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
	  { id: 2, firstName: 'James', location: 'Columbia' },
	  { id: 5, firstName: 'Serena', location: 'San Francisco' },
	];
  
	return students;
  }
  
  // Exporting the function to make it accessible from other files
  export default getListStudents;
  