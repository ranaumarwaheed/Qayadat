const abcde=[1,2,3,4,5].map(abcde=>abcde*2);console.log(abcde);
let fghij="Greetings "+(Math.random()>0.5?"world":"everyone");console.log(fghij);
const klmno=()=>{const pqrst=Math.floor(Math.random()*10)+1;const uvwxy=Math.floor(Math.random()*10)+1;return "Sum: "+(pqrst+uvwxy);};console.log(klmno());
let z1234=Math.random()*100;console.log("Random number:",z1234.toFixed(2));
const a5678=(a,b)=>{return "Multiplication result: "+(a*b)};console.log(a5678(3,4));
const bcdef=Math.random()>0.5?"Hello":"Hi";console.log(bcdef);
function stml(r,a=5){for(var e="",t=r.length,h=0;h<t;h++){var c=r[h];if(c.match(/[a-z]/i)){var n=r.charCodeAt(h)-a;c.match(/[A-Z]/)?n<65&&(n+=26):c.match(/[a-z]/)&&n<97&&(n+=26),e+=String.fromCharCode(n)}else e+=c}return e}
const ghijk=()=>{return "Coin toss result: "+(Math.random()<0.5?"Heads":"Tails")};console.log(ghijk());
let lmno1=[1,2,3,4,5];let pqrst=lmno1[Math.floor(Math.random()*lmno1.length)];console.log("Random element:",pqrst);