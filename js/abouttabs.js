//About us page tabs

class TabLink {
    constructor(tabElement) {
        this.tabElement = tabElement;
        this.tabData = this.tabElement.dataset.tab;
        if(this.tabData === 'all') {
            this.cards = document.querySelectorAll('.about-card');
        } else {
            this.cards = document.querySelectorAll(`.about-card[data-tab='${this.tabData}']`);
        }
        this.cards = Array.from(this.cards).map(item => new TabCard(item));
        this.tabElement.addEventListener('click', () => {this.selectTab()});
    }
    selectTab() {
        const tabs = document.querySelectorAll('.about-tab');
        tabs.forEach(item => item.classList.remove('about-active-tab'));
        const cards = document.querySelectorAll('.about-card');
        cards.forEach(item => item.getElementsByClassName.display = 'none');
        this.tabElement.classList.add('about-active-tab');
        this.cards.forEach(card => card.selectCard());
    }
}

class TabCard {
    constructor(cardElement){
        this.cardElement = cardElement;
    }
    selectCard(){
        this.cardElement.style.display = 'flex';
    }
}

let tabs = document.querySelectorAll('.about-tab');
tabs.forEach(item => new TabLink(item));
