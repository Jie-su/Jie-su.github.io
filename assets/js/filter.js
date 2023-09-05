function filterByTag(tag) {
    // 获取所有的论文条目
    let items = document.querySelectorAll('.publications .bibliography li');
  
    items.forEach(item => {
        // 如果该条目有匹配的data-tag属性，则显示该条目
        if (item.getAttribute('data-tag') == tag) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
  }
  
  // 默认显示 selected 的内容
  window.onload = function() {
    filterByTag('selected');
  }