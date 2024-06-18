// Tham chiếu đến 2 nút 
const agreeBtn = document.getElementById('agree');
const disagreeBtn = document.getElementById('disagree');

// Lấy chiều cao và rộng của cửa sổ trình duyệt
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

// Hàm di chuyển nút đến vị trí ngẫu nhiên
function moveButton() {
  // Tính toán vị trí ngẫu nhiên trong cửa sổ trình duyệt
  const randomX = Math.random() * (windowWidth - disagreeBtn.offsetWidth);
  const randomY = Math.random() * (windowHeight - disagreeBtn.offsetHeight);

  // Di chuyển nút đến vị trí ngẫu nhiên
  disagreeBtn.style.position = 'absolute';
  disagreeBtn.style.left = `${randomX}px`;
  disagreeBtn.style.top = `${randomY}px`;

  // Hiển thị thông báo
  showNotification('Mày ấn hộ bố mày cái', 'image/c2.png');
}

// Hàm hiển thị thông báo
function showNotification(message, imageUrl) {
  // Tạo phần tử thông báo
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.top = '9%';
  notification.style.left = '50%';
  notification.style.transform = 'translate(-50%, -50%)';
  notification.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  notification.style.color = 'white';
  notification.style.padding = '10px 20px';
  notification.style.borderRadius = '5px';
  notification.style.zIndex = '9999';
  notification.style.display = 'flex';
  notification.style.alignItems = 'center';

  // Tạo phần tử ảnh
  const image = document.createElement('img');
  image.src = imageUrl; // Thay đường dẫn ảnh của bạn ở đây
  image.style.maxWidth = '150px'; // Đặt chiều rộng tối đa của ảnh
  image.style.marginRight = '10px'; // Khoảng cách giữa ảnh và văn bản

  // Tạo phần tử văn bản
  const text = document.createTextNode(message);

  // Thêm ảnh và văn bản vào thông báo
  notification.appendChild(image);
  notification.appendChild(text);

  // Thêm phần tử thông báo vào trang
  document.body.appendChild(notification);

  // Xóa thông báo sau 2 giây
  setTimeout(function() {
    notification.remove();
  }, 2000);
}

// Gán sự kiện click cho nút "Không đồng ý"
disagreeBtn.addEventListener('click', moveButton);

// Gán sự kiện click cho nút "Đồng ý"
agreeBtn.addEventListener('click', function() {
  showNotification('Đạt béo thật', 'image/c4.jpg'); // Thay đường dẫn ảnh của bạn ở đây
});
