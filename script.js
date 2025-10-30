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

