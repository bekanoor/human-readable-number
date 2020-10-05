module.exports = function toReadable (number) {
    if(number === 0) return 'zero';

    let NS = [
      {value: 1000, str: "thousand"},
      {value: 100, str: "hundred"},
      {value: 90, str: "ninety"},
      {value: 80, str: "eighty"},
      {value: 70, str: "seventy"},
      {value: 60, str: "sixty"},
      {value: 50, str: "fifty"},
      {value: 40, str: "forty"},
      {value: 30, str: "thirty"},
      {value: 20, str: "twenty"},
      {value: 19, str: "nineteen"},
      {value: 18, str: "eighteen"},
      {value: 17, str: "seventeen"},
      {value: 16, str: "sixteen"},
      {value: 15, str: "fifteen"},
      {value: 14, str: "fourteen"},
      {value: 13, str: "thirteen"},
      {value: 12, str: "twelve"},
      {value: 11, str: "eleven"},
      {value: 10, str: "ten"},
      {value: 9, str: "nine"},
      {value: 8, str: "eight"},
      {value: 7, str: "seven"},
      {value: 6, str: "six"},
      {value: 5, str: "five"},
      {value: 4, str: "four"},
      {value: 3, str: "three"},
      {value: 2, str: "two"},
      {value: 1, str: "one"}
    ];

      let result = '';
      let helpMe = ''; // если возникнет вопрос ЗАЧЕМ СОЗДАВАТЬ ЕЩЕ ОДНУ СТРОКУ. У меня возникла проблема, когда я выводил результата, то значение threeDigit всегда вставало на первое место, затем шло все остальное и это никак не получилось исправить.

      let one = number.toString().slice(0,1);
      let two = number.toString().slice(1,2);
      let three = number.toString().slice(2,3);
      let twoAndThree = number.toString().slice(1,3);

      let twoDigit = parseInt(`${one}${0}`); 
      let threeDigit = parseInt(`${two}${0}`);

      for (let n of NS) { // упокой господь этот код 
      if(number < 10) {
        if(number === n.value) return result += n.str;
      } else if(number > 9 && number < 21) {
        if(number === n.value) return result += n.str;
      } else if(number > 20 && number < 100) {
        if(parseInt(two) === n.value) {
          result += ` ${n.str}`;
        }
        if(twoDigit === n.value) {
          result += n.str;
        }
      } else if (number > 99 && number < 1000) {
        if(parseInt(twoAndThree) < 20){
          if(parseInt(one) === n.value) {
            result += `${n.str} hundred`;
          }
          if(parseInt(twoAndThree) === n.value) {
            helpMe += ` ${n.str}`;
          }
        } else if (number > 20 && number % 10 === 0) {
          if(parseInt(one) === n.value) {
            result += `${n.str} hundred`;
          }
          if(threeDigit === n.value) {
          helpMe += ` ${n.str}`;
          }
        } else {
          if(parseInt(one) === n.value) {
            result += `${n.str} hundred`;
          }
          if(threeDigit === n.value) {
            helpMe += ` ${n.str} `;
          }
          if(parseInt(three) === n.value) {
            helpMe += `${n.str}`;
          }
        }
      } 
    }
    
  return result + helpMe;
}