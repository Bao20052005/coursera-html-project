// Lấy tất cả các ảnh nhỏ có class là "thumbnail"
const thumbnails = document.querySelectorAll('.thumbnail');

// Lặp qua từng ảnh nhỏ để gắn sự kiện
thumbnails.forEach(pic => {
    
    // --- YÊU CẦU 3: HÀM UPDATE (KHI DI CHUỘT VÀO - MOUSEOVER) ---
    pic.addEventListener('mouseover', function() {
        
        // 3a. Bắt đầu với console.log() để kiểm tra sự kiện kích hoạt
        console.log("Mouseover event triggered!");

        // Lấy thông tin của ảnh đang được di chuột vào
        let previewPicSrc = this.src;
        let previewPicAlt = this.alt;

        // 3b. Sử dụng console.log để in ra thông tin về biến PreviewPic (alt và source)
        console.log("Preview Pic Source:", previewPicSrc);
        console.log("Preview Pic Alt:", previewPicAlt);

        // 3c. Sử dụng Document.querySelector để thay đổi văn bản của phần tử với id của hình ảnh
        document.querySelector('#image-text').textContent = previewPicAlt;

        // 3e. Sử dụng Document.getElementById để thay đổi hình nền của phần tử với id của hình ảnh
        document.getElementById('preview-pic').style.backgroundImage = `url(${previewPicSrc})`;
    });

    // --- YÊU CẦU 4: CHỨC NĂNG HOÀN TÁC (KHI DI CHUỘT RA - MOUSEOUT) ---
    pic.addEventListener('mouseout', function() {
        
        // 4a. Cập nhật url cho hình nền của div với id của hình ảnh trở lại giá trị ban đầu: url("")
        document.getElementById('preview-pic').style.backgroundImage = 'url("")';

        // 4b. Cập nhật văn bản của div với id của hình ảnh trở lại văn bản gốc
        // (Dịch từ: "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.")
        document.querySelector('#image-text').textContent = "Hover over an image below to display here.";
    });

});
