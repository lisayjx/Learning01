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
          <img src="img/person02.png"> <span>${$text}</span>
        </li>
        `)
        //让滚动条在最下面
        resetui()
        //清空输入框内容
        $('.input_txt').val('')

        //发起请求，获取聊天内容
        getMsg($text)//同时把用户输入的内容传进去
    })

    //------------获取机器人发送回来的消息--------------------
    // 1.定一个函数 发起ajax请求  形参是text接收用户输入的内容
    // success 函数中的res接收 服务器返回来的值
    //定义了函数在那里调用呢？？在点击发送按钮时候就调用
    function getMsg(text) {    // text形参=用户传进来的数据$text
        //1.发起请求
        $.ajax(
            {
                method: 'GET',
                url: 'http://www.liulongbin.top:3006/api/robot',
                data: {
                    spoken: text////这次请求要携带的数据,把用户输入的消息发送给服务器
                },
                success: function (res) {//请求成功之后的回调函数
                    console.log(res);
                    if (res.message === 'success') {//拿回来的数据里有message属性
                        //拿到服务器响应回来的聊天消息
                        let msg = res.data.info.text
                        // 把返回来的字渲染到页面
                        $('.talk_list').append(`
                        <li class="left_word">
                             <img src="img/person01.png"><span>${msg}</span>
                         </li>
                        `)

                        //重置滚动条
                        resetui()

                        //调用转为语音得函数
                        getVoice(msg)
                    }
                }
            }

        )
    }


    // ----------- 把机器人回复得内容转为语音---------------------------
    // res.voicaUrl中有一个音频属性  如果请求成功，则res.voiceUrl是服务器返回的音频URL地址
    function getVoice(text) {  //得再机器人回复完咱们以后调用这个函数
        $.ajax({
            method: 'GET',
            url: 'http://www.liulongbin.top:3006/api/synthesize',
            data: {
                text: text
            },
            success: function (res) {
                // console.log(res);
                // console.log(res.voiceUrl);
                if (res.status === 200) {//200就表示转成语音成功了
                    //把语音赋值到页面中的audio标签得src中
                    $('.voice').attr('src', res.voiceUrl)
                }
            }
        })
    }

    //---------- 点击回车发送消息-------------------------------------
    $('.input_txt').keyup(function (e) {//为文本输入框绑定键盘谈起事件
        // console.log(e.key); 按了回车会出现Enter
        if (e.key === 'Enter') {
            //调用按钮元素的 click 函数，可以通过编程的形式触发按钮的点击事件
            $('.input_sub').click()//让发布按钮按一下
        }

    })

})