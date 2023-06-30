
 export function getRandomNumber(min:number ,max:number,isMinInclusive:boolean=true,isMaxInclusive:boolean=false):number{
    if((min === max)&& (!isMinInclusive || !isMaxInclusive)){
        throw new Error('min may not be equaled to max');
    }
    if(max < min){
        [min,max]=[max,min]
    }
    let minInclusive:number = isMinInclusive? 0:1;
    let maxInclusive:number = isMaxInclusive? 1:0;
    max+=maxInclusive;
    min+=minInclusive;
    // let randomN:number = Math.floor(Math.random()*(max - min) + min)
    
    return Math.floor(Math.random()*(max - min) + min);
}
export function getRandomMatrix(rows:number,colums:number,min:number,max:number):number[][]{
    const resMatrix:number[][] = [[]];
    for(let i = 0;i< rows;i++){
      resMatrix[i] = [];
      for(let j = 0;j<colums;j++){
        resMatrix[i][j] = getRandomNumber(min,max,true,true);
      }
    }

    return resMatrix;
}
export function getElement<T>(array:T[]):T{
    return array[getRandomNumber(0,array.length)];
}
export function getRandomDate(minYear:number,maxYear:number):Date{
    const minDate:Date = new Date(minYear,0),maxDate:Date = new Date(maxYear,0);
    const min:number = minDate.getTime(),max:number = maxDate.getTime();
    return new Date(getRandomNumber(min,max));
}
export function getRandomColor(){
    return getRandomNumber(0,16777215).toString(16);
}