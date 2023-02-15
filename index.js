class Dropdown {
    constructor(selector, options){
        this.elem = document.querySelector(selector);
        this.items = options;

        const position1 = this.elem.querySelector('.dropdown__label-pos1');
        const position2 = this.elem.querySelector('.dropdown__label-pos2');
        position1.textContent = this.items[0].label;
        position2.textContent = this.items[1].label;



 
        this.elem.addEventListener('click', event => {
            if (event.target.classList.contains('dropdown__label')) {
                if (this.elem.classList.contains('open')) {
                    this.close()
                } else {
                    this.open()
                }
            } else if (event.target.tagName.toLowerCase()==='li') {
                this.select(event.target.dataset.id)
            }
        })

        const itemsHTML = this.items.map(i =>{
            return `<li data-id="${i.id}">${i.label}</li>`;
        }).join(' ');
        this.elem.querySelector('.dropdown__menu').insertAdjacentHTML('afterbegin', itemsHTML)
    }
    select(id) {
        const item = this.items.find(i => i.id===id)
        const pos1 = this.elem.querySelector('.dropdown__label-pos1');
        const pos2 = this.elem.querySelector('.dropdown__label-pos2');
        pos1.textContent = pos2.textContent;
        pos2.textContent = item.label;

        this.close();
    }

    close () {
        this.elem.classList.remove('open')
    }   
    open () {
        this.elem.classList.add('open')
    }
   
}




new Dropdown ('#dropdown',[
    {label:'Москва',id:'msk'},
    {label:'Cанкт-Петербург',id:'spb'},
    {label:'Екатеринбург',id:'ekb'},
    {label:'Тольятти',id:'tlt'},
    {label:'Самара',id:'smr'},
    {label:'Тагил',id:'tgl'},
    {label:'Орел',id:'orl'},
])