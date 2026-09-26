// Bước 8: Thêm trình nghe cho onload (Sự kiện khi trang web vừa tải xong)
window.onload = function() {
    console.log("Trang web đã tải xong! Sẵn sàng cho trải nghiệm thư viện ảnh.");
    
    // Gọi hàm thiết lập tabindex ngay khi tải trang
    setupTabFocus();
};

// Lấy tất cả các ảnh nhỏ có class là "thumbnail"
const thumbnails = document.querySelectorAll('.thumbnail');

// --- XỬ LÝ SỰ KIỆN CHUỘT (BƯỚC 3 & 4 TỪ BÀI TRƯỚC) ---
thumbnails.forEach(pic => {
    // Khi di chuột vào (mouseover)
    pic.addEventListener('mouseover', function() {
        updatePreview(this);
    });

    // Khi di chuột ra (mouseout)
    pic.addEventListener('mouseout', function() {
        resetPreview();
    });
});

// --- BƯỚC 6: THÊM NGƯỜI NGHE FOCUS VÀ BLUR (CHO NGƯỜI DÙNG BÀN PHÍM) ---
// Dùng vòng lặp for truyền thống theo đúng ý đồ giáo sư (Bước 9b)
for (let i = 0; i < thumbnails.length; i++) {
    
    // Sự kiện focus (khi bấm phím Tab nhảy vào ảnh) - Tương tự mouseover
    thumbnails[i].addEventListener('focus', function() {
        console.log(`Sự kiện focus kích hoạt trên ảnh thứ ${i + 1}`); // Bước 9a
        updatePreview(this);
    });

    // Sự kiện blur (khi bấm phím Tab nhảy khỏi ảnh) - Tương tự mouseout
    thumbnails[i].addEventListener('blur', function() {
        console.log(`Sự kiện blur kích hoạt trên ảnh thứ ${i + 1}`); // Bước 9a
        resetPreview();
    });
}

// --- BƯỚC 9: HÀM THÊM THUỘC TÍNH TABINDEX ---
function setupTabFocus() {
    // Bước 9b: Viết một vòng lặp for để lặp qua từng hình ảnh
    for (let i = 0; i < thumbnails.length; i++) {
        // Bước 9c: Thêm thuộc tính tabindex
        // tabindex="0" cho phép phần tử nhận focus từ bàn phím theo thứ tự tự nhiên
        thumbnails[i].setAttribute('tabindex', '0'); 
        
        // Bước 9a: Thêm thông báo console.log để đảm bảo sự kiện kích hoạt
        console.log(`Đã thêm tabindex cho ảnh thứ ${i + 1}`);
    }
}

// --- HÀM CẬP NHẬT ẢNH LỚN (Dùng chung cho cả mouseover và focus) ---
function updatePreview(imageElement) {
    let previewPicSrc = imageElement.src;
    let previewPicAlt = imageElement.alt;

    // Cập nhật văn bản mô tả
    document.querySelector('#image-text').textContent = previewPicAlt;

    // Cập nhật hình nền của div preview
    document.getElementById('preview-pic').style.backgroundImage = `url(${previewPicSrc})`;
    
    // Cập nhật aria-label cho người dùng trình đọc màn hình (Screen Reader)
    document.getElementById('preview-pic').setAttribute('aria-label', previewPicAlt);
}

// --- HÀM RESET VỀ BAN ĐẦU (Dùng chung cho cả mouseout và blur) ---
function resetPreview() {
    // Trả lại hình nền rỗng
    document.getElementById('preview-pic').style.backgroundImage = 'url("")';
    document.getElementById('preview-pic').setAttribute('aria-label', 'Image preview area');

    // Trả lại văn bản gốc
    document.querySelector('#image-text').textContent = "Hover over or tab to an image below to display it here.";
}
