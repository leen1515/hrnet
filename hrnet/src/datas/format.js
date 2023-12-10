export function createEmployeeData(id, firstName, lastName, dateOfBirth, dateStart, street, city, state, zipCode, department) {
    return {
        id,
        firstName: firstName.trim(), 
        lastName: lastName.trim(),
        dateOfBirth: dateOfBirth instanceof Date ? dateOfBirth.toISOString() : '',
        startDate: dateStart instanceof Date ? dateStart.toISOString() : '',
        adress: {
            street: street.trim(),
            city: city.trim(),
            state: state,
            zipCode: zipCode
        },
        department: department
    };
}
