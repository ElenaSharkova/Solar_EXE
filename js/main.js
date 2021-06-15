$(function(){
    
    $('.info-tabs__item').on('click', function (e) {
      e.preventDefault(); //info-tabs__item - это класс в теге ссылки, здесь происходит отмена ссылки.           
      
        $('.info-tabs__item').removeClass('info-tabs__item--active'); // убрали у всех кнопок info-tabs__item свойства css, прописанные в .info-tabs__item--active 
        $(this).addClass('info-tabs__item--active'); //добавили все свойства класса info-tabs__item--active в ту кнопочку, на которую кликнули
        $('.info-tabs__content').removeClass('info-tabs__content--active'); //убрали у всех обладателей класса info-tabs__content все свойства, записанные в info-tabs__content--active
        $($(this).attr('href')).addClass('info-tabs__content--active'); // вытащи мне из элемента, который нажат значение атрибута hreff и добавь ему стили info-tabs__content--active
    });

});