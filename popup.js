// popup.js

// เมื่อโหลด DOM เสร็จสมบูรณ์
document.addEventListener('DOMContentLoaded', function() {
  // สร้าง Event Listener สำหรับปุ่ม
  var button = document.getElementById('myButton');
  button.addEventListener('click', function() {
    // ทำอะไรสักอย่างเมื่อคลิกที่ปุ่ม
    // เปิดหน้าเว็บ YouTube.com ในหน้าต่างใหม่
    chrome.tabs.create({ url: 'https://www.youtube.com/' });
//    console.log('คลิกที่ปุ่ม');
  });
});
