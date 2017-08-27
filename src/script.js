import * as fs from "fs";
import * as ts from "typescript";

let sourceCode = "let a = /regexp/";

let tsSourceFile = ts.createSourceFile(
  __filename,
  sourceCode,
  ts.ScriptTarget.Latest
);

console.log(
  ts.createPrinter().printFile(tsSourceFile)
);

/*
$ yarn start
yarn start v0.27.5
$ babel-node src/script.js --presets env
/Users/work/GitHub/sample-js-selfparsing/node_modules/typescript/lib/typescript.js:3495
            throw e;
            ^
Error: Debug Failure.
    at Object.getLiteralText (/Users/work/GitHub/sample-js-selfparsing/node_modules/typescript/lib/typescript.js:7077:18)
    at getLiteralTextOfNode (/Users/work/GitHub/sample-js-selfparsing/node_modules/typescript/lib/typescript.js:68597:23)
    at emitLiteral (/Users/work/GitHub/sample-js-selfparsing/node_modules/typescript/lib/typescript.js:66918:24)
    at pipelineEmitExpression (/Users/work/GitHub/sample-js-selfparsing/node_modules/typescript/lib/typescript.js:66816:28)
    at pipelineEmitWithHint (/Users/work/GitHub/sample-js-selfparsing/node_modules/typescript/lib/typescript.js:66565:49)
    at pipelineEmitWithSourceMap (/Users/work/GitHub/sample-js-selfparsing/node_modules/typescript/lib/typescript.js:66558:17)
    at emitNodeWithNestedComments (/Users/work/GitHub/sample-js-selfparsing/node_modules/typescript/lib/typescript.js:64324:17)
    at emitNodeWithSynthesizedComments (/Users/work/GitHub/sample-js-selfparsing/node_modules/typescript/lib/typescript.js:64274:13)
    at emitNodeWithComments (/Users/work/GitHub/sample-js-selfparsing/node_modules/typescript/lib/typescript.js:64244:21)
    at pipelineEmitWithComments (/Users/work/GitHub/sample-js-selfparsing/node_modules/typescript/lib/typescript.js:66547:17)
error Command failed with exit code 1.
*/
