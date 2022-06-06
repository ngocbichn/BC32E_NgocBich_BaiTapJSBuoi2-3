// Bai Tap 1//
document.getElementById('btnTinhLuong').onclick = function (){
    //input
    var soNgayLam = document.getElementById('soNgayLam').value;
    var luongMotNgay = document.getElementById('luongMotNgay').value;

    //output
    var tienLuong = 0;

    //xu ly
    tienLuong = soNgayLam * luongMotNgay;
    document.getElementById('tienLuong').innerHTML = tienLuong + 'VND';
}

//Bai Tap 2//
document.getElementById('btnTinhTrungBinh').onclick = function (){
    //input
    var soThuNhat = +document.getElementById('soThuNhat').value;
    var soThuHai = +document.getElementById('soThuHai').value;
    var soThuBa = +document.getElementById('soThuBa').value;
    var soThuTu = +document.getElementById('soThuTu').value;
    var soThuNam = +document.getElementById('soThuNam').value;

    //output
    var trungBinh = 0;

    //xu ly
    trungBinh = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;
    document.getElementById('trungBinh').innerHTML = trungBinh.toFixed(2);
}

//Bai Tap 3//
document.getElementById('btnDoiTien').onclick = function (){
    //input
    var tienUSD = +document.getElementById('soTienUSD').value;
    var tyGia = 23500;

    //output
    var tienVND = 0;

    //xu ly
    tienVND = tienUSD * tyGia;
    document.getElementById('tienVND').innerHTML = tienVND + 'VND';
}

//Bai Tap 4//
document.getElementById('btnTinhChuVi').onclick = function () {
    //input 
    var tagChieuDai = +document.getElementById('chieuDai').value;
    var tagChieuRong = +document.getElementById('chieuRong').value;

    //output
    var tagChuVi = 0;

    //xu ly
    tagChuVi = (tagChieuDai + tagChieuRong) * 2;
    document.getElementById('chuVi').innerHTML = tagChuVi;
}
document.getElementById('btnTinhDienTich').onclick = function () {
    //input
    var tagChieuDai = +document.getElementById('chieuDai').value;
    var tagChieuRong = +document.getElementById('chieuRong').value;

    //output
    var tagDienTich = 0;

    //xu ly
    tagDienTich = tagChieuDai * tagChieuRong;
    document.getElementById('dienTich').innerHTML = tagDienTich;
}

//Bai Tap 5//
document.getElementById('btnTinhTongKySo').onclick = function () {
    //input
    var tagSo = Number(document.getElementById('soHaiChuSo').value);
    var tagSoThuNhat = 0;
    var tagSoThuHai = 0; 
    //output
    var tagTong = 0;

    //xu ly 
    tagSoThuNhat = Math.floor(tagSo / 10);
    tagSoThuHai = tagSo % 10;
    tagTong = tagSoThuNhat + tagSoThuHai;
    document.getElementById('tongHaiKySo').innerHTML = tagTong;
}