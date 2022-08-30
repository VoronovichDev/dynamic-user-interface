const container = document.querySelector('.container')

const slides = document.getElementById('slides')
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

const dots = document.getElementById('dots')

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