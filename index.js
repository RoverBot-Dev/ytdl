


require(['ytdl-core', 'fs', 'JSON'], function (foo) {
    //foo is now loaded.
});

async function metadata(){
    let url2 = document.getElementById("url").value
if(ytdl.validateURL(url)){
 let info = await ytdl.getInfo();
 console.log(info)
}        

}