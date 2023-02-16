// 文字ボタン押下時の処理
function fg(a, b) {
    document.getElementById("header").style.color = a;
    document.fm.fg.value = a;
    document.fm.fg2.value = b;

    // ヘッダーに設定されたスタイルを取得
    let element = document.getElementById("header");
    let style = window.getComputedStyle(element);
    let value = style.getPropertyValue('color');
    // console.log(value);
    value = value.replace(/rgb\(|\)/g, '').split(',');

    // RGB値を取得
    const red = parseInt(value[0]);
    // console.log(red);
    document.fm.fg_r.value = red;

    const green = parseInt(value[1]);
    // console.log(green);
    document.fm.fg_g.value = green;

    const blue = parseInt(value[2]);
    // console.log(blue);
    document.fm.fg_b.value = blue;

    // 明度を計算する
    // ((R x 299) + (G x 587) + (B x 114)) ÷ 1000
    const fgBrightness = ((red * 299) + (green * 587) + (blue * 114)) / 1000;
    console.log(fgBrightness);
    document.fm.fg_brightness.value = fgBrightness;

    // 明度差の計算
    const elem1 = document.fm.fg_brightness.value;
    const elem2 = document.fm.bg_brightness.value;

    const difference = Math.abs(elem1 - elem2);
    document.fm.brightness_difference.value = difference;

    // 色差の計算

}

// 背景ボタン押下時の処理
function bg(a, b) {
    document.getElementById("header").style.backgroundColor = a;
    document.fm.bg.value = a;
    document.fm.bg2.value = b;

    let element = document.getElementById("header");
    let style = window.getComputedStyle(element);
    let value = style.getPropertyValue('background-color');
    // console.log(value);
    value = value.replace(/rgb\(|\)/g, '').split(',');


    // RGB値を取得
    // const red = value[4] + value[5] + value[6];
    const red = parseInt(value[0]);
    // console.log(red);
    document.fm.bg_r.value = red;

    // const green = value[9] + value[10] + value[11];
    const green = parseInt(value[1]);
    // console.log(green);
    document.fm.bg_g.value = green;

    // const blue = value[14] + value[15] + value[16];
    const blue = parseInt(value[2]);
    // console.log(blue);
    document.fm.bg_b.value = blue;

    // 明度を計算する
    // ((R x 299) + (G x 587) + (B x 114)) ÷ 1000
    const bgBrightness = ((red * 299) + (green * 587) + (blue * 114)) / 1000;
    console.log(bgBrightness);
    document.fm.bg_brightness.value = bgBrightness;

    // 明度差の計算
    const elem1 = document.fm.fg_brightness.value;
    const elem2 = document.fm.bg_brightness.value;

    const difference = Math.abs(elem1 - elem2);
    document.fm.brightness_difference.value = difference;
}