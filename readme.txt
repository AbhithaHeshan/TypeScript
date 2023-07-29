1. configure type scrpt
           . require node.js
           . install type script (cmd)  
                    - npm i -g typescript
           . check version  (cmd)
                    - tsc -v

2. how create tsconfig.json file (configuration file)
           .  tsc --init  
3.  src ?
           .  tsconfig.json ->  module section->  "rootDir": "./src"
4.  dist ?
            .  tsconfig.json ->  emit section ->  "outDir": "./dist"
5.  xx.js.map ?
            .  "sourceMap": true  
