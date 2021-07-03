// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:

const presetHandler = (requestType, index, newPresetArray) => {

    //My work starts here
    let array = [];
    let yes = 0;
    if(requestType != 'GET' && requestType != 'PUT'){
        array[0] = 400;
        yes = 1;
    }
    if((index < 0 || index > 4) && yes == 0 ){
        array[0] = 404;
        yes = 1;
    }
    if(requestType == 'GET' && yes == 0){
        array[0]=200;
        array.push(presets[index]);
    }
    if(requestType == 'PUT' && yes == 0){
        array[0]=200;
        presets[index] = newPresetArray;
        array.push(presets[index]);
    }
    return array;

    

};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;


