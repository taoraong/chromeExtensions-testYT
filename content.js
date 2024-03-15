// content.js

// สร้าง function สำหรับการแทรกข้อความหลังจากโหลดข้อมูล YouTube แล้วเสร็จสมบูรณ์
function insertTextAfterYouTubeLoaded() {
    // สร้าง Element ข้อความ
    var textElement = document.createElement('div');
    textElement.textContent = 'Online-Station';

    // เพิ่มสไตล์ให้กับ Element
    textElement.style.position = 'fixed';
    textElement.style.top = '20px';
    textElement.style.right = '100px';
    textElement.style.backgroundColor = 'orange';
    textElement.style.padding = '10px';
    textElement.style.border = '1px solid black';
    textElement.style.zIndex = '9999';
    textElement.style.fontSize = '24px'; // แก้ไขตามที่ต้องการ

    // เพิ่ม Element เข้าไปในหน้าเว็บ
    document.body.appendChild(textElement);

    // สร้าง Element div ใหม่
    var newDiv = document.createElement('div');

    // กำหนดข้อความให้กับ Element div ใหม่
    var newText = 'OS Suggestion';
    newDiv.textContent = newText;
    newDiv.style.color = 'red';
    // หากต้องการแทรกไปต่อท้าย Element ที่มีอยู่แล้ว เช่น Element ที่มี class เป็น 'yt-simple-endpoint'
    // คุณสามารถดึง Element ด้วย class แล้วใช้ appendChild() เพื่อเพิ่ม Element ใหม่เข้าไปในนั้นได้
    var contentElements = document.querySelectorAll('.yt-simple-endpoint');
    for (var i = 0; i < contentElements.length; i++) {
        contentElements[i].appendChild(newDiv.cloneNode(true)); // ใช้ cloneNode(true) เพื่อทำการคัดลอก Element div ใหม่
    }
}

// รอให้หน้าเว็บโหลดเสร็จสมบูรณ์
window.addEventListener('load', function() {
    // เรียกใช้ function เมื่อหน้าเว็บโหลดเสร็จสมบูรณ์
    insertTextAfterYouTubeLoaded();
});
