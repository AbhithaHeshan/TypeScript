function great(name:string | null | undefined){   // union operator
    if (name)
      console.log(name.toUpperCase);
    else
      console.log('Hola!');
      
}

great(null);