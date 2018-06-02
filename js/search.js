function jdy(data) {
  var search_text = document.getElementById('search_text');
  var search = document.getElementById('search');
  search.setAttribute('href', 'http://www.baidu.com/s?wd=' + search_text.value + '&' + new Date().getTime());
  search.setAttribute('target', '_blank');
  console.log(search_text.value);
}
window.onload = function () {
  var search_text = document.getElementById('search_text');
  var search_container = document.getElementById('search_container');
  search_text.onkeyup = function () {
    if (this.value != '') {
      var script = document.createElement('script');
      script.src = 'http://suggestion.baidu.com/su?wd=' + this.value + '&cb=jdy' + '&' + new Date().getTime();
      document.body.appendChild(script);
    }
  }
  var search = document.getElementById('search');
  search.onclick = function () {
    search_text.value = '';
  }
}
function addClassList() {
  var search = document.getElementById('search');
  search_container.classList.toggle('search_');
}
function removeClassList() {
  var search = document.getElementById('search');
  search_container.classList.toggle('search_');
}
