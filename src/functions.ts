function calulateTax(income: number,taxtYear = 2022): number{
    if((taxtYear) < 2022)
         return income * 1.2;
    return  income * 1.3;
}

calulateTax(10000,2022);