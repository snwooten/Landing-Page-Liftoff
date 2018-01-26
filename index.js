const header = document.getElementsByTagName("header")[0]
const logo = document.getElementById("start-logo")

window.addEventListener("scroll", function() {
 const scrollPosition = window.scrollY;
 if (scrollPosition > 90) {
  header.classList.add("active");
 } else {
  header.classList.remove("active");
 }
})

const visibleImgs = document.querySelectorAll(".carousel-image");
const visibleImgsArr = Array.prototype.slice.call(visibleImgs, 0);
console.log(visibleImgsArr)

  let counter = 0;
function changeImgClasses(arr) {
      if (counter === arr.length - 1) {
        arr[counter].classList.add("hidden");
        counter = 0
        arr[counter].classList.remove("hidden");
      } else {
          arr[counter].classList.add("hidden");
          counter++
          arr[counter].classList.remove("hidden");
      }
  }


setInterval(() => {changeImgClasses(visibleImgsArr)}, 5000);

const sections = document.getElementsByTagName('section')
const sectionArr = Array.prototype.slice.call(sections, 0);
console.log("sectionArr", sectionArr);

function evaluateSection(sectionArr) {
  sectionArr.forEach(x => {
    const boundingRect = x.getBoundingClientRect();
    if (boundingRect.top < window.innerHeight) {
      x.classList.add('active');
      console.log(x.classList, x.id);
    }
    if (boundingRect.top < window.innerHeight && boundingRect.bottom > 0) {
      x.classList.remove('active');
    }
  })
}

window.addEventListener("scroll", () => {evaluateSection(sectionArr)});
