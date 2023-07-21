const a = 30;

//Dentro do mesmo scopo, uma vez declarada não pode ser alterada. Ocorre o erro: "Identifier 'a' has already been declared"
/*const a = 40;
console.log(a); */

    //Assim como o "let", só pode ser acessada dentro do mesmo Scopo.
    if(true){
        const a = 35;
        const a = 50;
    
        if(true){
            //Dentro do mesmo scopo, uma vez declarada não pode ser alterada. Ocorre o erro: "Identifier 'a' has already been declared"
            console.log(a);
    
        }
    }