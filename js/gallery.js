"use strict";
function init() {
  (activeId = 0),
    prevButtonNode.addEventListener("click", function () {
      setActiveSlideById(getPrevId());
    }),
    nextButtonNode.addEventListener("click", function () {
      setActiveSlideById(getNextId());
    });
}
function setActiveSlideById(e) {
  var t = activeId;
  (activeId = e),
    slidesNodes[t].classList.remove(ACTIVE_SLIDE_CLASSNAME),
    slidesNodes[activeId].classList.add(ACTIVE_SLIDE_CLASSNAME);
}
function getPrevId() {
  return 0 === activeId ? slidesNodes.length - 1 : activeId - 1;
}
function getNextId() {
  return activeId === slidesNodes.length - 1 ? 0 : activeId + 1;
}
var ACTIVE_SLIDE_CLASSNAME = "gallery__slide_active",
  slidesNodes = Array.from(document.querySelectorAll(".gallery__slide"));
console.log(slidesNodes);
var prevButtonNode = document.querySelector(".gallery__control-prev"),
  nextButtonNode = document.querySelector(".gallery__control-next"),
  activeId = void 0;
init();
