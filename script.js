
function addnum(num){
    if(num/2!=0){
        return num;
    }
}
console.log(addnum(1,2,4,5,7));
let str = "I' am a alagupandi".toLowerCase().split(" ");
function tittlecap(str){
    for(let i=0; i<=str.length; i++){
        str[i]=str[i].touppercase()+str[i].slice(1)
    }
    return str.join()
}
console.log(tittlecap("I' am a alagupandi"));
function sumofarr(num1,num2,num3){
    return num1+num2+num3;
}
console.log(sumofarr(5+10+5));
function printpnnum(numbers){
    return numbers;
}
printpnnum(2,3,5,7,9);

function palindrome(arr){
    return arr;
}
palindrome(madam,appa);
var arr1=[1,12,15,26,38];
var arr2=[2,13,17,30,45]
function findmedian(arr1,arr2,n){
    var i=0;
    var j=0;
    var count;
    var m1=-1, m2=-1;
    for(count=0; count<=n; count++){

        if(i==n){
            m1=m2;
            m2=arr2[0];
            break;
        }else if(j==n){
            m1=m2;
            m2=arr1[0];
            break;
        }if (arr1[i]<=arr2[j]){
            m1=m2;
            m2=arr2[j];
            j++
        }
        return(m1+m2)/2;
    }if (n1==n2){
        console.log(findmedian(arr1,arr2,n1));
        
    }else{
        console.log("its on unerual size array");
    }

}

const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

const set = new Set(numbers);

const duplicates = numbers.filter(item => {
    if (set.has(item)) {
        set.delete(item);
    } else {
        return item;
    }
});

console.log(duplicates);
function rotate(a,n,k){
    k=k%n;
    for(let i=0;i<n;i++){
        if(i<k){
            console.log(a[n+i-k]+" ");
        }else{
            console.log((a[i-k])+" ");
        }
    }
    console.log("<br>");
    
}
//Arrow function//

let printoddnum = (num) =>{
    if (num/2!=0){
        return num;
    }
}
printoddnum(2,3,4,5,7);
let palindrome = (arr) =>{
    if(arr.reverse()===arr){
        return arr;
    }
}
palindrome(madam,appa)
