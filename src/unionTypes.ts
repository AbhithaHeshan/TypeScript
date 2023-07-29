//  we can add bothe number or string as a example

function KgToLbs(weight: number | string): number {
       if(typeof weight === 'number')
            return weight * 2.2;
        else{
            return  parseInt(weight) * 2.2;
        }
          
}

KgToLbs(12);
KgToLbs('12kg');