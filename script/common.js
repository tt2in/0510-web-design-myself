$(function(){
    $('.gnb').hover(
        function(){
            $('.gnb ul').stop().slideDown('slow')
        },function(){
            $('.gnb ul').stop().slideUp(500)
        }
    )
    setInterval(function(){
        $('.slider').animate({top:300},
        function(){
            $('.slider a:first').appendTo($('.slider'))
            $('.slider').css('top',0)
        })
    },3000)
    $('.t_title h2').click(function(){
        $('.t_title h2').removeClass('on')
        $(this).addClass('on')
        $('.t_contents ul').css('display','none')
        $('.t_contents ul').eq($(this).index()).css('display','block')
    })
    $('.notice li:first').click(function(){
        $('#modal').addClass('active')
    })
    $('#modal .close').click(function(){
        $('#modal').removeClass('active')
    })
})