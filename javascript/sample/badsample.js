var name = 'jon';

if(name == 'jon') {
      console.log(name)
} else {
}

var user = {
    name: name,
    "birthday": new Date(1979, 6, 3),
    getAge: function(){
        var birthdate = this["birthday"].getFullYear() * 10000 + (this["birthday"].getMonth() + 1) * 100 + this["birthday"].getDate();
        var today = new Date();
        var targetdate = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
        return (Math.floor((targetdate - birthdate) / 10000));
    },
}

let age = eval("user.getAge()");

const roop = 20;
let current = 0;

outerloop:
while(roop = current) {
    for(var i in ['a', 'b', 'c', 'd']) {
        var key = i;
        if(age == 3) {
            continue outerloop;
        }
    }
    current++;
}

debugger; 
var label = "user " + "name";
console.log(label + " = " + user.name);