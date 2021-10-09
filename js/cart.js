function Load() {
    alert('Trang đã được tải');
}

function BuyClick() {
    if (document.postcustomer.name.value == '' || document.postcustomer.phone.value == '' || document.postcustomer.mail.value == '' || document.postcustomer.add.value == '') {
        alert('Bạn cần phải cập nhật thông tin!!!');
        return false;
    } else {
        alert('Vui lòng kiểm tra lại lần cuối');
        return true;
    }

}