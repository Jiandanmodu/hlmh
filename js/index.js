$(function() {
    /*轮播图数据请求*/
    $.ajax({
        url: 'http://127.0.0.1:9091/api/getlunbo',
        dataType: 'json',
        success: function(data) {
            $('#slider').append(template('slider-template', data));
            var mySwiper = new Swiper('.swiper-container', {
                loop: true,
                autoplay: 3000
            });
        }
    });

    /*tab栏数据请求*/
    $.ajax({
        url: 'http://127.0.0.1:9091/api/gethometab/1',
        dataType: 'json',
        success: function(data) {
            $('#body').append(template('body-template', data));
        }
    });
    /*tab栏点击切换数据请求*/
    $('.tab-list').on('click', '.tab-item', function() {
        /*改变样式*/
        $('.tab-item').removeClass('active');
        $(this).addClass('active');
        /*获取type值*/
        var type = $(this).attr('tabType')
        var tabUrl = 'http://127.0.0.1:9091/api/gethometab/' + type;
        /*请求数据*/
        $.ajax({
            url: tabUrl,
            dataType: 'json',
            success: function(data) {
                /*清空main里的内容*/
                $('#body').html('');
                $('#body').append(template('body-template', data));
            }
        });
    });
    /*侧栏按钮点击*/
    $('.sidebtn').on('touchstart', function() {
        $('#action').css('left', '0');
        $('#cover').css('display', 'block');
        $('#hlmh').css('transform', 'translateX(60%)');
    });
    /*遮罩层点击*/
    $('#cover').on('touchstart', function() {
        //阻止a因穿透而跳转
        $('a').css('pointer-events', 'none');
        $('#action').css('left', '-60%');
        $('#cover').css('display', 'none');
        $('#hlmh').css('transform', 'translateX(0)');
        //延迟之后释放阻止
        setTimeout(function() { $('a').css('pointer-events', 'all') }, 350)
    });
    /*连载动画点击*/
    $('.serialize').on('touchstart', function() {
        /*请求数据*/
        $.ajax({
            url: 'http://127.0.0.1:9091/api/getlianzai',
            dataType: 'json',
            success: function(data) {
                /*渲染页面*/
                $('#serialize').append(template('serialize-template', data));
                /*显示页面*/
                $('#serialize').css('right', '0');
            }
        });
    });
    $('.serializeBack').on('touchstart', function() {
        $('#serialize').css('right', '-100%');
    });
    /*专题列表点击*/
    $('.subject').on('touchstart', function() {
        /*请求数据*/
        $.ajax({
            url: 'http://127.0.0.1:9091/api/gettopics',
            dataType: 'json',
            success: function(data) {
                /*渲染页面*/
                $('#subject').append(template('subject-template', data));
                /*显示页面*/
                $('#subject').css('right', '0');
            }
        });
    });
    $('.subjectBack').on('touchstart', function() {
        $('#subject').css('right', '-100%');
    });
})