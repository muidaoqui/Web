

const tongStartEnd = (start, end) => {
    let startEnd = 0;
    for (let i = start; i <= end; i++) {
        startEnd += i;
    }
    return startEnd;
};

const tachTu = (str) => {
    let words = [];
    let word = '';
    for(let char of str){
        if (char === ' '){
            if (word) {
                words.push(word);
                word = '';
            }
        } else {
            word += char;
        }
    }
    if (word) {
        words.push(word);
    }
    return words;
}

const swap = (arr) => {
    for(let i=0; i < arr.length; i++){
        for(let j=i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

const checkDoiXung = (num) => {
    const str = num.toString();
    if (str.length % 2 === 0) {
        for(let i = 0; i < str.length; i++) {
            if (str[i] === str[str.length - 1 - i]) {
                return true;
            } return false;
        }
    } else return false;
}