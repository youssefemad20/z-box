// بيانات عشوائية للداشبورد
const users = [
  { name: 'Omar Khaled', waste: 120 },
  { name: 'Sara Adel', waste: 110 },
  { name: 'Youssef Gamal', waste: 98 },
  { name: 'Mona Fathy', waste: 87 },
  { name: 'Ahmed Samir', waste: 80 },
  { name: 'Laila Mostafa', waste: 75 },
  { name: 'Karim Nabil', waste: 70 },
  { name: 'Hana Mohamed', waste: 65 },
  { name: 'Tamer Ehab', waste: 60 },
  { name: 'Nourhan Tarek', waste: 55 }
];


function fillDashboard() {
  const tbody = document.getElementById('dashboard-body');
  if (!tbody) return;
  users.forEach((user, i) => {
    const tr = document.createElement('tr');
    if (i === 0) tr.classList.add('highlight');
    tr.innerHTML = `<td>${i + 1}</td><td>${user.name}</td><td>${user.waste}</td>`;
    tbody.appendChild(tr);
  });
}


function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 80;
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);
document.addEventListener('DOMContentLoaded', () => {
  fillDashboard();
  
  document.querySelectorAll('section, .card, .card-item').forEach(el => {
    if (el) el.classList.add('reveal');
  });
  revealOnScroll();

  // تأثير glow على الكروت إذا وجدت
  document.querySelectorAll('.card, .card-item').forEach(card => {
    if (card) {
      card.addEventListener('mouseenter', () => card.classList.add('card-glow'));
      card.addEventListener('mouseleave', () => card.classList.remove('card-glow'));
    }
  });

  // تأثير عند الضغط على الأزرار إذا وجدت
  document.querySelectorAll('button').forEach(btn => {
    if (btn) {
      btn.addEventListener('mousedown', () => btn.classList.add('active-effect'));
      btn.addEventListener('mouseup', () => btn.classList.remove('active-effect'));
      btn.addEventListener('mouseleave', () => btn.classList.remove('active-effect'));
    }
  });

  // أضف bounce لزر Explore لجذب الانتباه
  const exploreBtn = document.querySelector('.boton-elegante[href="#services"]');
  if (exploreBtn) {
    exploreBtn.classList.add('bounce');
  }
}); 