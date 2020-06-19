function changeCase() {
    let btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", function () {
        let input = document.getElementById("inputText").value;
        let testUpper = /[A-Z]/;
        if (testUpper.test(input)) {
            document.getElementById("display").innerHTML = input.toLowerCase();
        } else {
            document.getElementById("display").innerHTML = input.toUpperCase();
        }
    });
}

export { changeCase };
