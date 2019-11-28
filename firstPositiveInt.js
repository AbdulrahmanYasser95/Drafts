const unique = (value, index, self) => {
    return self.indexOf(value) === index
}

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var sorted = A.sort();
    sorted = sorted.filter(unique);
    // console.log(sorted);
    var result = 0;
    var l = sorted.length;
    if (sorted.indexOf(1) == -1) {
        result = 1;
    } else {
        for (var i = 0; i < l; i++) {
            if ((sorted[i + 1] != (sorted[i] + 1)) && (sorted[i] > 0)) {
                console.log('default path');
                result = sorted[i] + 1;
                break;
            }
        }
        if (result <= 0) {
            if (sorted[l - 1] > 0) {
                result = (sorted[l - 1] + 1);
            } else {
                result = 1;
            }
        } else if (result < 0) {
            result = 1;
        }
    }
    return result;
}

var A = [-1e5, 1e5];
console.log(solution(A));