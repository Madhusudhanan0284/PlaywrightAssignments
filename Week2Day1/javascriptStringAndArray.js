const s = ['Hello', 'World']
console.log(s[1].length)

const ss=['fly', 'me', 'to', 'the', 'moon']
console.log(ss[4].length);

var a = 'listen'
var b = 'silent'
var aSort = a.split('').sort().join('')
console.log(aSort);
var bSort = b.split('').sort().join('')
console.log(bSort);

if(aSort === bSort){
    console.log("The given inputs " + a +' ' + b + " are Anagram");   
}
else{
    console.log("The given inputs " + a +' ' + b + " are not Anagram"); 
}

var c = 'Hello'
var d = 'World'
var cSort = c.split('').sort().join('').toLowerCase()
console.log(cSort);
var dSort = d.split('').sort().join('').toLowerCase()
console.log(dSort);
if(cSort === dSort){
    console.log("The given inputs " + c +' ' + d + " are Anagram");   
}
else{
    console.log("The given inputs " + c +' ' + d + " are not Anagram"); 
}