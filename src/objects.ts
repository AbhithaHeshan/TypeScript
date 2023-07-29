let employee:{
    readonly id: number,
    name?: string     
} = {id:1,name:"amal"}

employee.name = 'abeetha'


let client:{
    id: number,
    name: string,
    retire: (date:Date) => void    
} = {
    id:1,
    name:"amal",
    retire:(date:Date) =>{
         console.log(date , "  Date ");
         
    }
}

// avoid dry principle , hard to read and understand
// lets fix it


type Employee = {
    readonly id: number,
    name: string,
    retire: (date:Date) => void   
}

let emloyees: Employee = {
    id:1,
    name:"amal",
    retire:(date:Date) =>{
         console.log(date , "  Date ");
    }
}