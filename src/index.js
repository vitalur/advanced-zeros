module.exports = function getZerosCount(number, base) {
	
	let num, count, n;
    let array =[], counter = [], count_array = [], results = [];

    for (let i = 2; i < base; i++) {
        while(base % i === 0) {
            base /= i;
            counter.push(i);
            array.push(i);
        }
    }

    if(base > 1 && base != counter[counter.length - 1]) {
        counter.push(base);
        array.push(base);
    }

    for (let i = 0; i < counter.length - 1; i++) {
        if (counter[i] == counter[i + 1]) {
            counter.splice(i, 1);
            i-=1;
        }
    }

    for (let i = 0, len = counter.length; i < len; i++) {
        let p = pow(array, counter[i]);
        count_array.push(p);
    }

	for (let i = 0, len = counter.length; i < len; i++) {
        n = counter[i];
        count = 0;
        num = 1;
        let qwerty = count_array[i];
        while (Math.pow(n, num) < number) {
            count += Math.floor(number / Math.pow(n, num));
            num++;
        }
        count = Math.floor(count / qwerty);
        results.push(count);
    }

    let result = results[0];
    for (let i = 0, len = results.length; i < len; i++) {
        if(results[i] < result) result = results[i];
    }
    
    return result; 

	function pow(arr=[], counter)
    {
       let pow = 0;
        for (let i = 0, len = arr.length; i < len; i++) {
            if(arr[i] === counter) pow++;
        }
        return pow;
    }
}