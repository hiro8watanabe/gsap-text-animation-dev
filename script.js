document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".text");
  const text2 = document.querySelector(".text2");
  let str = text.innerHTML.trim().split("");
  let str2 = text2.innerHTML.trim().split("");

  text.innerHTML = str.reduce((acc, curr) => {
    //渡ってきた半角スペースを&nbsp;へ置換し、再びcへ代入(/\s+/は正規表現の半角スペース)
    curr = curr.replace(/\s+/, "&nbsp;");
    //cにstrの文字が一文字ずつ入ってくる
    return `${acc}<span class="char">${curr}</span>`; //テンプレートリテラルで繋いだものをループさせて次々concatStrへ格納
  }, "");
  text2.innerHTML = str2.reduce((acc, curr) => {
    //渡ってきた半角スペースを&nbsp;へ置換し、再びcへ代入(/\s+/は正規表現の半角スペース)
    curr = curr.replace(/\s+/, "&nbsp;");
    //cにstrの文字が一文字ずつ入ってくる
    return `${acc}<span class="char2">${curr}</span>`; //テンプレートリテラルで繋いだものをループさせて次々concatStrへ格納
  }, "");

  const btn = document.querySelector(".button");
  let char = document.querySelector(".char").className;
  let char2 = document.querySelector(".char2").className;
  btn.addEventListener("click", () => {
    console.log(char);
    gsap
      .timeline()
      .to(`.${char}`, {
        // y: 0 /*テキストのY軸の操作*/,
        opacity: 1,
        stagger: 0.03 /*テキスト間の遅延時間*/,
        delay: 0.2 /*アニメーションのスタートまでの遅延時間*/,
        duration: 0.3 /*アニメーションの時間*/,
      })
      .to(
        `.${char2}`,
        {
          // y: 0 /*テキストのY軸の操作*/,
          opacity: 1,
          stagger: 0.03 /*テキスト間の遅延時間*/,
          delay: 0.2 /*アニメーションのスタートまでの遅延時間*/,
          duration: 0.3 /*アニメーションの時間*/,
        },
        "-=0.8"
      );
  });
});

// console.log(splitText.chars);

// gsap.to(".char", {
//   y: 0 /*テキストのY軸の操作*/,
//   stagger: 0.05 /*テキスト間の遅延時間*/,
//   delay: 0.2 /*アニメーションのスタートまでの遅延時間*/,
//   duration: 0.5 /*アニメーションの時間*/,
//   ease: power2.out /*イージングの設定*/,
// });
