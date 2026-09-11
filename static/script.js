function validateForm() {
    const selects = document.querySelectorAll("select");
    for (let select of selects) {
        if (select.value === "") {
            alert("Please select a rating for every skill.");
            select.focus();
            return false;
        }
    }
    return true;
}
