export function totalCandies(n:number):number{
    if (n<=0) return 0;
    return (n*(n+1))/2
}
console.log(totalCandies(10));
