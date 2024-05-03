function sliderFunc() {
    let sliderBox = document.querySelector('.slider');
    let tapToRightBtn = document.querySelector('.btn');
    let index = 0;
    sliderBox.style.width = '500px';
    sliderBox.style.left = '0px';
  
    function sliderNext() {
      setTimeout(() => {
        index++;
        let child = sliderBox.querySelector(`div:nth-child(${index})`);
        let cloneNode = child .cloneNode(true);
        sliderBox.style.width = `${(5 + index) * 100}px`;
        sliderBox.appendChild(cloneNode);
      }, 300);
      // clone and move the element to bottom
      let currentLeftPosition = sliderBox.style.left ? parseFloat(sliderBox.style.left.replace('px', '')) : 0;
      let nextLeftPosition = currentLeftPosition - 100;
      sliderBox.style.left = `${nextLeftPosition}px`;
  
    }
    tapToRightBtn.addEventListener('click', sliderNext);
  }
  sliderFunc();