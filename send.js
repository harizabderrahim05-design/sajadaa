// سكريبت إرسال بيانات النموذج إلى Google Apps Script مباشرة من المتصفح

document.getElementById('Order_Form').addEventListener('submit', function(e) {
  e.preventDefault();
  var form = e.target;
  var data = new URLSearchParams(new FormData(form)).toString();

  fetch('https://script.google.com/macros/s/AKfycbzjYIlQI2XEfMMKia32i71HKORURjQMg5Fx5jimLi2R1ywD1lDotu1f6w4UJJDbw3I/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: data
  })
  .then(response => response.text())
  .then(result => {
    // يمكنك هنا عرض رسالة نجاح أو إعادة التوجيه
    alert(result);
    // window.location.href = "thankyou.html";
  })
  .catch(error => {
    // يمكن هنا تسجيل الخطأ في الكونسول فقط بدون إظهار رسالة للمستخدم
    console.error("خطأ أثناء الإرسال:", error);
  });
});
