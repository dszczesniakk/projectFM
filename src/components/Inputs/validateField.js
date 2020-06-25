export const validateField = (name, validation) => {
    return (
        validation.length > 0
            ? (validation.find(element => element[0] === name)
                ? validation.find(element => element[0] === name)[1]
                : null)
            : null
    );
};
