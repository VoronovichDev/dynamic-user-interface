const container = document.querySelector('.container')

const slides = document.getElementById('slides')
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

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

let currentClick = 0

// BUTTONS
// event listeners for buttons
nextBtn.addEventListener('click', () => {
   currentClick += 1
   showSlide()
})

prevBtn.addEventListener('click', () => {
   currentClick -= 1
   showSlide()
})


// slide show logic
function showSlide() {
   if (currentClick === 1 || currentClick === -2) {
      clearFrame();
      createSlide('img/pic2.jpg');
      unfillDot(dot1);
      unfillDot(dot3);
      fillDot(dot2);
   } else if (currentClick === 2 || currentClick === -1) {
      clearFrame();
      createSlide('img/pic3.jpg');
      unfillDot(dot1);
      unfillDot(dot2);
      fillDot(dot3);
   }
   else {
      clearFrame();
      createSlide('img/pic1.jpg');
      unfillDot(dot2);
      unfillDot(dot3);
      fillDot(dot1);
      currentClick = 0
   }
}


// clear frame before loading new img
function clearFrame() {
   slides.childElementCount != 0
      ? slides.removeChild(slides.firstChild)
      : null
}


// DOTS
function fillDot(dotId) {
   clearDots(dotId)

   const currentDot = document.createElement('img')
   currentDot.src = 'img/dot.svg'
   currentDot.classList.add('dot')

   dotId.appendChild(currentDot)
}

function unfillDot(dotId) {
   clearDots(dotId)

   const currentDot = document.createElement('img')
   currentDot.src = 'img/empty_dot.svg'
   currentDot.classList.add('dot')

   dotId.appendChild(currentDot)
}

// remove current dot for loading clicked one
function clearDots(dotId) {
   while (dotId.firstChild) {
      dotId.removeChild(dotId.firstChild);
   }
}

// event listeners for dots
dot1.addEventListener('click', (e) => {
   currentClick = 0;

   clearFrame();

   createSlide('img/pic1.jpg');

   unfillDot(dot3);
   unfillDot(dot2);
   fillDot(dot1);
})
dot2.addEventListener('click', (e) => {
   currentClick = 1;

   clearFrame();

   createSlide('img/pic2.jpg');

   unfillDot(dot3);
   unfillDot(dot1);
   fillDot(dot2);
})
dot3.addEventListener('click', (e) => {
   currentClick = 2;

   clearFrame();

   createSlide('img/pic3.jpg');

   unfillDot(dot1);
   unfillDot(dot2);
   fillDot(dot3);
})

// automatic slide change 
setInterval(function () { nextBtn.click() }, 5000);