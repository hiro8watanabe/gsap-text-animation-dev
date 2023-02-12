document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".text");
  let str = text.innerHTML.trim().split("");

  text.innerHTML = str.reduce((acc, curr) => {
    //渡ってきた半角スペースを&nbsp;へ置換し、再びcへ代入(/\s+/は正規表現の半角スペース)
    curr = curr.replace(/\s+/, "&nbsp;");
    //cにstrの文字が一文字ずつ入ってくる
    return `${acc}<span class="char">${curr}</span>`; //テンプレートリテラルで繋いだものをループさせて次々concatStrへ格納
  }, "");

  const btn = document.querySelector(".button");
  let char = document.querySelector(".char").className;
  btn.addEventListener("click", () => {
    console.log(char);
    gsap.to(`.${char}`, {
      y: 0 /*テキストのY軸の操作*/,
      opacity: 1,
      stagger: 0.05 /*テキスト間の遅延時間*/,
      delay: 0.2 /*アニメーションのスタートまでの遅延時間*/,
      duration: 0.5 /*アニメーションの時間*/,
    });
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
