function popSum(arr){
    sumarr = []
    sum = 0

        for(i=0; i<=arr.length-1; i++){
            sumarr.pop()
            sum = sum + arr[i]
            sumarr.push(sum)
            console.log(sumarr)
        }
}
popSum([1,2,3,4,5])
console.log('=====')
popSum([8,12,4,15,56,-4,9])
