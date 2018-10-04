module.exports = function getZerosCount(number, base) {
    
    let power, result, coun = [], array = [], results = [];
    
    for (let i = 2; i < base; i++) {
        while(base % i === 0) {
            base /= i;
            coun.push(i);
        }
    }

    if(base != 1) coun.push(base);
    
    for (let i = 0, len = coun.length; i < len; i++) {
        let pow = 0;
        for (let j = 0, len = coun.length; j < len; j++) {
            if(coun[j] === coun[i]) pow++;
        }
        array.push(pow);
    }

    for (let i = 0, len = coun.length; i < len; i++) {
        result = 0;
        power = 1;
        while (Math.pow(coun[i], power) < number) {
            result += Math.floor(number / Math.pow(coun[i], power++));  
        }
        result = Math.floor(result / array[i]);
        results.push(result);
    }

    result = results[0];
    for (let i = 1, len = results.length; i < len; i++) {
        results[i] < result ? result = results[i] : result
    }
    return result; 
}