// 視窗元素.捲動 () { 內容 }
// window 網頁視窗
$(window).scroll(function () { 
    // each 執行每一個陣列的內容
    // attr 取得屬性
    $("*").each(function() {

        var windowTop = $(window).scrollTop();  // 視窗高度
        // console.log("視窗高度：" + windowTop);

        var offset = $(this).offset();          // 元素高度
        var top = offset.top;
        // console.log("目前元素的高度：" + top);

        // 如果 視窗高度 > 元素高度 - 值
        if (windowTop > top - 800) {
            var number = $(this).attr("data-ct-number");
            var dur = $(this).attr("data-ct-duration");

            // 此元素.動畫(屬性物件，設定物件)
            $(this).animate({
                // 記數：指定數字
                countNum: number
            }, {
                // 時間：將 "" 字串轉為整數
                duration: parseInt(dur),
                // 緩動
                easing: "linear",
                // 每一步
                step: function(now){
                    // text() 更新文字
                    // Math.floor() 去小數點
                    $(this).text(Math.floor(now))
                }
            });
        }
    });
});


