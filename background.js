// background.js

// เมื่อ Chrome Extension ถูกติดตั้ง
chrome.runtime.onInstalled.addListener(function() {
  console.log('Extension ได้ถูกติดตั้งแล้ว');
});

// เมื่อมีการเปิดหน้าเว็บใหม่
chrome.tabs.onCreated.addListener(function(tab) {
  console.log('เปิดหน้าเว็บใหม่:', tab.url);
});

// เมื่อมีการเปิดหน้าเว็บ
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    console.log('โหลดเสร็จสมบูรณ์:', tab.url);
  }
});

// เมื่อมีการคลิกที่ไอคอนของ Extension
chrome.action.onClicked.addListener(function(tab) {
  console.log('คลิกที่ไอคอนของ Extension');
  // ทำอะไรสักอย่างเมื่อคลิกที่ไอคอนของ Extension
  updateStatus();
});


chrome.action.onClicked.addListener(function(tab) {
    // ดึงข้อมูลจาก storage
    chrome.storage.local.get('isLoggedIn', function(data) {
        var isLoggedIn = data.isLoggedIn;
        // ส่งข้อมูลไปยัง popup
        chrome.action.setPopup({popup: "popup.html"});
        chrome.runtime.sendMessage({ isLoggedIn: isLoggedIn });
    });
});