// hearts.js
document.body.onclick = function(e) {
    var heartDiv = document.createElement('div');
    heartDiv.className = 'heart';

    // 随机化心形的大小
    var size = Math.random() * 20 + 10;
    heartDiv.style.width = size + 'px';
    heartDiv.style.height = size + 'px';
    heartDiv.style.left = e.clientX - size / 2 + 'px';
    heartDiv.style.top = e.clientY - size / 2 + 'px';

    document.body.appendChild(heartDiv);

    // 心形上升动画
    var pos = 0;
    var step = setInterval(fly, 10);

    function fly() {
        if (++pos >= window.innerHeight) {
            clearInterval(step);
            heartDiv.parentNode.removeChild(heartDiv);
        } else {
            heartDiv.style.top = -pos + 'px';
            heartDiv.style.opacity = 1 - pos / window.innerHeight;
        }
    }
};