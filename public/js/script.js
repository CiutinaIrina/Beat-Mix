//Task 0 - helpful functions

const ok = (text = 'Ok!') => {
    console.log(text);
}

const checkU = (numValues = 1, val1, val2, val3, val4, val5, val6) => {
    const myValues = [val1,val2,val3,val4,val5,val6];
    var goodValues = 0;
    for(i=0;i<6;i++){
        if (myValues[i] === undefined){
            break;
        }
        else{
            goodValues++;
        }
    }
    if(numValues == goodValues){
        return true;
    }
    return false;
}

const getDrums = drums => {
    switch(drums){
        case 'kicks':
            return kicks;
        case 'snares':
            return snares;
        case 'hiHats':
            return hiHats;
        case 'rideCymbals':
            return rideCymbals;
        default:
            return undefined;
    }
}
//Task 1 - the arrays

var kicks = [];
var snares = [];
var hiHats = [];
var rideCymbals = [];

var arrayList = [kicks, snares, hiHats, rideCymbals];

for(i=0;i<4;i++){
    for(j=0;j<16;j++){
        arrayList[i].push(false);
    }
}

//Task 2 - the toggleDrum array

const toggleDrum = (drumName, index) => {

    if(index > 16 || index < 0){
        return "Invalid Index"
    }

    var drum = getDrums(drumName);

    if(checkU(2, drum, index) == false){
        return "Missing Arguments";
    }

    if(drum[index]){
        drum[index] = false;
    }
    else{
        drum[index] = true;
    }
}

//Task 3 - the clear function

const clear = (drumName) => {

    var drums = getDrums(drumName);

    if(checkU(1, drums) === false){
        return "Invalid Array";
    }

    for(i=0;i<16;i++){
        drums[i] = false;
    }

    return drums;
}

//Task 4 - the invert function

const invert = (drumName) => {
    var drums = getDrums(drumName);

    if(checkU(1, drums) === false){
        return "Invalid Array";
    }

    for(i=0;i<16;i++){
        if(drums[i] == true){
            drums[i] = false;
        }
        else{
            drums[i] = true;
        }
    }

    return drums;
}
/*Debugging



*/