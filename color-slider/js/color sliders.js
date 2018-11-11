//color slider start

//綁定標籤
var body = document.body,
    r = document.querySelector('#r'),
    g = document.querySelector('#g'),
    b = document.querySelector('#b'),
    r_out = document.querySelector('#r_out'),
    g_out = document.querySelector('#g_out'),
    b_out = document.querySelector('#b_out'),
    hex_out = document.querySelector('#hex'),
    fontColor = document.querySelector('.title h1'),
    fontback = document.querySelector('.title');

//綁定數值

function setColor(){
  var r_hex = parseInt(r.value, 10).toString(16),
      g_hex = parseInt(g.value, 10).toString(16),
      b_hex = parseInt(b.value, 10).toString(16),
      hex = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex);
  body.style.backgroundColor = hex;
  fontColor.style.color = hex;
  hex_out.value = hex;
  hex_out.style.color = hex;
}

setColor();

function pad(n){
  return (n.length<2) ? "0"+n : n;
}


//監聽
r.addEventListener('change', function() {
  setColor();
  r_out.value = r.value;
}, false);

r.addEventListener('input', function() {
  setColor();
  r_out.value = r.value;
}, false);

g.addEventListener('change', function() {
  setColor();
  g_out.value = g.value;
}, false);

g.addEventListener('input', function() {
  setColor();
  g_out.value = g.value;
}, false);

b.addEventListener('change', function() {
  setColor();
  b_out.value = b.value;
}, false);

b.addEventListener('input', function() {
  setColor();
  b_out.value = b.value;
}, false);

//color slider end

//localstorage start

//綁定
var list = document.querySelector('.list');
// var sendData = document.querySelector('.send');
var data = JSON.parse(localStorage.getItem('listData')) || [];

//監聽與更新
hex_out.addEventListener('click',addData,false);
list.addEventListener('click',toggleDone,false);
updateList(data);


//加入列表,並徒步更新網頁與 localstorage
function addData(e){
  e.preventDefault();
  var r_hex = parseInt(r.value, 10).toString(16),
      g_hex = parseInt(g.value, 10).toString(16),
      b_hex = parseInt(b.value, 10).toString(16),
      hex = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex);
  
  var todo = {content: hex}
  
  data.push(todo);
  updateList(data);
  localStorage.setItem('listData',JSON.stringify(data));
}

//更新網頁內容
function updateList(items){
  
  str =''
  var len = items.length;
  for (var i=0 ; len>i ; i++){
    str += '<li><span style="color:' + items[i].content + '"><a href="#" data-index=' + i + '/>X</a>' + items[i].content + '</span></li>'
    
  }
  list.innerHTML = str;
}

//刪除代辦事項
function toggleDone(e){
  e.preventDefault();
  if(e.target.tagName !== 'A'){return};
  var index = e.target.dataset.index;
  data.splice(index , 1);
  localStorage.setItem('listData',JSON.stringify(data));
  updateList(data);
}

//localstorage end


