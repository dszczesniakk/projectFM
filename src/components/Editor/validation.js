export const validate = data => {
    const errors = [];
    Object.entries(data).forEach(([key, value]) => {
        if (!value) {
            errors.push([key, 'Pole nie moze być puste']);
        } else {
            if (key === 'name' && value.length < 3) {
                errors.push([key, 'Zbyt mała ilość znaków']);
            }
            if (key === 'body' && value.length < 2) {
                errors.push([key, 'Zbyt mała ilość znaków']);
            }
            if (key === 'email') {
                const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$');
                if (!regex.test(value)) errors.push([key, 'Niepoprawny format e-mail']);
            }
        }
    });

    if (errors.length > 0) return errors;
    return false;
};
