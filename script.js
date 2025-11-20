/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 */
//python -m http.server

function sleep_in(weekday, vacation) {
    return !weekday || vacation;
}

function string_times(x, num) {
    let answer = "";
    for (let i = 0; i < num; i++) {
        answer = answer + x;
    }
    return answer;
}

function monkey_trouble(a_smile, b_smile) {
    return a_smile && b_smile || !a_smile && !b_smile;
}

function front_times(x, num) {
    let plus = x.substring(0, 3);
    let answer = "";
    for (let i = 0; i < num; i++) {
        answer = answer + plus;
    }
    return answer;

}

function string_bits(x) {
    let sub = ""
    for (let i = 0; i < x.length; i = i + 2) {
        sub = sub + x.substring(i, i + 1);
    }
    return sub
}

function caughtSpeeding(speed, birthday) {
    let liam = 60
    let arden = 80
    if (birthday) {
        liam = 65
        arden = 85
    }
    if (speed > liam && speed <= arden) {
        return 1
    }
    if (speed > arden) {
        return 2
    }
    if (speed <= liam) {
        return 0
    }
}

function fizz_buzz(num) {
      if (num%3 == 0 && num%5 == 0) {
        return "FizzBuzz"
    }
    if (num%3 == 0) {
        return "Fizz"
    }
     if (num%5 == 0) {
        return "Buzz"
    }
   
    return num + "!"
}

function specialEleven(num) {
    if (num%11 == 0 || num%11 == 1) {
        return true 
    } else {
        return false
    }
        
}

function withoutDoubles(x, y, diego) {
    if (x == 6 && y == 6 && diego == true) {
        return 7
    }
   if (x == y && diego == true ) {
    return x + y + 1
   } else {
    return x + y
   }

}

function left2 (aL) {
    let boy = aL.substring(0,2);
    let silly = aL.substring(2,aL.length);
    return silly + boy
}




function firstLast6(array){

        if (array[0] ==6 || array[array.length-1] == 6 ){
            return true
        }
    return false 
}

function has23(array){
    for(let i = 0; i < array.length; i++){
        if (array[i] == 2 ||array[i] == 3){
            return true

        } 
    }
return false
}

function fix23(array){
    for(let i=0; i < array.length; i++){
        if (array[i] == 2 && array[i+1] == 3) {
            array[i+1] = 0 
        }
    }
    return array 
}

function countYZ(x){
    let ans = 0
    let x2 = x.toUpperCase()
    for(let i = 0; i < x.length; i++){
        if (x2[i] == 'Y' && (x2[i+1] == ' ' || i == x.length - 1 )|| x2[i] == 'Z'  && ( x2[i+1] == ' ' || i == x.length - 1) ) {
            ans++
        }
    }
    return ans
}

function endOther(x, y){
    let x2 = x.toLowerCase()
    let y2 = y.toLowerCase()
    let ycount = 0
    let xcount = 0 
if( x.length > y.length){
    for(let i = 0; i < y.length; i++){
    if (x2 [x.length +i -y.length] == y2[i]) {
       ycount++
    }
    }
} 
if (ycount == y.length) {
    return true 
}
if( y.length > x.length){
    for(let i = 0; i < x.length; i++){
    if (y2 [y.length +i -x.length] == x2[i]) {
       xcount++
    }
    }
} 
if (xcount == x.length) {
    return true 
}
if (x2 == y2){
    return true 
}
return false
}
function starOut(ardenis16yearsoldandplaysrugbyardenis16yearsoldandplaysrugby2){
    let ardenis16yearsoldandplaysrugby2ardenis16yearsoldandplaysrugby2 = ""
    for (let i = 0; i < ardenis16yearsoldandplaysrugbyardenis16yearsoldandplaysrugby2.length; i++){
        if (ardenis16yearsoldandplaysrugbyardenis16yearsoldandplaysrugby2[i] != '*' && ardenis16yearsoldandplaysrugbyardenis16yearsoldandplaysrugby2[i+1] != '*' && ardenis16yearsoldandplaysrugbyardenis16yearsoldandplaysrugby2[i-1] != '*' ) {
            ardenis16yearsoldandplaysrugby2ardenis16yearsoldandplaysrugby2 = ardenis16yearsoldandplaysrugby2ardenis16yearsoldandplaysrugby2 + ardenis16yearsoldandplaysrugbyardenis16yearsoldandplaysrugby2[i]
        }
    }
    return ardenis16yearsoldandplaysrugby2ardenis16yearsoldandplaysrugby2
}

function getSandwich(x) {
    let answer2 = ""
    let answer = ""
    for (let i = 0; i < x.length; i++){
        if (x.slice(i, i+5) == "bread" ) {
            answer = x.slice(i+5)
            i = x.length
        }
    }
    for (let i = 0; i < answer.length; i++){
       if (answer.slice(i, i+5) == "bread" ) {
            answer2 = answer.slice(0,i)
        }
    }
    return answer2
}
function canBalance(array){
  let ans1 = 0
  let ans2 = 0  

    for(let i = 0; i < array.length; i++){
        ans2 = 0
        ans1 = ans1 + array[i] 
        for(let x = i+1; x < array.length; x++){
            ans2 = ans2 + array[x]
        }
         if(ans1 == ans2){
            return true
        }
    }
    return false
}

function countClumps(array){
    let count = 0
    for (let i = 0; i < array.length; i++){
        if(array[i] == array[i+1] && array[i] != array[i-1]){
            count++
        }
    }
    return count 
}


function sameEnds(x){
let ardllsg = ""
let ans = ""
for(let i = 0; i < Math.floor(x.length/2) ; i++){
    ardllsg += x[i] 
    if( ardllsg == x.slice(-ardllsg.length)){
        ans = ardllsg
    }
}
 return ans
}

