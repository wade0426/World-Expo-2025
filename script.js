document.addEventListener('DOMContentLoaded', () => {
    // --- Header Injection and Logic ---
    const headerHTML = `
    <div class="container">
        <a href="index.html" class="site-title">2025 大阪世博指南</a>
        <button class="hamburger-menu" aria-label="Toggle navigation">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>
        <nav class="main-nav">
            <ul>
                <li><a href="index.html">首頁</a></li>
                <li><a href="osaka-expo-2025-guide-0710-0711.html">行程指南</a></li>
                <li><a href="attendance-guide.html">入場指南</a></li>
                <li><a href="pavilion-reservations.html">展館預約</a></li>
                <li><a href="expo-2025-schedule.html">活動時程</a></li>
            </ul>
        </nav>
    </div>`;

    const headerEl = document.querySelector('header.site-header');
    if (headerEl) {
        headerEl.innerHTML = headerHTML;

        // Hamburger menu functionality
        const hamburger = headerEl.querySelector('.hamburger-menu');
        const nav = headerEl.querySelector('.main-nav');
        if (hamburger && nav) {
            hamburger.addEventListener('click', () => {
                nav.classList.toggle('is-active');
            });
        }

        // Highlight active navigation link
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = headerEl.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage) {
                link.classList.add('active');
            }
        });
    }

    // --- Footer Injection ---
    const footerHTML = `<p>&copy; 2025 非官方大阪世博指南. 所有資訊僅供參考，請以官方網站為準。</p>`;
    const footerEl = document.querySelector('footer.site-footer');
    if (footerEl) {
        footerEl.insertAdjacentHTML('afterbegin', footerHTML);
    }

    // --- Schedule Tab Logic ---
    const scheduleTabsContainer = document.querySelector('.schedule-tabs');
    if (scheduleTabsContainer) {
        const tabs = scheduleTabsContainer.querySelectorAll('.tab-link');
        const contents = document.querySelectorAll('.schedule-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));

                tab.classList.add('active');
                const targetId = tab.dataset.target;
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }
}); 