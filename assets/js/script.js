document.addEventListener('DOMContentLoaded', () => {
    // --- Header Injection and Logic ---
    const path = window.location.pathname;
    const isInsidePavilions = path.includes('/pavilions/');
    const prefix = isInsidePavilions ? '../' : '';

    const headerHTML = `
    <div class="container">
        <a href="${prefix}index.html" class="site-title">2025 大阪世博指南</a>
        <button class="hamburger-menu" aria-label="Toggle navigation">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>
        <nav class="main-nav">
            <ul>
                <li><a href="${prefix}index.html">首頁</a></li>
                <li><a href="${prefix}osaka-expo-2025-guide-0710-0711.html">行程指南</a></li>
                <li><a href="${prefix}pavilion-reservations.html">展館預約</a></li>
                <li><a href="${prefix}pavilions/pavilions-directory.html">展館介紹</a></li>
                <li><a href="${prefix}expo-2025-schedule.html">活動時程</a></li>
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
        const currentPagePath = window.location.pathname;
        const navLinks = headerEl.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            // Create a full URL object for comparison to handle relative paths correctly
            const linkUrl = new URL(link.href, window.location.href);
            if (linkUrl.pathname === currentPagePath) {
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