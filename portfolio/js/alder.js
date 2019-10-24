function AlderC() {
    //Dags dato i år, måned og dag
    var datoNu = new Date();
    var aarNu = datoNu.getFullYear();
    var mdrNu = datoNu.getMonth();
    var dagNu = datoNu.getDate();
    //fødselsdags år, måned og dag
    var aarfodt = 1977;
    var mdrfodt = 3;
    var dagfodt = 6;

    if (mdrNu < mdrfodt || mdrNu == mdrfodt && dagNu < dagfodt) {
        alder = aarNu - aarfodt - 1;
    }
    else {
        alder = aarNu - aarfodt;
    }

    return alder;
}

function AlderT() {
    //Dags dato i år, måned og dag
    var datoNu = new Date();
    var aarNu = datoNu.getFullYear();
    var mdrNu = datoNu.getMonth();
    var dagNu = datoNu.getDate();
    //fødselsdags år, måned og dag
    var aarfodt = 2013;
    var mdrfodt = 6;
    var dagfodt = 15;

    if (mdrNu < mdrfodt || mdrNu == mdrfodt && dagNu < dagfodt) {
        alder = aarNu - aarfodt - 1;
    }
    else {
        alder = aarNu - aarfodt;
    }

    return alder;
}
document.getElementById("alder").innerHTML = AlderC();
document.getElementById("alderT").innerHTML = AlderT();