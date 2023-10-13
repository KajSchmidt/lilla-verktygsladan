(function() {
    let age_row = document.querySelector("#tab6 > table > tbody > tr > td > table > tbody > tr:nth-of-type(4)"); //Hämtar raden för personnummer
    let age_row_header = age_row.children[0];
    let age_row_age = age_row.children[1];
    if (age_row_header.innerText == "Personnummer") { //Dubbelkollar att det är rätt celler
        let birthday = "20" + age_row_age.innerText.substring(0,6);
        console.log(birthday);
        birthday = birthday.substring(0,4) + "-" + birthday.substring(4,6) + "-" + birthday.substring(6,8)
        console.log(birthday);
    }
})();