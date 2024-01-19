// Function to create a report object
export default function createReportObject(employeesList) {
	// Create and return the report object with allEmployees and getNumberOfDepartments
	return {
		// Use spread syntax to create a shallow copy of employeesList
		allEmployees: { ...employeesList },

		// Use ES6 method property syntax for getNumberOfDepartments
		getNumberOfDepartments(employeesList) {
			// Return the number of departments
			return Object.keys(employeesList).length;
		},
	};
}
