let selectedActivity = null;
let selectedKrathong = null;

const krathongOptions = [
  "assets/loy-krathong.png",
  "assets/loy-krathong (1).png",
  "assets/loy-krathong (2).png"
];

function selectActivity(activity) {
  selectedActivity = activity;
  alert(`คุณเลือกกิจกรรม: ${activity}`);

  if (activity === "krathong") {
    showKrathongOptions();
  }
}

function showKrathongOptions() {
  const container = document.createElement("div");
  container.className = "krathong-options";
  container.innerHTML = "<h3>เลือกแบบกระทง</h3>";

  krathongOptions.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Krathong";
    img.className = "krathong-img";
    img.onclick = () => {
      selectedKrathong = src;
      alert("คุณเลือกกระทง: " + src);
    };
    container.appendChild(img);
  });

  document.body.appendChild(container);
}

function createKrathong() {
  if (!selectedActivity) {
    alert("กรุณาเลือกกิจกรรมก่อนค่ะ!");
    return;
  }

  if (selectedActivity === "krathong" && !selectedKrathong) {
    alert("กรุณาเลือกแบบกระทงก่อนค่ะ!");
    return;
  }

  let message = `กำลังสร้างกิจกรรม: ${selectedActivity}`;
  if (selectedKrathong) {
    message += `\nโดยใช้กระทง: ${selectedKrathong}`;
  }
  alert(message);
}
