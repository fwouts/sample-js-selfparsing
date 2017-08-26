import * as fs from "fs";
import * as ts from "typescript";

let sourceCode = fs.readFileSync(__filename, "utf8");
let tsSourceFile = ts.createSourceFile(
  __filename,
  sourceCode,
  ts.ScriptTarget.Latest
);
for (let statement of tsSourceFile.statements) {
  if (ts.isForOfStatement(statement)) {
    let forOfStatement = statement;
    forOfStatement.statement = ts.createStatement(
      ts.createCall(
        ts.createPropertyAccess(ts.createIdentifier("console"), "log"),
        [],
        [ts.createLiteral("Hello, World!")]
      )
    );
  }
}
console.log(ts.createPrinter().printFile(tsSourceFile));
