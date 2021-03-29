function copyNumber() {
  var copyPhone = document.getElementById("phone_number_input");
  copyPhone.select();
  copyPhone.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyPhone.value);
}
function copyEmail() {
  var copyadress = document.getElementById("email_adress_input");
  copyadress.select();
  copyadress.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyadress.value);
};
