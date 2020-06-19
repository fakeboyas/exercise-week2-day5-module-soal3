function changeCase() {
    let testUpper = /[A-Z]/;
    let input = document.getElementById("inputText").value;
    if (testUpper.test(input)) {
        document.getElementById("display").innerHTML = input.toLowerCase();
    } else if (testUpper.test(input)) {
        document.getElementById("display").innerHTML = input.toLowerCase();
    } else {
        document.getElementById("display").innerHTML = input.toUpperCase();
    }
}

export { changeCase };
