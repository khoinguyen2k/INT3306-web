// Nếu người dùng kích chọn tệp ảnh
document.getElementById("FileUpload1").onchange = function () {
    let preview = document.querySelector("img.preview");
    let canvas = document.querySelector("canvas.target");

    let file = this.files[0];

    let reader = new FileReader();

    // Gọi khi đọc xong tệp
    reader.onload = function () {
        // Hiển thị ảnh gốc
        preview.src = reader.result;
        preview.classList.remove("nodisplay");

        // Không xử lý ảnh ngay tại đây
        // mà đưa task xử lý ảnh vào macrotask queue để xử lý sau.
        // Lý do là phải kết thúc callback này để trình duyệt repaint
        // thì mới thấy ảnh vừa được cập nhật.
        setTimeout(function () {
            // Vẽ ảnh lên canvas
            canvas.width = preview.clientWidth;
            canvas.height = preview.clientHeight;
            let cvContext = canvas.getContext("2d");
            cvContext.drawImage(preview, 0, 0, canvas.width, canvas.height);

            let worker = new SharedWorker("imgProcess.js");

            // Gọi lại khi web worker xử lý xong ảnh
            worker.port.onmessage = function (e) {
                // e.data là các pixels đã qua xử lý
                // Vẽ lại canvas với dữ liệu ảnh đã qua xử lý
                cvContext.putImageData(new ImageData(e.data, canvas.width, canvas.height), 0, 0);
                // Hiển thị canvas
                canvas.classList.remove("nodisplay");
            };

            // Lấy dữ liệu ảnh từ canvas
            let imgData = cvContext.getImageData(0, 0, canvas.width, canvas.height);
            let pixels = imgData.data;

            // Gửi dữ liệu pixels cho worker
            worker.port.postMessage(pixels);
        }, 100);
    };

    // Đọc tệp
    if (file) reader.readAsDataURL(file);
};