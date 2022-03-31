let DATA = null;
let ServesesData = null;


$(document).ready(function(){
    $('.header-burger').click(function(){
        $('.header-burger,.main-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.learn-more').click(function(){
        window.location.href = $(this).attr('url');
    });

    $('.menu-link').click(function(e){
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top}, 1000);
        e.preventDefault();
        $('.header-burger,.main-menu').removeClass('active');
        $('body').removeClass('lock');
    });
    $('.mail').click(function(){
        let mailRegular = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let val = $('.input-mail').val();
        if(val != '' && mailRegular.test(val) == true){
            alert('Waiting our Letter:)');
            $('.input-mail').val('');
            $('.input-mail').css({'border-color':'rgba(143, 149, 165, 1)'});
        }else{
            alert('OMG Facepalm!');
            $('.input-mail').css({'border-color':'red'});
        }
    });



    
   $.ajax({
        url:'js/dataOf.json',
        type:'POST',
        dataType:'json',

        success: function(data){
            DATA = data;
            for(let i = 0; i < DATA.length; i++){
                ServesesData = DATA[i].Serveses;
            };
            for(let i = 0; i < ServesesData.length; i++){
                $('.priccing').append(`
                <div class = "item ${ServesesData[i].name}">
                    <div class="item-image">
                        <img src = "${ServesesData[i].image}" alt = "${ServesesData[i].name}">
                    </div>
                    <h3>${ServesesData[i].name}</h3>
                    <p>${ServesesData[i].textAbout} <p/></img>
                    <span>${ServesesData[i].price} per month<span>
                </div>`);
            };
        
        },
        error: function(error){
            console.log(error);
        }

   });
    
});
