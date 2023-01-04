class slider {
    slideIndex = 1;
    
    constructor(options) {
        this.options = options;
        this.intialStuff();

        this.createNextAndPrevBtns()
        this.createDots();

        this.showSlides(1);
    }


    intialStuff() {
        let { el : sliderElement , slideClass , auto} = this.options;

        if(! sliderElement ) throw Error('slider element is not exists');
        Number.isInteger(auto) ? this.auto = auto :  this.auto = 0;

        this.sliders = [...sliderElement.children].filter(elm => elm.classList.contains(slideClass))
    }

    createNextAndPrevBtns(){
        let {el : sliderElement }=this.options;
    }

    createDots(){

    }
    showSlides(){
        
    }
}