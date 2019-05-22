
class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.images = document.querySelectorAll('.carousel img')
        this.imagesmap = Array.from(this.images)
        this.current = this.images[0];
        this.current.style.display = 'inline-block';
        this.carousel.addEventListener('click', () => {this.selectArrow()});
    }
    selectArrow() {
        
        if (this.carousel.classList.contains('left-button')) {
            console.log('leftbutton');
            this.current.style.display = 'none';
            this.imagesmap.unshift(this.imagesmap.pop());
            this.current = this.imagesmap[0]
            this.current.style.display = 'inline-block';
        }
        else if (this.carousel.classList.contains('right-button')) {
            console.log('rightbutton')
            this.current.style.display = 'none';
            this.imagesmap.push(this.imagesmap.shift());
            this.current = this.imagesmap[0];
            this.current.style.display = 'inline-block';
        };
    }
}

let carousel = document.querySelectorAll('.carousel, .left-button, .right-button');
carousel.forEach(item => new Carousel(item));