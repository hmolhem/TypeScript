{
    let test: string;
    let name: string = 'Shahriar';
    let sureName: string = 'Molhem';
    document.getElementById('name').innerText = name;
    document.getElementById('sureName').innerText = sureName;

    let fullName: string = `Your name is ${name} and your last name is ${sureName}`;
    document.getElementById('fullName').innerText = fullName;

    let age:number = 30;
    let area:number = 24.3;

    let flag:boolean = true;

    let x:any = 'Hossein';
    x = 123;
    x = true;

    let names:string[] = ['Hossein', 'Shahriar', 'Maryam'];
    let numbers:number[] = [1,2,3,4,5];

    let anotherNames: string[] = new Array<string>();
    anotherNames.push('Hossein');
    anotherNames.push('Shahriar');
    anotherNames.push('Maryam');

    const id:number = 123456789;

    let t:[string, number, boolean]; //tuple
    t.push('Hossein', 3, true);

    enum season{spring=1, summer=2, fall=3, winter=4};
    enum state{red=1, green=2, blue=3};
}