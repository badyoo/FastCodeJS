const path = require("path");
const rollup = require("rollup");
const typescript = require("rollup-plugin-typescript2");
var dir = process.cwd();
var main = "src/Main.js";
var compile =
{
    input: path.join(dir,main)
}
if( process.argv[2] !== "js" )
{
    main = "src/Main.ts";
    var compile =
    {
        input: path.join(dir,main),
        plugins: [
            typescript({
                cacheRoot:path.join(dir,"BYGLCache"),
                clean:true,
                check: false, 
                tsconfigOverride:{compilerOptions:{removeComments: true}}
            })
        ]
    }
    console.log("[start build typeScript]:"+path.join(dir,main));
}
else
{
    console.log("[start build javaScript]:"+path.join(dir,main));
}

rollup.rollup(compile).then
(
 (b)=>
 {
    b.write
    (
        {
            file: path.join(dir,'bin/BYGLGame.js'),
            format: 'iife',
            sourcemap:true
        }
    ).then(
        (o)=>
        {
           console.log("[end build]"); 
        }
    )
 }   
)
