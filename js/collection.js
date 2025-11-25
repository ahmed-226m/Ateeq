// Product Data (12 items)
const products = [
    {
        id: 1,
        name: "فستان سهرة ملكي",
        category: "long",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8x8YjH3NpPiysbp24ezxq-KxUyRb6_8DmXracR8A6to9HWrZz4Hib826SjxsaStPmfVbbj6blXku0W5Xnjk_5tsNw1L4alZd6ckAF1TAN5vtIdkvrQGtR2OyRCV_dXs3etoIeiANk_2bKdG28eYEDVoGdEMP3T_asziKpfi75GV8dFJVjeBVxPf-v7VbnneLJiGuTC8pEOsi5kRT32CN0P4Kmggr0c-sQ2h0WLvmevqEa6QOIWmPiLmebzgyVd2XpWpD1TU_QiJ94",
        description: "فستان طويل بتصميم ملكي فاخر، يتميز بتطريز يدوي دقيق وقماش انسيابي يبرز جمال القوام."
    },
    {
        id: 2,
        name: "فستان كلاسيك أسود",
        category: "classic",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3JiO0MP1kSOYhvxhbw3TPBH4oG-D9lJ2iAE5TC3gk_mh8dwtLBXX83z68z8jbr9ljYWznd0N3EJqscflAZKqTgJwolUPwSUxDb2LjzxYWowIOA7dlLMCk603eUoyce5A5C7UARvGq-Z4dPaOW3Ii4yHGmKFxbLJDZdK2sW0-NaDWXGtITJYHoGpsslU0R4w0tOj_MlKbKoX6ALnrfxCfCl4VCyEggeR4jyoCM5CsmCpAj0nP1OY7ZGTjHdb3vYjRmdUKNr8fQMTlS",
        description: "الأناقة الكلاسيكية في أبهى صورها. فستان أسود بسيط ولكنه يخطف الأنظار بتفاصيله الراقية."
    },
    {
        id: 3,
        name: "فستان سهرة قصير",
        category: "short",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAboFXyzlFP98RRqZxIQA8d7rcK9PYydIJLNeXxRz8Efy_L18iqycWqS1sGzFdZfGcQaBZKQ3VsASLtLO_pwT_-GnJmtGPf_tp_QUfbLo_uqThQ3XxkAPeVTV_P63jAAhtLGxGD-APu3f54KJZhfuKT0d1EBYgq0J47I3Zne762W310td4-vEixHRvTt8TQfLQMroucd2GwEKcoLUUiRz1M2oihVqhvqbkA_c5LzNpJUinrteRqU5D1Qje0ugLAhjlYoxsFGOnaXjZR",
        description: "فستان قصير عصري يناسب الحفلات الشبابية، يجمع بين الجرأة والأناقة بتصميم مميز."
    },
    {
        id: 4,
        name: "فستان مخملي طويل",
        category: "long",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7G1vGJp58pDEzZ6FjJaaTPZJVcPDaFKFSnaWJOPEerFtvsRRbCaQo_gQbbRNJ9g-gNZZyP28m2lrolK22jiq6X-vAnb6xTbj40ibJ29LKBexzq46SzHFbIJSr9B3gq_Xo2uinf_rJix6fsTsAMIuyPiYCY3-dat8GrrKC0NPBy6GhPVjfGb2beEmuuwpQO670bbu-ilejbugQWiu6KRu6iuLlpCHCXw8i9Oc4kIYcJ7Yc92NXCsuT2lVvHrwRs43j-haJykmmXvbg",
        description: "لمسة من الفخامة مع قماش المخمل الناعم. فستان طويل يناسب السهرات الشتوية الراقية."
    },
    {
        id: 5,
        name: "فستان كلاسيك مطرز",
        category: "classic",
        image: "../assets/P00994976.jpg",
        description: "تطريزات كلاسيكية تروي قصة من الجمال. فستان يجمع بين أصالة الماضي وحداثة الحاضر."
    },
    {
        id: 6,
        name: "فستان سهرة لامع",
        category: "short",
        image: "../assets/P00927703.jpg",
        description: "تألقي كالنجوم مع هذا الفستان القصير اللامع. خيار مثالي لمن تحب لفت الأنظار."
    },
    {
        id: 7,
        name: "فستان حرير طويل",
        category: "long",
        image: "../assets/P01104118.jpg",
        description: "نعومة الحرير في تصميم انسيابي ساحر. فستان طويل يمنحك إطلالة أنثوية طاغية."
    },
    {
        id: 8,
        name: "فستان فينتيج",
        category: "classic",
        image: "../assets/P01077141.jpg",
        description: "عودة إلى الزمن الجميل مع تصميم فينتيج مميز. لعشاق الذوق الرفيع والمختلف."
    },
    {
        id: 9,
        name: "فستان كوكتيل",
        category: "short",
        image: "../assets/P01026231.jpg",
        description: "فستان كوكتيل أنيق يناسب مختلف المناسبات. تصميم عملي وجذاب في آن واحد."
    },
    {
        id: 10,
        name: "فستان زفاف بسيط",
        category: "long",
        image: "../assets/P01090441.jpg",
        description: "البساطة هي سر الجمال. فستان طويل أبيض يناسب حفلات الزفاف البسيطة أو الخطوبة."
    },
    {
        id: 11,
        name: "فستان سهرة كحلي",
        category: "classic",
        image: "../assets/P00954470.jpg",
        description: "اللون الكحلي الملكي في تصميم كلاسيكي لا يقدُم. خيار آمن وأنيق لكل سيدة."
    },
    {
        id: 12,
        name: "فستان صيفي قصير",
        category: "short",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7G1vGJp58pDEzZ6FjJaaTPZJVcPDaFKFSnaWJOPEerFtvsRRbCaQo_gQbbRNJ9g-gNZZyP28m2lrolK22jiq6X-vAnb6xTbj40ibJ29LKBexzq46SzHFbIJSr9B3gq_Xo2uinf_rJix6fsTsAMIuyPiYCY3-dat8GrrKC0NPBy6GhPVjfGb2beEmuuwpQO670bbu-ilejbugQWiu6KRu6iuLlpCHCXw8i9Oc4kIYcJ7Yc92NXCsuT2lVvHrwRs43j-haJykmmXvbg",
        description: "ألوان مبهجة وتصميم مريح. فستان قصير مثالي لحفلات الصيف والمناسبات النهارية."
    }
];


