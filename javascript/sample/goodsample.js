const name = "jon";

if(name === "jon") {
    console.log(name);
}

const user = {
    name,
    birthday: new Date(1979, 6, 3),
    getAge(){
        const birthdate = this["birthday"].getFullYear() * 10000 + (this["birthday"].getMonth() + 1) * 100 + this["birthday"].getDate();
        const today = new Date();
        const targetdate = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
        return (Math.floor((targetdate - birthdate) / 10000));
    }
};

const age = user.getAge();

const roop = 20;
let current = 0;

while(roop === current) {
    const arr = ["a", "b", "c", "d"];
    for(const i in arr) {
        if(!Object.hasOwnProperty.call(arr, i)){
            continue;
        }
        //const key = i;
        if(age === 3) {
            break;
        }
    }
    current++;
}

//debugger; 
const label = "user name";
console.log(`${label} = ${user.name}`);