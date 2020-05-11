/* Xây dựng hàm sinh id tự động, output là chuỗi id duy nhất */
function taoId() {
    var id = '';
    /* Lấy milisecond ở thời điểm hiện tại; 1s = 1000mls */
    id = Math.random().toString().substr(2,10) +"_"+(new Date().getTime());
    return id;

}
function loadDataItemGioHang (key){
    let data =JSON.parse(localStorage.getItem(key));
    if(data == null){
        data = new Array();
    }
    return data;
}
function ghiDuLieuLocal(key, data){
	localStorage.setItem(key,JSON.stringify(data));
}
