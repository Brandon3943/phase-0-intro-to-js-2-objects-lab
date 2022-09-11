// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, 
            "name": "Sam", 
            "streetAddress": "11 Broadway"}
}



//update
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee["streetAddress"] = "12 Broadway";

    return employee;
}

//delete
function deleteFromEmployeeByKey(employee, key) {
    employee = {
        name: "Sam"
    }
    delete employee.name;  

    return employee;
}


//
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}




console.log(employee)