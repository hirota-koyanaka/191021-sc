// //イベントバブリング

// document.getElementById('outer').addEventListener('click', function () {
//   alert('スカイブルー')
// })

// document.getElementById('inner').addEventListener('click', function (e) {
//   alert('オレンジ')
//   e.stopPropagation()
// })

// //スライドショー

window.addEventListener('load', function)
const slideItems = document.getElementsByClassName('slide-item')

const maxSlideNum = slideItems.length - 1
let activeNum = 0
const intervalTime = 2000

slideItems[0].classList.add('active', 'zoom')

setInterval(function () {
  const currentNum = activeNum

  slideItems[currentNum].classList.remove('active')
  setTimeout(function () {
    slideItems[currentNum].classList

    slideItems[activeNum].classList.remove('active')
    activeNum = activeNum === maxSlideNum ? 0 : activeNum + 1
    // if (activeNum === maxSlideNum) {
    if (activeNum === maxSlideNum) {

    }

  }
  slideItems[activeNum].classList.add('active')
}, intervalTime)

