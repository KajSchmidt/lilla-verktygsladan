(function() {
    let age_row = document.querySelector("#tab6 > table > tbody > tr > td > table > tbody > tr:nth-of-type(4)"); //Hämtar raden för personnummer
    let age_row_header = age_row.children[0];
    let age_row_age = age_row.children[1];
    if (age_row_header.innerText == "Personnummer") { //Dubbelkollar att det är rätt celler
        let birth_string = "20" + age_row_age.innerText.substring(0,2) + "-" + age_row_age.innerText.substring(2,4) + "-" + age_row_age.innerText.substring(4,6); //Formaterar YYYY-MM--DD
        let birth_date = new Date(birth_string);
        let age_diff = new Date(Date.now() - birth_date.getTime());  //Räknar ut skillnad i timestamp-format
        let age = age_diff.getFullYear() - 1970; //Räknar om skillnaden till år
        console.log(age);
    }
})();