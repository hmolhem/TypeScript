{
    var index = 0;
    var names = new Array();
    names.push("Hossein");
    names.push("Molhem");
    // dowhile loop
    do {
        document.getElementById("do").innerText += " " + names[index];
        index++;
    } while (index == names.length - 1);
    // for loop
    for (var index_1 = 0; index_1 <= names.length - 1; index_1++) {
        document.getElementById("for").innerText += ' ' + names[index_1];
    }
    names.forEach(function (name) {
        document.getElementById("forEach").innerText += ' ' + name;
    });
}
