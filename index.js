// task:  change background color by page scrolling.

// build diapazone of intersections for backgroundObserver treshold
function buildTresholdList() {
  const thresholds = [];
  let steps = 20;
  for (let i = 1.0; i <= steps; i++) {
    let ratio = i / steps;
    thresholds.push(ratio);
  }
  return thresholds;
}

const backgroundObserver = new IntersectionObserver((entries) => {
  let prevRatio = 0.0
  return function () {
    entries.forEach(entry => {
      let curRatio = entry.intersectionRatio;
      curRatio > prevRatio ? entry.target.style.background = `rgba(255, 135, 135,${curRatio})` : entry.target.style.background = `rgba(135, 135, 255,${curRatio})`
      prevRatio = curRatio;
    })
  }()
}, {
  threshold: buildTresholdList()
})



window.addEventListener('load', (e) => {
  backgroundObserver.observe(document.querySelector('.block-fade'));
  }
)
