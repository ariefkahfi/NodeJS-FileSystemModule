let http = require("http");
let path = require("path");
let fs= require("fs");


//membaca isi dari sebuah direktori
let readFileContent = (dirPath,res)=>{
    fs.readdir(dirPath,(err,listOfFiles)=>{
        if(err){
           res.end(err);
        }else{
           listOfFiles.forEach((val)=>{
                console.log(val);
           });
           res.end();
        }
    });
};


//appendFile
let appendFile = (filePath,data ,res)=>{
    fs.appendFile(filePath,data,(err)=>{
       if(err){
          console.log(err);
       }else{
          console.log("write to file " + filePath + " OK" );
       }
       res.end();
    });
};

//mkdir
let makeDir = (dirPath,res)=>{
    fs.mkdir(dirPath,(err)=>{
        if(err){
           res.end(err);
        }else{
            console.log("write directory OK");
            res.end();
        }
    });
};

//fs.readfile
let bacaFile = (dirPath , res)=>{
    fs.readFile(dirPath,(err,data)=>{
        if(err){
            res.end(err);
        }else{
            res.writeHead(200,{
                "Content-type":"text/plain"
            });
            res.end(data);
        }

    });
};

//rename file
let renameFileOrDir = (oldPath,newPath , res)=>{
    fs.rename(oldPath,newPath,(err)=>{
         if(err){
            res.end(err);
         }else{
            console.log("rename file OK");
            res.end();
         }
    });
};

//rmdir
let removeDir = (rmdirPath,res)=>{
  fs.rmdir(rmdirPath,(err)=>{
     if(err){
        res.end(err);
     }else{
        console.log("rmdir OK");
        res.end();
     }
  });
};

let httpServer = http.createServer((req,res)=>{
    // readFileContent(path.join(__dirname,"img"),res);
    // makeDir(path.join(__dirname,"hapus"),res);
    // appendFile(path.join(__dirname,"test/arief.txt"),"Hello world putro",res);
    // bacaFile(path.join(__dirname,"test/arief.txt") , res);
    // me-rename sebuah directory renameFileOrDir(path.join(__dirname,"test"),path.join(__dirname,"test123") , res);
    // me-rename sebuah file renameFileOrDir(path.join(__dirname,"test123/putro.txt"),path.join(__dirname,"test123/hello.txt"),res);
    // removeDir(path.join(__dirname,"hapus"),res);
});

httpServer.listen(9600,()=>{
   console.log("listening ....");
});