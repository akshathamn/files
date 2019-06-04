var obj={num:2}
var addElement=function(a,b,c)
{
return this.num+a+b+c;
}
console.log(addElement.call(obj,5));

var arr=[1,2,3]

console.log(addElement.apply(obj,arr));

var bound=addElement.bind(obj);
var a=bound(1,2,3);
console.log(a);


