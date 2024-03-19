// content.js

// สร้างฟังก์ชั่นสำหรับการตรวจสอบสถานะการลงชื่อเข้าใช้ผ่าน API
/*
function checkLoginStatus() {
  fetch('https://yourwebsite.com/api/check-login', {
    method: 'GET',
    credentials: 'include' // ระบุให้ใช้ Cookie สำหรับการตรวจสอบเซสชัน
  })
  .then(response => {
    if (response.ok) {
      // ถ้าสถานะการตอบสนองเป็น 200 OK
      // ผู้ใช้ลงชื่อเข้าใช้แล้ว
      console.log('User logged in');
    } else {
      // ถ้าสถานะการตอบสนองไม่เป็น 200 OK
      // ผู้ใช้ยังไม่ได้ลงชื่อเข้าใช้หรือมีข้อผิดพลาด
      console.log('User not logged in');
    }
  })
  .catch(error => {
    console.error('Error checking login status:', error);
  });
}
*/

// เมื่อผู้ใช้เข้าสู่ระบบ
function mockLogin() {
  localStorage.setItem('isLoggedIn', 'true');
}

// เมื่อผู้ใช้ออกจากระบบ
function mockLogout() {
  localStorage.removeItem('isLoggedIn');
}

// ตรวจสอบสถานะการเข้าสู่ระบบ
function checkLoginStatus() {
  var isLoggedIn = localStorage.getItem('isLoggedIn');
  return isLoggedIn === 'true';
}

// เรียกใช้งานฟังก์ชั่นเพื่อตรวจสอบสถานะการเข้าสู่ระบบ
console.log(checkLoginStatus()); // แสดงผลลัพธ์ true หรือ false ตามสถานะการเข้าสู่ระบบ

// ทำการเข้าสู่ระบบเพื่อทดสอบ
mockLogin();
console.log(checkLoginStatus()); // แสดงผลลัพธ์ true เนื่องจากตอนนี้ผู้ใช้เข้าสู่ระบบ

// ทำการออกจากระบบเพื่อทดสอบ
mockLogout();
//console.log(checkLoginStatus()); // แสดงผลลัพธ์ false เนื่องจากตอนนี้ผู้ใช้ออกจากระบบ


// สร้าง div สำหรับแสดงสถานะการเข้าสู่ระบบ
function createLoginStatusElement() {
    var loginStatusElement = document.createElement('div');
    loginStatusElement.id = 'login-status';
    loginStatusElement.textContent = 'Not logged in'; // สถานะเริ่มต้นเป็น not logged in

    // เพิ่มสไตล์ให้กับ Element
    loginStatusElement.style.position = 'fixed';
    loginStatusElement.style.top = '20px';
    loginStatusElement.style.right = '320px';
    loginStatusElement.style.backgroundColor = '#FF3333';
    loginStatusElement.style.color = '#ffdd00';
    loginStatusElement.style.padding = '10px';
    loginStatusElement.style.borderRadius = '5px';
    loginStatusElement.style.zIndex = '9999';

    return loginStatusElement;
}

// แสดงสถานะการเข้าสู่ระบบ
function showLoginStatus(isLoggedIn) {
    var loginStatusElement = document.getElementById('login-status');
    if (!loginStatusElement) {
        loginStatusElement = createLoginStatusElement();
        document.body.appendChild(loginStatusElement);
    }

    // อัปเดตข้อความสถานะ
    loginStatusElement.textContent = isLoggedIn ? 'Logged in' : 'Not logged in';
}

// ตรวจสอบสถานะการเข้าสู่ระบบ
function checkLoginStatus() {
    var isLoggedIn = localStorage.getItem('isLoggedIn');
    return isLoggedIn === 'true';
}

// แสดงสถานะการเข้าสู่ระบบเมื่อหน้าเว็บโหลดเสร็จสมบูรณ์
window.addEventListener('load', function() {
    var isLoggedIn = checkLoginStatus();
    showLoginStatus(isLoggedIn);
});




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
