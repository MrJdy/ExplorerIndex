window.onload = function () {
  var door = true;
  var google = document.getElementById('google');
  var google_btn = document.getElementById('google_btn');
  var baidu = document.getElementById('baidu');
  var baidu_btn = document.getElementById('baidu_btn');
  var qihu = document.getElementById('qihu');
  var qihu_btn = document.getElementById('qihu_btn');
  var sougou = document.getElementById('sougou');
  var sougou_btn = document.getElementById('sougou_btn');
  var bing = document.getElementById('bing');
  var bing_btn = document.getElementById('bing_btn');
  var yahoo = document.getElementById('yahoo');
  var yahoo_btn = document.getElementById('yahoo_btn');
  var select = document.getElementById('select');
  var select = document.getElementById('select');
  var dialog = document.getElementById('dialog');
  select.addEventListener('click', (e) => {
    if (door) {
      select_img.style.transform = 'rotateX(' + 180 + 'deg)';
      dialog.style.display = 'block';
      door = false;
    } else {
      select_img.style.transform = 'rotateX(' + 0 + 'deg)';
      dialog.style.display = 'none';
      door = true;
    }
  });
  dialog.onclick = () => {
    select_img.style.transform = 'rotate(' + 0 + 'deg)';
    dialog.style.display = 'none';
  }
  baidu_btn.addEventListener('click', () => {
    baidu.style.display = 'block';
    google.style.display = 'none';
    qihu.style.display = 'none';
    sougou.style.display = 'none';
    bing.style.display = 'none';
    yahoo.style.display = 'none';

  });
  google_btn.addEventListener('click', () => {
    baidu.style.display = 'none';
    google.style.display = 'block';
    qihu.style.display = 'none';
    sougou.style.display = 'none';
    bing.style.display = 'none';
    yahoo.style.display = 'none';
  });
  qihu_btn.addEventListener('click', () => {
    baidu.style.display = 'none';
    google.style.display = 'none';
    qihu.style.display = 'block';
    sougou.style.display = 'none';
    bing.style.display = 'none';
    yahoo.style.display = 'none';
  });
  sougou_btn.addEventListener('click', () => {
    baidu.style.display = 'none';
    google.style.display = 'none';
    qihu.style.display = 'none';
    sougou.style.display = 'block';
    bing.style.display = 'none';
    yahoo.style.display = 'none';
  });
  bing_btn.addEventListener('click', () => {
    baidu.style.display = 'none';
    google.style.display = 'none';
    qihu.style.display = 'none';
    sougou.style.display = 'none';
    bing.style.display = 'block';
    yahoo.style.display = 'none';
  });
  yahoo_btn.addEventListener('click', () => {
    baidu.style.display = 'none';
    google.style.display = 'none';
    qihu.style.display = 'none';
    sougou.style.display = 'none';
    bing.style.display = 'none';
    yahoo.style.display = 'block';
  });
  google.onkeyup = function (ev) {
    if (ev.keyCode === 13) {
      window.open('https://www.google.com/search?q=' + this.value + '&' + new Date().getTime(), '_blank');
      this.value = '';
    }
  }
  baidu.onkeyup = function (ev) {
    if (ev.keyCode === 13) {
      window.open('https://www.baidu.com/s?wd=' + this.value + '&' + new Date().getTime(), '_blank');
      this.value = '';
    }
  }
  qihu.onkeyup = function (ev) {
    if (ev.keyCode === 13) {
      window.open('https://www.so.com/s?q=' + this.value + '&' + new Date().getTime(), '_blank');
      this.value = '';
    }
  }
  sougou.onkeyup = function (ev) {
    if (ev.keyCode === 13) {
      window.open('https://www.sogou.com/sogou?query=' + this.value + '&' + new Date().getTime(), '_blank');
      this.value = '';
    }
  }
  bing.onkeyup = function (ev) {
    if (ev.keyCode === 13) {
      window.open('https://cn.bing.com/search?q=' + this.value + '&' + new Date().getTime(), '_blank');
      this.value = '';
    }
  }
  yahoo.onkeyup = function (ev) {
    if (ev.keyCode === 13) {
      window.open('https://search.yahoo.com/search?q=' + this.value + '&' + new Date().getTime(), '_blank');
      this.value = '';
    }
  }
}