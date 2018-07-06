window.onload = function () {
  var search_text = document.getElementById('search_text');
  search_text.onkeyup = function (ev) {
    if (this.value != '') {
      var script = document.createElement('script');
      script.src = 'http://suggestion.baidu.com/su?wd=' + this.value + '&' + new Date().getTime();
      document.body.appendChild(script);
    }
    if (ev.keyCode === 13) {
      window.open('http://www.baidu.com/s?wd=' + this.value + '&' + new Date().getTime(), '_blank');
      this.value = '';
    }
  }
}
