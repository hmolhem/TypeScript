{
    var test = void 0;
    var name_1 = 'Shahriar';
    var sureName = 'Molhem';
    document.getElementById('name').innerText = name_1;
    document.getElementById('sureName').innerText = sureName;
    var fullName = "Your name is ".concat(name_1, " and your last name is ").concat(sureName);
    document.getElementById('fullName').innerText = fullName;
    var age = 30;
    var area = 24.3;
    var flag = true;
    var x = 'Hossein';
    x = 123;
    x = true;
    var names = ['Hossein', 'Shahriar', 'Maryam'];
    var numbers = [1, 2, 3, 4, 5];
    var anotherNames = new Array();
    anotherNames.push('Hossein');
    anotherNames.push('Shahriar');
    anotherNames.push('Maryam');
    var id = 123456789;
    var t = void 0; //tuple
    t.push('Hossein', 3, true);
    var season = void 0;
    (function (season) {
        season[season["spring"] = 1] = "spring";
        season[season["summer"] = 2] = "summer";
        season[season["fall"] = 3] = "fall";
        season[season["winter"] = 4] = "winter";
    })(season || (season = {}));
    ;
    var state = void 0;
    (function (state) {
        state[state["red"] = 1] = "red";
        state[state["green"] = 2] = "green";
        state[state["blue"] = 3] = "blue";
    })(state || (state = {}));
    ;
}
