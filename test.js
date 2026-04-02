function solution(N, A) {
    // Implement your solution here
    let result = new Array (N).fill(0);
    let currentMax = 0;
    for (let i = 0; i< A.length; i++ ){
        if (A[i] <= N && A[i] >= 1) {
            result[A[i]-1]++;
            if (result[A[i]-1] > currentMax) {currentMax = result[A[i]-1];}
        }
       else if (A[i] === N + 1) 
        {
            result.fill(currentMax);}
        }
        return result;
    }
solution(5, [3, 4, 4, 6, 1, 4, 4]);
