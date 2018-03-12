var fs = require ('fs'), path = require('path');
var dirName = process.cwd();  // get current directory 
// get arguments : 
var extension = process.argv[2];
var searchString =  process.argv[3];
 
// recursive search for all files under current directory
function dig (dir) {

   // console.log ('[+]',dir);
    var files=  fs.readdirSync  (dir);
    for (var i in files) {

        var next = path.join(dir,files[i]);
        if (fs.lstatSync(next).isDirectory()== true){
            dig(next);}
            else {    
                var currExtension =    getExtension(files[i]);
                if (currExtension == extension)
                   {
                     var currFile = fs.readFileSync(next, "utf8");
                     var  myFile = currFile.toString();
                       if ( myFile.indexOf(searchString) > -1)
                          {
                            console.log (next);
                          }     
                    }          
                  }
                 }
    }
function getExtension(filename) {
        return filename.split('.').pop();
    }

dig(dirName);

 