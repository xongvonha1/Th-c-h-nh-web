function thuchien(){
    var chuoi = document.getElementById("chuoi").value;
    if(chuoi == ""){
        alert("hãy nhập nội dung vào chuỗi.");
        document.getElementById("chuoi").focus();
    }


    var array = chuoi.split(",");
    var select = document.getElementById("danhsach");
    var lenght = select.options.lenght;
    for(i=0; i<lenght; i++)
    {
        select.remove(select.options[0]);
    }

    array.forEach(function(op) {
        op = op.trim();
        if(op!=""){
            var option = document.createElement("option");
            option.text=op;
            select.add(option);
        }
    },this);
}
function change(){
    var selectbox = document.getElementById("danhsach");
    var selectedValue = 
    selectbox.options[selectbox.selectedIndex].value;
    alert("Bạn đã chọn thư mục "+ selectedValue);
}

function huy(){
    document.getElementById("chuoi").value= "";
}