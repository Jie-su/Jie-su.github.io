function filterByAttribute(attribute, value) {
    let items = document.querySelectorAll('.publications .bibliography li');

    items.forEach(item => {
        if (item.getAttribute('data-' + attribute) == value) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// 默认显示 selected 的内容
window.onload = function() {
    filterByAttribute('selected', 'true');
}
