/* Mô tả: Tạo nhanh item đối tượng giỏ hàng
   input: id sản phẩm và số lượng sản phẩm
   output: Đối tượng item giỏ hàng */
   var keyLocalStorageItemGioHang = 'danhSachItemGioHang';

   function taoDoiTuongItemGioHang(idSanPham, soLuong) {
       var itemGioHang = new Object();
       itemGioHang.idSanPham = idSanPham;
       itemGioHang.soLuong = soLuong;
   
   
       return itemGioHang;
   
   }
   /* Mô tả: Lấy thông tin giỏ hàng dưới local storage
      input: 
      output: giỏ hàng = danh sách item giỏ hàng  */
   function layGioHangTuLocalStorage() {
       var danhSachItemGioHang = new Array();
       /* B1: Lấy chuỗi json của danh sách item giỏ hàng lên */
       var jsonDanhSachItemGioHang = localStorage.getItem('giohang');
   
       /* B2: Chuyển json thành danh sách giỏ hàng */
       if (jsonDanhSachItemGioHang != null)
           danhSachItemGioHang = JSON.parse(jsonDanhSachItemGioHang);
   
       return danhSachItemGioHang;
   }
   
   /* Mô tả: Thêm 1 sản phẩm vào giỏ hàng 
      input: một sản phẩm, giỏ hàng hiện tại
      output: giỏ hàng sau khi đượcc thêm */
   function themVaoGioHang(idSanPham, danhSachItemGioHang) {
       var danhSachItemGioHangSauKhiDuocThem = new Array();
   
       /* B1: Tạo ra đối tượng item giỏ hàng (idSanPham, Số lượng mặc định là 1) */
       var itemGioHang = taoDoiTuongItemGioHang(idSanPham, 1);
   
       /* B2: Thêm item giỏ hàng vào danhSachItemGioHangSauKhiDuocthem */
       danhSachItemGioHangSauKhiDuocThem.push(itemGioHang)
   
       return danhSachItemGioHangSauKhiDuocThem;
   
   }
   
   /* Mô tả: Lưu trữ giỏ hàng xuống local storage
      input: Giỏ hàng = danh sách item giỏ hàng
      output:  */
   function luuGioHangXuongLocalStorage(danhSachItemGioHang) {
   
       /* B1: Chuyển đối tượng thành json */
       var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang)
   
       /* B2: Lưu Json xuống local storage  */
       localStorage.setItem('giohang', jsonDanhSachItemGioHang);
   
   }
   // xóa đây đúng ko?
   //cái đó e làm sai ấy.. ak ok
   function xoaSP(idSanPham){
   // load từ local
	let dataGioHang = loadDataItemGioHang('giohang');

	// xóa node giỏ hàng
	let nodeCha = event.target.parentElement;
	let nodeSanPham = nodeCha.parentElement;
	nodeSanPham.remove();

	// xóa trong local
	let viTri = dataGioHang.findIndex(sp => sp.idSanPham == idSanPham);
	dataGioHang.splice(viTri, 1);

	ghiDuLieuLocal('giohang', dataGioHang);
   }