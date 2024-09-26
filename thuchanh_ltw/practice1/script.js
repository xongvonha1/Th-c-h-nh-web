function xem() {
  var ngay = new Date(document.getElementById("ngaysinh").value);
  if (ngay == null) {
    alert("Hãy nhập ngày tháng");
    document.getElementById("ngaysinh").focus();
  }
  var day = ngay.getDate();
  var month = ngay.getMonth() + 1;
  var cung = document.getElementById("cung");
  cung.value = typeCung(day, month);
}

function typeCung(day, month) {
  switch (month) {
    case 1:
      if (day <= 19) return "Ma kết";
      else return "Bảo Bình";
    case 2:
      if (day <= 18) return "Bảo Bình";
      else return "Song Ngư";
    case 3:
      if (day <= 20) return "Song Ngư";
      else return "Bạch Dương";
    case 4:
      if (day <= 20) return "Bạch Dương";
      else return "Kim Ngưu";
    case 5:
      if (day <= 20) return "Kim Ngưu";
      else return "Song Tử";
    case 6:
      if (day <= 22) return "Song tử";
      else return "Cự giải";
    case 7:
      if (day <= 22) return "Cự giải";
      else return "Sư tử";
    case 8:
      if (day <= 22) return "Sư tử";
      else return "Xử nữ";
    case 9:
      if (day <= 22) return "Xử nữ ";
      else return "Thiên Bình";
    case 10:
      if (day <= 23) return "Thiên Bình";
      else return "Bọ cạp";
    case 11:
      if (day <= 22) return "Bọ cạp";
      else return "Nhân mã";
    case 12:
      if (day <= 21) return "Nhân mã";
      else return "Ma kết";
  }
}
