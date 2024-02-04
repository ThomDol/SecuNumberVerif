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

let regexInput = new RegExp('\\d{13}');
let regexKey = new RegExp('\\d{2}')

function isValid (){
    message.innerText="";
    sexe.innerText="";
    year.innerText="";
    month.innerText="";
    departNumber.innerText="";
    communeNumber.innerText="";
    acteNumber.innerText="";
    cle.innerText="";
    let valid=true;
    let secNumTab=[];
    console.log(secNum.value);
    console.log(regexInput.test(secNum.value));
    console.log(secNum.value.length);
    if(!regexInput.test(secNum.value) || secNum.value.length!=13){message.innerText="Le numéro doit être de 13 chiffres";}
    else if(!regexKey.test(keyEntered.value) || keyEntered.value.length!=2){message.innerText="La clé doit avoir 2 chiffres";}
    else{    
        for (i=0;i<secNum.value.length;i++){
        let chiffre = parseInt(secNum.value[i]);
        secNumTab.push(chiffre);}

    //Premiere verif (sexe) - index 0
    if(secNumTab[0]!=1 && secNumTab[0]!=2 ){
        valid=false;
        sexe.innerText=secNumTab[0].toString()+' ';
        sexe.style.color="red";}
        else{sexe.style.color="green";}

    //Deuxieme verif (annee) - index 1-2 => RAS
    year.style.color="green";

    //Troisieme verif (mois) - index 3-4
    let mois = 10*secNumTab[3]+secNumTab[4]
    if (mois>12){valid=false;
                month.style.color="red";}
            else{month.style.color="green";}
            
    //Quatrieme verif (departement) - index 5-6
    let departement = 10*secNumTab[5]+secNumTab[6];
    if(departement>95){valid=false;
                        departNumber.style.color="red";}
                    else{ departNumber.style.color="green";}

    //Cinquieme verif (commune) - index 7-8-9 ==> RAS
    let commune =   secNumTab[7]*100 + secNumTab[8]*10+secNumTab[9];
    
    communeNumber.style.color="green";

    //Sixieme verif (acte de naissance) - index 10-11-12 ==> RAS
    let acte =   secNumTab[10]*100 + secNumTab[11]*10+secNumTab[12];
    
    acteNumber.style.color="green";

    //Sixieme verif (NIR) 
    if(parseInt(keyEntered.value)!=nirCalculate(parseInt(secNum.value))){
        valid=false;
        cle.style.color="red";}
        else{cle.style.color="green";}

    //Affichage
    if (valid){message.innerText="Valide"}
    else{message.innerText="Non valide";
        sexe.innerText=secNumTab[0].toString()+' ';
        year.innerText=secNumTab[1].toString()+secNumTab[2].toString()+' ';
        month.innerText=affiche(mois)+' ';
        departNumber.innerText=affiche(departement)+' ';
        communeNumber.innerText=afficheCentaine(commune)+' ';
        acteNumber.innerText=afficheCentaine(acte)+' ';
        cle.innerText=keyEntered.value;}
}
}

    


function nirCalculate (number){
    let key =  97-number%97;
    return key;
}    

function affiche(number){
if (number<10){return '0'+number.toString();}
else return number.toString();
}

function afficheCentaine(number){
    if(number<10){
        return '00'+item.toString();}
        else if (number<100){
            return '0'+number.toString();}
            else{return number.toString();}
}