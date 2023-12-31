/* 디스코드 활성화 비활성화 */

function changeDiscord() {
  var button_off = document.getElementById('button_off');
  var button_on = document.getElementById('button_on');

  if (button_off.style.display === 'none') {
    button_off.style.display = 'block';
    button_on.style.display = 'none';
  } else {
    button_off.style.display = 'none';
    button_on.style.display = 'block';
  }
}

/* 프로필 사진 바꾸기 */

document.addEventListener('DOMContentLoaded', () => {
  const circle = document.getElementById('profile');
  const imageInput = document.getElementById('imageInput');
  let isImage = false;

  circle.addEventListener('click', () => {
    imageInput.click();
  });

  imageInput.addEventListener('change', (event) => {
    const selectedFile = event.target.files[0];
    
    if (selectedFile) {
      const imageURL = URL.createObjectURL(selectedFile);
      circle.style.backgroundImage = `url(${imageURL})`;
      circle.style.backgroundSize = "cover";
      circle.style.backgroundPosition = "center";
      circle.innerText = "";
      isImage = true;
    }
  });
});

/* 배경 사진 바꾸기 */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');
  const setting = document.getElementById('setting');

  setting.addEventListener('change', (event) => {
    const selectedFile = event.target.files[0];
    
    if (selectedFile) {
      const imageURL = URL.createObjectURL(selectedFile);
      container.style.backgroundImage = `url(${imageURL})`;
    }
  });
});

/* 나이or성별 선택하기 */

const agePhrases = ["성인", "미자", "비공"];
  let currentAgePhraseIndex = 0;

  const genderPhrases = ["여성", "남성"];
  let currentGenderPhraseIndex = 0;

  function changeAgePhrase() {
    const ageElement = document.getElementById("changingAge");
    currentAgePhraseIndex = (currentAgePhraseIndex + 1) % agePhrases.length;
    ageElement.innerText = agePhrases[currentAgePhraseIndex];
  }

  function changeGenderPhrase() {
    const genderElement = document.getElementById("changingGender");
    currentGenderPhraseIndex = (currentGenderPhraseIndex + 1) % genderPhrases.length;
    genderElement.innerText = genderPhrases[currentGenderPhraseIndex];
  }

/* 하단 선택하기 */

document.getElementById("rank").addEventListener("change", showImage);
document.getElementById("position").addEventListener("change", showImage);
document.getElementById("champion").addEventListener("change", showImage);
document.getElementById("team").addEventListener("change", showImage);
document.getElementById("region").addEventListener("change", showImage);

function showImage() {
  // Get selected values from the dropdowns
  var selectedRank = document.getElementById("rank").value;
  var selectedPosition = document.getElementById("position").value;
  var selectedChampion = document.getElementById("champion").value;
  var selectedTeam = document.getElementById("team").value;
  var selectedRegion = document.getElementById("region").value;

  // Hide all images
  var allImages = document.querySelectorAll("#rank_image img, #position_image img, #champion_image img, #region_image img, #team_image img");
  allImages.forEach(function(image) {
    image.style.display = "none";
  });

  // Show the selected rank image
  var rankImageId = selectedRank + "Image";
  document.getElementById(rankImageId).style.display = "block";

  // Show the selected position image
  var positionImageId = selectedPosition + "Image";
  document.getElementById(positionImageId).style.display = "block";

  // Show the selected champion image
  var championImageId = selectedChampion + "Image";
  document.getElementById(championImageId).style.display = "block";

  // Show the selected region image
  var regionImageId = selectedRegion + "Image";
  document.getElementById(regionImageId).style.display = "block";

  // Show the selected team image
  var teamImageId = selectedTeam + "Image";
  document.getElementById(teamImageId).style.display = "block";
}