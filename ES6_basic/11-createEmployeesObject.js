// Function to create an object with departmentName and employees
export default function createEmployeesObject(departmentName, employees) {

    return {
      [departmentName]: employees,
    };
  }