export function createEmployeeData(id, firstName, lastName, dateOfBirth, dateStart, street, city, state, zipCode, department) {
    return {
        id,
        firstName: firstName.trim(), 
        lastName: lastName.trim(),
        dateOfBirth: dateOfBirth instanceof Date ? dateOfBirth.toISOString() : '',
        dateStart: dateStart instanceof Date ? dateStart.toISOString() : '',
        address: {
            street: street.trim(),
            city: city.trim(),
            state,
            zipCode
        },
        department
    };
}
