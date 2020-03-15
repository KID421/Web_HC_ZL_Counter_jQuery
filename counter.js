// each 執行每一個陣列的內容
// attr 取得屬性
$("*").each(function() {
    var number = $(this).attr("data-ct-number");
    var dur = $(this).attr("data-ct-duration");

    // 此元素.動畫(屬性物件，設定物件)
    $(this).animate({
        // 記數：指定數字
        countNum: number
    }, {
        // 時間
        duration: dur,
        // 緩動
        easing: "linear",
        // 每一步
        step: function(now){
            // text() 更新文字
            // Math.floor() 去小數點
            $(this).text(Math.floor(now))
        }
    });
})