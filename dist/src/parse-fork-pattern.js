"use strict";function parseForkPattern(e){for(var r,t=/([a-z.]*):[a-z.,]*;/,l=[],a=trim_all_1.trimAll(","),s=trim_all_1.trimAll(";");t.test(e);)r=t.exec(e),e=e.replace(r[0],""),l.push({key:r[1],value:s(r[0].replace(r[1]+":",""))});return e.length&&l.push({key:null,value:a(e)}),l}Object.defineProperty(exports,"__esModule",{value:!0});var trim_all_1=require("./trim-all");exports.parseForkPattern=parseForkPattern;