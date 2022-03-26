<script>
  fetch('https://v1.hitokoto.cn/?c=a&c=b&c=c&c=d&c=h&c=l') # 这里的链接可以根据文档自定义
    .then(response => response.json())
    .then(data => {
      const hitokoto = document.getElementById('hitokoto_text')
      hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
      hitokoto.innerText = data.hitokoto
      const from = document.getElementById('from')
      from.innerText = data.from
    })
    .catch(console.error)
</script>
<p id="hitokoto" style="text-align:center"><b id="hitokoto_text"></b>——
<b id="from"></b></p>
</div>
