const users = [
  { username: "student1", password: "1234", name: "طالب 1" },
  { username: "student2", password: "1234", name: "طالب 2" }
];

const leaders = ["طالب 1", "طالب 2", "طالب 3"];

const sidebar = document.getElementById("sidebar");
document.getElementById("menuBtn").onclick = () => {
  sidebar.classList.toggle("open");
};

document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

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

function login() {
  const u = username.value;
  const p = password.value;
  const user = users.find(x => x.username === u && x.password === p);

  if (user) {
    toast("نورت المنصة 🌟");
    showSection("lessons");
    document.getElementById("menuItems").innerHTML = `
      <li onclick="showSection('lessons')">الحصص</li>
      <li onclick="showSection('exams')">الاختبارات</li>
      <li onclick="showSection('leaderboard')">لوحة الصدارة</li>
      <li onclick="showSection('profile')">الحساب</li>
    `;
    profileName.innerText = `أهلاً ${user.name}`;
    loadLeaders();
  } else {
    toast("بيانات غير صحيحة");
  }
}

function openLesson() {
  videoBox.innerHTML = `
    <p>عاش يا بطل 💪</p>
    <iframe width="100%" height="315"
    src="https://www.youtube.com/embed/VIDEO_ID"
    allowfullscreen></iframe>
  `;
}

function loadLeaders() {
  leaders.forEach(l => {
    const li = document.createElement("li");
    li.innerText = l;
    document.getElementById("leaders").appendChild(li);
  });
}

function openWhatsApp() {
  window.open("https://wa.me/201234567890");
}
