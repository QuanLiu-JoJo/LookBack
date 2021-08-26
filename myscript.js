if (
  localStorage.getItem(`tag_Look_back_for_${window.location.href}`) !== null
) {
  window.addEventListener("load", () => {
    let ele = document.createElement("div");
    ele.classList.add("tip");
    ele.innerHTML = "<span>已定位到上次阅读位置</span>";
    ele.style.display = "block";
    document.body.appendChild(ele);
    setTimeout(() => {
      ele.classList.add("hide");
    }, 1500);
    window.scrollTo(
      0,
      parseInt(
        localStorage.getItem(`tag_Look_back_for_${window.location.href}`)
      )
    );
  });
}

window.addEventListener("unload", function () {
  localStorage.setItem(
    `tag_Look_back_for_${window.location.href}`,
    window.pageYOffset
  );
});
