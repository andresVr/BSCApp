export function calcEquivalence(qualification) {
    var resutl=null;
    if(qualification>=1&&qualification<=4){

        resutl= 1;
    }
    if(qualification>=5&&qualification<=8){

        resutl= 5;
    }
    if(qualification>=9&&qualification<=10){

        resutl= 9;
    }
    return resutl;
}