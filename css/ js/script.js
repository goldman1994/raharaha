// مثال: وقتی فرم ارسال شد، از ارسال واقعی جلوگیری و پیام نشان بده
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('پیام شما با موفقیت ارسال شد!');
      form.reset();
    });
  }
});
