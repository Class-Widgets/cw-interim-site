// 动态加载 header
fetch('../header.html')
    .then((res) => res.text())
    .then((html) => {
        // 插入 header 内容
        document.getElementById('header').innerHTML = html;

        // 设置当前页面对应的 tab 高亮
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        console.log('Current Page:', currentPage); // 调试用
        const tabs = document.querySelectorAll('.tab');

        tabs.forEach((tab) => {
            const href = tab.getAttribute('href');
            console.log('Tab Href:', href); // 调试用

            if (href) {
                if (currentPage === 'index.html' && href === '/') {
                    tab.classList.add('active');
                    console.log('Active Tab:', tab); // 调试用
                } else if (href === currentPage || href === currentPage.replace('.html', '')
                    || href.replace('/', '') === currentPage.replace('.html', '')) {
                    tab.classList.add('active');
                    console.log('Active Tab:', tab); // 调试用
                }
            }
        });

        // 确保 header 加载完成后，初始化菜单相关逻辑
        tabsMenu();
    })
    .catch((err) => console.error('Error loading header:', err));


// 动态加载 footer
fetch('../footer.html')
    .then((res) => res.text())
    .then((html) => {
        document.getElementById('footer').innerHTML = html;
    });


// 菜单展开功能
function tabsMenu() {
    const tabs = document.querySelector('.tabs');

    // 展开或收起菜单（阻止冒泡）
    function toggleMenu(event) {
        tabs.classList.toggle('active');
        event.stopPropagation();
    }

    // 展开菜单（阻止冒泡）
    tabs.addEventListener('click', toggleMenu);

    // 点击页面其他地方时收起菜单
    document.addEventListener('click', () => {
        if (tabs.classList.contains('active')) {
            tabs.classList.remove('active');
        }
    });
}