
const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

document.addEventListener("DOMContentLoaded", ()=> {
    fetchData();
})

/*items.addEventListener('click', e => {
    addCarrito(e)
})*/

const fetchData = async () => {
    try {
        const res = await fetch('archivo.json')
        const data = await res.json()
        //console.log(data)
        mostarCards(data)
    }catch (error) {
        console.log(error)
    }
}

const mostarCards = data => {
    console.log(data)
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.articulo
       templateCard.querySelector('hp').textContent = producto.precios
        templateCard.querySelector('img').getAttribute("src", producto.url)
        
       //const clone = templateCard.cloneNone(true);
        fragment.appendChild(clone);
    })
    items.appendChild(fragment)
}

/*const addCarrito = e => {
    console.log(e.target)
}*/

