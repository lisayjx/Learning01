$(function () {
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui() //让滚动条在最底部




    //----------------------------------------------
    // 1.将用户输入的内容渲染到聊天窗口

    $('.input_sub').click(function () {
        //获取用户输入的内容
        let $text = $('.input_txt').val().trim()
        //判断用户是否输入为空
        if ($text.length <= 0) {
            return $('.input_txt').val('')//清空
        }
        //将用户输入的内容渲染到聊天窗口
        $('.talk_list').append(`
        <li class="right_word">
          <img src="img/person02.png" /> <span>${$text}</span>
        </li>
        `)
        //让滚动条在最下面
        resetui()
        //清空输入框内容
        $('.input_txt').val('')
    })
})