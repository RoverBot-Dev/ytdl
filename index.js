const fs = require('fs');
const ytdl = require('ytdl-core');
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("youtube linki ver? ", function(url) {
  rl.question("video adı ve uzantısı? ", function(ad) {
 
    ytdl(url ,{quality: "highestaudio"}).pipe(fs.createWriteStream(`${ad}`));
console.log("Yükleniyor... kaydediliyor...")
}    
);  
    
}    
);


