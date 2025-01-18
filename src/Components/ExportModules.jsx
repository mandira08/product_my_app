//1)Named
//a)Inline export
export const name="Manasa"

//b)all at once
 const address ="Manglore"
 export{address}

 const add=(a,b)=>a+b
 export {add}
 // 2)Default
 const greet =(name)=>`Hello,${name}`;
 export default greet