// State
let currentFilter = 'all';
let searchQuery = '';
let visibleCount = 6;
const itemsPerPage = 6;

// DOM Elements
const productGrid = document.getElementById('productGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    // Filter Buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update filter and reset count
            currentFilter = btn.dataset.filter;
            visibleCount = itemsPerPage;

            renderProducts();
        });
    });

    // Search Input
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        visibleCount = itemsPerPage; // Reset count on search
        renderProducts();
    });

    // Load More Button
    loadMoreBtn.addEventListener('click', () => {
        visibleCount += itemsPerPage;
        renderProducts();
    });
}

// Render Function
function renderProducts() {
    // 1. Filter products
    let filteredProducts = products.filter(product => {
        const matchesFilter = currentFilter === 'all' || product.category === currentFilter;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery);
        return matchesFilter && matchesSearch;
    });

    // 2. Handle No Results
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '';
        noResults.classList.remove('hidden');
        loadMoreBtn.classList.add('hidden');
        return;
    } else {
        noResults.classList.add('hidden');
    }

    // 3. Slice for Pagination
    const visibleProducts = filteredProducts.slice(0, visibleCount);

    // 4. Generate HTML
    productGrid.innerHTML = visibleProducts.map(product => `
        <div class="product-card group">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <button class="product-btn" onclick="alert('تفاصيل المنتج: ${product.name}')">عرض التفاصيل</button>
            </div>
        </div>
    `).join('');

    // 5. Handle Load More Button Visibility
    if (visibleCount >= filteredProducts.length) {
        loadMoreBtn.classList.add('hidden');
    } else {
        loadMoreBtn.classList.remove('hidden');
    }
}

// Helper to translate category names
function getCategoryName(category) {
    switch (category) {
        case 'long': return 'فساتين طويلة';
        case 'short': return 'فساتين قصيرة';
        case 'classic': return 'فساتين كلاسيك';
        default: return '';
    }
}


// Mobile menu toggle (copied from index.html)
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('active');
    }
});