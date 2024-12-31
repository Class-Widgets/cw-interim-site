// 动态加载 header
fetch('../header.html')
    .then((res) => res.text())
    .then((html) => {
        document.getElementById('header').innerHTML = html;

        // 确保 DOM 元素加载完成后设置高亮
        setTimeout(() => {
            // 获取当前页面的文件名，默认值为 'index.html'，处理首页特殊情况
            let currentPage = window.location.pathname.split('/').pop() || 'index.html';

            console.log('Current Page:', currentPage); // 调试用
            const tabs = document.querySelectorAll('.tab');

            tabs.forEach((tab) => {
                const href = tab.getAttribute('href');
                console.log('Tab Href:', href); // 调试用

                // 判断 href 是否匹配当前页面
                // 允许两种情况：带 .html 后缀和不带 .html 后缀
                if (href) {
                    // 如果当前页面是首页 (index.html)，则需要检查 href 是否为 '/'
                    if (currentPage === 'index.html' && href === '/') {
                        tab.classList.add('active');
                        console.log('Active Tab:', tab); // 调试用
                    } else if (href === currentPage || href === currentPage.replace('.html', '')) {
                        tab.classList.add('active');
                        console.log('Active Tab:', tab); // 调试用
                    }
                }
            });
        }, 0);
    })
    .catch((err) => console.error('Error loading header:', err));

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