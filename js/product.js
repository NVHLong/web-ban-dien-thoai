function SubComment() {
    if (document.subcom.comm_name.value == '' ||
        document.subcom.comm_mail.value == '' || document.subcom.comm_details.value == '') {
        alert("Bạn cần nhập đầy đủ thông tin");
        return false;
    } else {
        alert("Bạn muốn gửi comment chứ ??");
        return true;
    }
}