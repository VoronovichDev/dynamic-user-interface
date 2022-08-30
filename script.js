const container = document.querySelector('.container')

const slides = document.getElementById('slides')
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

const dots = document.getElementById('dots')

const dot1 = document.getElementById('d1');
const dot2 = document.getElementById('d2');
const dot3 = document.getElementById('d3');

let imgCounter = 0;

// create images
function createSlide(img) {
   const imageFrame = document.createElement('div');
   imageFrame.classList.add('image-frame');
   imageFrame.id = imgCounter;
   imgCounter += 1;

   const imageItem = document.createElement('img');
   imageItem.classList.add('image');
   imageItem.src = img;

   imageFrame.appendChild(imageItem);
   slides.appendChild(imageFrame);
}

createSlide('img/pic1.jpg')

// clear frame before loading new img


let currentClick = 0

nextBtn.addEventListener('click', () => {
   currentClick += 1
   if (currentClick === 1 || currentClick === -2) {
      clearFrame()
      createSlide('img/pic2.jpg')
   } else if (currentClick === 2 || currentClick === -1) {
      clearFrame();
      createSlide('img/pic3.jpg');
   }
   else {
      clearFrame();
      createSlide('img/pic1.jpg');
      currentClick = 0
   }
})

prevBtn.addEventListener('click', () => {
   currentClick -= 1
   clearFrame()
   createSlide('img/pic1.jpg')
   if (currentClick === 1 || currentClick === -2) {
      clearFrame()
      createSlide('img/pic2.jpg')
   } else if (currentClick === 2 || currentClick === -1) {
      clearFrame();
      createSlide('img/pic3.jpg');
   }
   else {
      clearFrame();
      createSlide('img/pic1.jpg');
      currentClick = 0
   }
})

function clearFrame() {
   slides.childElementCount != 0
      ? slides.removeChild(slides.firstChild)
      : null
}