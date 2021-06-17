//Task 0 - helpful functions

const ok = (text = 'Ok!') => {
    console.log(text);
}

//Task 1 - the arrays

var kicks = [];
var snares = [];
var hiHats = [];
var rideCymbals = [];

var arrayList = [kicks, snares, hiHats, rideCymbals];

ok(arrayList);

for(i=0;i<4;i++){
    for(j=0;j<16;j++){
        arrayList[i].push(false);
    }
}

ok(arrayList);


