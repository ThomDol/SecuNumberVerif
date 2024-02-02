let secNum = document.getElementById('secNum');
let button = document.getElementById('button');
let message = document.getElementById('message');
let keyEntered= document.getElementById("key");
let sexe = document.getElementById('sexe');
let year = document.getElementById('year');
let month = document.getElementById('month');
let departNumber=document.getElementById('departNumber');
let communeNumber=document.getElementById('communeNumber');
let acteNumber=document.getElementById('acteNumber');
let cle = document.getElementById('cle');

button.addEventListener('click',isValid);


function isValid (){
    let valid=true;
    let secNumChaine=secNum.value.toString();
    let secNumTab=[];
    if(secNum.value.length!=13){message.innerText="Le numéro doit être de 13 chiffres"}
    else{
    for (i=0;i<secNumChaine.length;i++){
        let chiffre = parseInt(secNumChaine[i]);
        secNumTab.push(chiffre);}

    //Premiere verif (sexe) - index 0
    if(secNumTab[0]!=1 && secNumTab[0]!=2 ){
        valid=false;
        sexe.innerText=secNumTab[0].toString()+' ';
        sexe.style.color="red";}
        else{sexe.innerText=secNumTab[0].toString()+' ';
            sexe.style.color="green";}

    //Deuxieme verif (annee) - index 1-2 => RAS
    year.innerText=secNumTab[1].toString()+secNumTab[2].toString()+' ';
    year.style.color="green";

    //Troisieme verif (mois) - index 3-4
    let mois = 10*secNumTab[3]+secNumTab[4]
    if (mois>12){
        valid=false;
        month.innerText=affiche(mois)+' ';
        month.style.color="red";}
        else{
            month.innerText=affiche(mois)+' ';
            month.style.color="green";}

    //Quatrieme verif (departement) - index 5-6
    let departement = 10*secNumTab[5]+secNumTab[6];
    if(departement>95){
        valid=false;
        departNumber.style.color="red";
        departNumber.innerText=affiche(departement)+' ';}
        else{departNumber.innerText=affiche(departement)+' ';
        departNumber.style.color="green";}

    //Cinquieme verif (commune) - index 7-8-9 ==> RAS
    let commune =   secNumTab[7]*100 + secNumTab[8]*10+secNumTab[9];
    communeNumber.innerText=afficheCentaine(commune)+' ';
    communeNumber.style.color="green";

    //Sixieme verif (acte de naissance) - index 10-11-12 ==> RAS
    let acte =   secNumTab[10]*100 + secNumTab[11]*10+secNumTab[12];
    acteNumber.innerText=afficheCentaine(acte)+' ';
    acteNumber.style.color="green";

    //Sixieme verif (NIR) 
    if(keyEntered.value!=nirCalculate(secNum.value)){
        valid=false;
        cle.innerText=keyEntered.value;
        cle.style.color="red";}
        else{cle.innerText=keyEntered.value;
            cle.style.color="green";}

    if (valid){message.innerText="Valide"}
    else{message.innerText="Non valide"}
}
}

    


function nirCalculate (number){
    let key =  97-number%97;
    return key;
}    

function affiche(mois){
if (mois<10){return '0'+mois.toString();}
else return mois.toString();
}

function afficheCentaine(item){
    if(item<10){
        return '00'+item.toString();}
        else if (item<100){
            return '0'+item.toString();}
            else{return item.toString();}
}