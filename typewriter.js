


const sentence = "hello there from lighthouse labs";
let delay = 500;
const typeWriter = (sentence)=>{
  for(let str of sentence){
    setTimeout(() =>process.stdout.write(str), delay);
    delay += 500;

  }
}
typeWriter(sentence);
