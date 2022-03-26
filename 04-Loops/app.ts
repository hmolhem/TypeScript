{
  let index = 0;
  let names: string[] = new Array<string>();
  names.push("Hossein");
  names.push("Molhem");

  // dowhile loop
  do {
    document.getElementById("do").innerText += " " + names[index];
    index++;
  } while (index == names.length - 1);

  // for loop
  for (let index = 0; index <= names.length - 1; index++) {
    document.getElementById("for").innerText += ' ' + names[index];
  }
  
  names.forEach(name => {
    document.getElementById("forEach").innerText += ' ' + name;
  });

}
