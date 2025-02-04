const fs=require("fs")
//console.log(fs);
//fs.writeFileSync("b.txt","helloi")
fs.writeFile("a.txt", "hi i am a",()=>{
    console.log("done");
    fs.readFile("a.txt",(error,read)=>{
console.log(error,read.toString());

    })
})


