function intersection(arr1,arr2)
{
let arr3=arr1
for(i=0;i<arr2.length;i++)
{
    if(arr3.includes(arr2[i])===false)
        arr3.push(arr2[i])
}
console.log(arr3);
}
 let array1=[1,2,3,4,5];
let array2=[2,3,4,5,6,7,8];
intersection(array1,array2)
