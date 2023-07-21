
/*
if (true)
{
    const a = { nome : "joão" };
    const a = { nome : "josé" };

    //Ocorre o mesmo erro porquê 'a' já foi declarada neste scopo.
    console.log(a);
}*/

//Neste caso funciona. O objeto instanciado continua sendo o mesmo, o que mudou foi sua propriedade.
const a = { nome : 'maria'};
a.nome = 'sara';

console.log(a);