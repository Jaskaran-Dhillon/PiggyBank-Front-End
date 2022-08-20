export const isBlank = (input) => {
    if (input === "" || input === undefined || input === null) {
        return true;
    } else if (typeof(input) === "string" && input.replace(/ /g, "") === "" ){
        return true;
    } else {
        return false;
    }
};


