const modalFunc = () => {
const modal = document.querySelector('.cart-modal-overlay');
const cart_btn = document.querySelector('#cart-button');

const openModal = () =>{
    modal.classList.add('open')
}
const closeModal = () =>{
    modal.classList.remove('open')
}

cart_btn.addEventListener('click', () => {
    openModal()
})


 modal.addEventListener('click' , (event) => {
    if((event.target.classList.contains('cart-modal-overlay')) || 
    event.target.closet('.crat-modal-header-close')){
       closeModal()
    }
        
 })
 
};


const retsFuncn = () => {
    const container = document.querySelector('#rest-container');
    
    const restArray = [
        {
            id:0,
            title:'Пицца плюс',
            time: 50,
            rating:4.5,
            price: 900,
            type:'Пицца',
            img:"pizza.jpg"
        },
        {
            id:1,
            title:'Тануки',
            time: 50,
            rating:4.5,
            price: 400,
            type:'Пицца',
            img:"tanuki.jpg"
        },
        {
            id:2,
            title:'FoodBand',
            time: 50,
            rating:4.5,
            price: 400,
            type:'Пицца',
            img:"foodband.jpg"
        },
        {
            id:3,
            title:'Жадина-пицца',
            time: 50,
            rating:4.5,
            price: 400,
            type:'Пицца',
            img:"jadina-pizza.jpg"
        },
        {
            id:4,
            title:'Точка еды',
            time: 50,
            rating:4.5,
            price: 400,
            type:'Пицца',
            img:"tochka-jedy.jpg"
        },
        {
            id:5,
            title:'PizzaBurger',
            time: 50,
            rating:4.5,
            price: 400,
            type:'Пицца',
            img:"pizza-burger.jpg"
        },
    ]

    const loading = () => {
        container.innerHTML='<p style= "width:100%; text-align: center;"> Загрузка</p>'
    }
    const renderRest = (array) => {
        container.innerHTML = ''
        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                 <a href="./goods.html?" class="products-card">
    <div class="products-card-image">
        <img src="./foto/rest/${card.img}" alt="Пицца плюс">
    </div>
    <div class="products-card-discription">
        <div class="products-cart-description-row">
            <h4 class="products-card-discription-title">${card.title}</h4>
            <div class="products-card-discription-bage">${card.time} мин</div>
        </div>
        <div class="products-card-discription-root">
            <div class="products-card-discription-info">
                <div class="products-card-discription-info-raiting">
                    <img src="./foto/icons/star.svg" alt="">${card.rating}
                </div>
                <div class="products-card-discription-info-price">
                    От ${card.price}грн
                </div>
                <div class="products-card-discription-info-group">
                    ${card.type}
                </div>
            </div>
        </div>
    </div>
</a>
                `)
        })
    }
    if(container) {
        loading()
    setTimeout(() =>{
        renderRest(restArray)
    }, 1000)
    }
}

retsFuncn()
modalFunc()