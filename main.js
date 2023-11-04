const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
 
var image = $$('.product img')

$('.product_main.active').style.transform = 'translateX(0px)'

image.forEach(img => {
    img.onclick = function(){
        let imgStyle = this.parentElement.getAttribute('data-key')
        const product = this.parentElement;
        product.style.opacity= '0'
        $('.products').appendChild(product)
        setTimeout(function(){
            product.style.opacity= '1'
        },300)

        $('body').style.color= imgStyle
        let index = this.parentElement.getAttribute('data-count')
        console.log(index)
        $('.product_main.active').style.transform = 'translateX(-1000px)'
        $('.product_main.active').classList.remove('active')
        $$('.product_main').forEach(e => {
            if (e.getAttribute('data-count')== index){
                e.classList.add('active')
                setTimeout(function(){
                    e.style.transform = 'translateX(0px)'
                },200)
            }
            
        });
    }
});

for (const img of image) {
    let imgStyle = img.parentElement.getAttribute('data-key')
    console.log(imgStyle)
    img.style.backgroundColor = imgStyle
}