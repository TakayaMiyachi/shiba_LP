const hoge = () => {
  const footer = document.getElementById('js_footer');
  footer.nextElementSibling.style.display = "none";
}
window.setTimeout(hoge,200);