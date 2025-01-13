
// h2 出现动画 //
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.animation');

    elements.forEach(element => {
        element.style.opacity = '0';
    })

    const observerOptions = {
        root: null, // 视口为根
        threshold: 0.1 // 元素进入视口的 10% 时触发
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 元素进入视口时，添加动画类
                entry.target.classList.add('visible');
            } else {
                // 元素离开视口时，移除动画类
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carouselImages = document.querySelector('.screenshot-container');
    const images = document.querySelectorAll('.screenshot-container img');
    let index = 0;

    // 显示下一张图片
    function showNext() {
        index = (index + 1) % images.length;
        updateCarousel();
    }

    // 显示上一张图片
    function showPrev() {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    }

    // 更新轮播图位置
    function updateCarousel() {
        carouselImages.style.transform = `translateX(-${index * 100}%)`;
    }

    // 自动播放
    const autoPlayInterval = setInterval(showNext, 3000);

    // 绑定按钮事件
    nextButton.addEventListener('click', () => {
        clearInterval(autoPlayInterval); // 点击后重置自动播放
        showNext();
    });

    prevButton.addEventListener('click', () => {
        clearInterval(autoPlayInterval); // 点击后重置自动播放
        showPrev();
    });
});

