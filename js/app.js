let init = () => {
    let container = document.getElementsByClassName('jumbo-slider__container')[0],
    slides = document.getElementsByClassName('jumbo-slider__slide'),
    circle = document.getElementsByClassName('jumbo-slider__circle')
    links = document.getElementsByClassName('jumbo-slider__link'),
    navName = document.getElementsByClassName('jumbo-slider__nav'),
    current = 1,
    time = 6000,  
    //add animation class to slide
    slides[0].classList.add('jumbo-slider__slide--active');
    links[current-1].classList.add('jumbo-slider__link--active');
    //update ellipsis and link
    let updateNav = (current) => {
        console.log(`current: ${current}`)
        for (let i = 0; i < slides.length; i++) {
            links[i].classList.remove('jumbo-slider__link--active');
            circle[i].classList.remove('jumbo-slider__circle--filled');
        }
        links[current-1].classList.add('jumbo-slider__link--active');
        circle[current-1].classList.add('jumbo-slider__circle--filled');
    }
    let startSliding = () => {
    
        setInterval(() => {
        //    console.log(`current : ${current}`)
           slides[1].classList.add('jumbo-slider__slide--active')
           slides[0].classList.remove('jumbo-slider__slide--active')
            
           if (current < slides.length){
            current++
            updateNav(current)
           } else {
            current = 1
           }
           container.appendChild(slides[0].cloneNode([true]));
           container.removeChild(slides[0]);
        }, time)
    }
    startSliding();
}
init();
