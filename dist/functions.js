"use strict";
function calulateTax(income, taxtYear = 2022) {
    if ((taxtYear) < 2022)
        return income * 1.2;
    return income * 1.3;
}
calulateTax(10000, 2022);
//# sourceMappingURL=functions.js.map