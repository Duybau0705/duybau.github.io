function batDau() {
    document.getElementById("batdauid").style.display="none";
    document.getElementById("btn-tieptuc").style.display="block";
}

var x = 0;
function doiAnh() {
    var listText = ["Bạn khi này mới 1 tuổi nên chỉ biết ăn ngủ, trừ khi bạn là alien",
    "Vì là dân IT nên bạn biết đi sớm khi 3 tuổi",
    "Khi bạn 5 tuổi bạn đã có suy nghĩ khác với bạn đồng trang lứa",
    "Lên lớp 1",
    "Tiếp xúc máy tính",
    "Chơi bời với Pascal và các tựa game đối kháng phòng tin học =))",
    "Đại học và cận thị X))",
    "Bạn ra trường sau n++ năm ở đại học, và đây là hình mẫu khi bạn ra trường",
    "Trĩ :)",
    "Cận lòi mắt",
    "Chữa bệnh :)",
    "Nghĩ làm IT và suy nghĩ hướng khác",
    "Buôn bất động sản",
    "Tự do tài chính",
    "Tận hưởng tuổi già",
    "Xuống lỗ :((("];
    var listImg = ["./img/anh1tuoi.jpg","./img/anh3tuoi.jpg","./img/anh5tuoi.jpg","./img/anh7tuoi.jpg","./img/anhcap2.jpg","./img/anhcap3.jpg","./img/daihoc.jpg","./img/ratruong.jpg","./img/tri.jpg","./img/can.jpg","./img/chuabenh.jpg","./img/nghiviec.jpg","./img/bds.jpg","./img/tien.jpg","./img/gia.jpg","./img/hom.jpg"];
    document.getElementById("listIMg").src = listImg[x];
    document.getElementById("textId").innerText = listText[x]; 
    x++;
    if(x==16){
        x=0;
        document.getElementById("btn-tieptuc").style.display = "none";
        document.getElementById("batdauid").style.display="block";
    }
}
