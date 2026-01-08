const users = [
  { username: "student1", password: "1234", name: "طالب 1", rank: 1, group: "A" }
];

const sidebar = document.getElementById("sidebar");

menuBtn.onclick = () => sidebar.classList.toggle("open");
themeToggle.onclick = () => document.body.classList.toggle("dark");

function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  sidebar.classList.remove("open");
}

function toast(msg) {
  const t = document.getElementById("toast");
  t.innerText = msg;
  t.style.display = "block";
  setTimeout(() => t.style.display = "none", 3000);
}

/* Login + حفظ الجلسة */
function login() {
  const u = username.value;
  const p = password.value;
  const user = users.find(x => x.username === u && x.password === p);

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    afterLogin(user);
  } else toast("بيانات غير صحيحة");
}

function afterLogin(user) {
  toast("نورت المنصة 🌟");
  showSection("lessons");
  menuItems.innerHTML = `
    <li onclick="showSection('lessons')">الحصص</li>
    <li onclick="showSection('exams')">الاختبارات</li>
    <li onclick="showSection('leaderboard')">الصدارة</li>
    <li onclick="showSection('profile')">الحساب</li>
  `;
  profileData.innerHTML = `
    الاسم: ${user.name}<br>
    الترتيب: ${user.rank}<br>
    المجموعة: ${user.group}<br>
    السنة الدراسية: الصف الثالث الثانوي
  `;
}

/* Restore session */
const saved = localStorage.getItem("user");
if (saved) afterLogin(JSON.parse(saved));

function openLesson() {
  toast("عاش يا بطل 💪");
  videoBox.innerHTML = `
    <iframe width="100%" height="315"
    src="https://www.youtube.com/embed/VIDEO_ID"
    allowfullscreen></iframe>`;
}

function openExam() {
  toast("بالتوفيق في الامتحان ✨");
  window.open("https://forms.microsoft.com", "_blank");
}
