const a = 30;

    //Assim como o "let", só pode ser acessada dentro do mesmo Scopo.
if(true){
    const a = 35

    if(true){
        //Também funciona. Acessada dentro de um bloco que está dentro do bloco em que a variável foi declarada.
        console.log(a);

    }
}