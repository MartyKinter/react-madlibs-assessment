function addCommas(num) {
    let strNum = num.toString();

    const isNegative = strNum.startsWith('-');

    //removes '-' so it doesn't throw off the loop count
    strNum = isNegative ? strNum.slice(1) : strNum;
    //adds the '-' to the formattedNumber now since it won't be in loop 
    let formattedNum = isNegative ? '-' : '';

    const [integerPiece, decimalPiece] = strNum.split('.');    

    let commaSeparateInt = '';  
    let count = 0;

    for(let i = integerPiece.length - 1; i >= 0; i--){
        commaSeparateInt = integerPiece[i] + commaSeparateInt;
        count++;

        if(count ==3 && !i==0){
            commaSeparateInt = ',' + commaSeparateInt;
            count = 0;
        }
    }

    formattedNum += commaSeparateInt;
    

    if(decimalPiece){
        formattedNum += '.' + decimalPiece;
    }

    return formattedNum;
}

module.exports = addCommas;