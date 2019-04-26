function kt() {
    let year = parseInt(document.getElementById("nhap").value);
    let isLeapyear = false;
    if (year%4==0) {
        if (year%100==0) {
            if (year%400==0) {
                isLeapyear = true;
            }
        } else {
            isLeapyear = true;
        }
    }
    if (isLeapyear) {
        document.getElementById("kq").innerHTML=year+" là năm nhuận  ";
    } else {
        document.getElementById("kq").innerHTML=year+" không phải là năm nhuận";
    }
}