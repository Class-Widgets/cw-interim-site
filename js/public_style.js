// 动态加载 header
fetch('../header.html')
    .then((res) => res.text())
    .then((html) => {
        document.getElementById('header').innerHTML = html;

        // 设置当前页面的 tab 高亮
        const currentPage = window.location.pathname.split('/').pop(); // 获取当前页面文件名
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach((tab) => {
            if (tab.getAttribute('href') === currentPage) { // 判断当前 tab 是否为当前页面
                tab.classList.add('active'); // 为当前 tab 添加高亮
            }
        });
    });

// 动态加载 footer
fetch('../footer.html')
    .then((res) => res.text())
    .then((html) => {
        document.getElementById('footer').innerHTML = html;
    });

// fetch('footer.html')
//     .then((res) => res.text())
//     .then((html) => {
//         document.getElementById('footer').innerHTML = html;
//     });