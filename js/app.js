$(document).ready(function(){
    // tìm tất cả các li có sub-nav và thêm vào nó class has-child
    $('.sub-nav').parent('li').addClass('has-child');
});

const itemsliderbar = document.querySelectorAll(".cartegory-left-li")
itemsliderbar.forEach(function(menu,index){
    menu.addEventListener("click", function(){
        menu.classList.toggle("block")
    })
})

