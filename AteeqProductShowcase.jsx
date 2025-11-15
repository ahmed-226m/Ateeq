const defaultProducts = [
    {
        id: 1,
        name: 'فستان الملكة',
        description: 'تصميم فاخر بتفاصيل ذهبية',
        category: 'فساتين طويلة',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzC6sKsOMoqokssWOdYlJNSAhvx10V6i3WcXHjr5eZNTb_2D6wCaQZaCVpOL06DZdWbvGRxaMgW7Cq0SWhk5rO13D0O6OrJ6r2X9xt7D_5bz9iIAIVhs6hNANnKeG2H-F9Xt-AV3z1-PHEYYnrKaQDFmOVn51P9Az34UxL9CXUhF9g1HBoilLJaDRluRnokRTcenwXc8HjSo-VDhB0yrEGVT4ruLcK94lIhzyoRSG88zXc2nshAucYoK2YgtI6JmJpBaVTdO6f5fsC'
    },
    {
        id: 2,
        name: 'فستان الأميرة',
        description: 'نعومة فائقة بقصة سندريلا',
        category: 'فساتين كلاسيك',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3JiO0MP1kSOYhvxhbw3TPBH4oG-D9lJ2iAE5TC3gk_mh8dwtLBXX83z68z8jbr9ljYWznd0N3EJqscflAZKqTgJwolUPwSUxDb2LjzxYWowIOA7dlLMCk603eUoyce5A5C7UARvGq-Z4dPaOW3Ii4yHGmKFxbLJDZdK2sW0-NaDWXGtITJYHoGpsslU0R4w0tOj_MlKbKoX6ALnrfxCfCl4VCyEggeR4jyoCM5CsmCpAj0nP1OY7ZGTjHdb3vYjRmdUKNr8fQMTlS'
    },
    {
        id: 3,
        name: 'فستان النجمة',
        description: 'تألقي ببريق لا يضاهى',
        category: 'فساتين قصيرة',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAboFXyzlFP98RRqZxIQA8d7rcK9PYydIJLNeXxRz8Efy_L18iqycWqS1sGzFdZfGcQaBZKQ3VsASLtLO_pwT_-GnJmtGPf_tp_QUfbLo_uqThQ3XxkAPeVTV_P63jAAhtLGxGD-APu3f54KJZhfuKT0d1EBYgq0J47I3Zne762W310td4-vEixHRvTt8TQfLQMroucd2GwEKcoLUUiRz1M2oihVqhvqbkA_c5LzNpJUinrteRqU5D1Qje0ugLAhjlYoxsFGOnaXjZR'
    },
    {
        id: 4,
        name: 'فستان السهرة',
        description: 'أناقة كلاسيكية باللون الكحلي',
        category: 'فساتين طويلة',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7G1vGJp58pDEzZ6FjJaaTPZJVcPDaFKFSnaWJOPEerFtvsRRbCaQo_gQbbRNJ9g-gNZZyP28m2lrolK22jiq6X-vAnb6xTbj40ibJ29LKBexzq46SzHFbIJSr9B3gq_Xo2uinf_rJix6fsTsAMIuyPiYCY3-dat8GrrKC0NPBy6GhPVjfGb2beEmuuwpQO670bbu-ilejbugQWiu6KRu6iuLlpCHCXw8i9Oc4kIYcJ7Yc92NXCsuT2lVvHrwRs43j-haJykmmXvbg'
    },
    {
        id: 5,
        name: 'فستان القمر',
        description: 'فساتين زهري أنيقة وساحرة',
        category: 'فساتين قصيرة',
        image: 'https://placehold.co/400x500/fec89a/ffffff?text=فستان+القمر'
    },
    {
        id: 6,
        name: 'فستان الليل الأنيق',
        description: 'رقي وفخامة لكل مناسبة',
        category: 'فساتين طويلة',
        image: 'https://placehold.co/400x500/1d3557/ffffff?text=فستان+الليل'
    },
    {
        id: 7,
        name: 'فستان الوردة البيضاء',
        description: 'تصميم ناعم يناسب جميع المناسبات',
        category: 'فساتين قصيرة',
        image: 'https://placehold.co/400x500/f1faee/457b9d?text=فستان+الوردة'
    },
    {
        id: 8,
        name: 'فستان الزمرد',
        description: 'فستان أخضر ملكي بقصة مميزة',
        category: 'فساتين طويلة',
        image: 'https://placehold.co/400x500/2a9d8f/ffffff?text=فستان+الزمرد'
    },
    {
        id: 9,
        name: 'فستان الدانتيل',
        description: 'أناقة كلاسيكية لا تبطل موضتها',
        category: 'فساتين كلاسيك',
        image: 'https://placehold.co/400x500/22223b/ffffff?text=فستان+الدانتيل'
    }
];

// Product Card Component
const ProductCard = ({ product, onDetailsClick }) => {
    return (
        <div className="product-card flex flex-col gap-4 pb-3 bg-white dark:bg-background-dark/30 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-accent/20 hover:border-accent/40">
            <div 
                className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover"
                style={{ backgroundImage: `url(${product.image})` }}
                role="img"
                aria-label={product.name}
            />
            <div className="px-4 pb-4 flex flex-col flex-grow">
                <p className="text-text-dark dark:text-text-light text-lg font-bold leading-normal font-serif mb-2">
                    {product.name}
                </p>
                <p className="text-text-dark/70 dark:text-text-light/70 text-sm font-normal leading-normal flex-grow mb-4">
                    {product.description}
                </p>
                <button
                    onClick={() => onDetailsClick(product)}
                    className="mt-auto w-full rounded-md border border-accent text-accent px-4 py-2 text-sm font-bold transition-colors hover:bg-accent hover:text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                >
                    عرض التفاصيل
                </button>
            </div>
        </div>
    );
};

// Filter Buttons Component
const FilterButtons = ({ activeFilter, onFilterChange }) => {
    const filters = [
        { key: 'all', label: 'الكل' },
        { key: 'فساتين طويلة', label: 'فساتين طويلة' },
        { key: 'فساتين قصيرة', label: 'فساتين قصيرة' },
        { key: 'فساتين كلاسيك', label: 'فساتين كلاسيك' }
    ];

    return (
        <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filters.map(filter => (
                <button
                    key={filter.key}
                    onClick={() => onFilterChange(filter.key)}
                    className={`
                        px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300
                        ${activeFilter === filter.key
                            ? 'bg-accent text-primary shadow-lg scale-105'
                            : 'bg-white dark:bg-background-dark/30 text-text-dark dark:text-text-light border border-accent/20 hover:border-accent/40 hover:shadow-md'
                        }
                        focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
                    `}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    );
};

// Search Bar Component
const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="mb-8 max-w-xl mx-auto">
            <div className="relative">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="ابحث عن فستان..."
                    className="w-full px-5 py-3 pr-12 rounded-lg border border-accent/30 bg-white dark:bg-background-dark/30 text-text-dark dark:text-text-light placeholder:text-text-dark/50 dark:placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                    dir="rtl"
                />
                <svg 
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
        </div>
    );
};

// Load More Button Component
const LoadMoreButton = ({ onClick }) => {
    return (
        <div className="text-center mt-12">
            <button
                onClick={onClick}
                className="bg-accent text-primary font-bold py-3 px-10 rounded-lg text-base shadow-md hover:bg-yellow-400 hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
                تحميل المزيد
            </button>
        </div>
    );
};

// Main Component
const AteeqProductShowcase = ({ products = defaultProducts, initialLoadCount = 6 }) => {
    const { useState, useEffect } = React;
    
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');
    const [visibleCount, setVisibleCount] = useState(initialLoadCount);

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = activeFilter === 'all' || product.category === activeFilter;
        return matchesSearch && matchesFilter;
    });

    useEffect(() => {
        setVisibleCount(initialLoadCount);
    }, [searchTerm, activeFilter, initialLoadCount]);

    const visibleProducts = filteredProducts.slice(0, visibleCount);
    const hasMore = visibleCount < filteredProducts.length;

    const handleLoadMore = () => {
        setVisibleCount(prev => Math.min(prev + initialLoadCount, filteredProducts.length));
    };

    const handleDetailsClick = (product) => {
        console.log('Product details clicked:', product);
        alert(`تم النقر على: ${product.name}`);
    };

    return (
        <div className="py-12" dir="rtl">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-serif text-text-dark dark:text-text-light text-3xl sm:text-4xl font-bold text-center mb-8">
                    استكشف المزيد من التصاميم
                </h2>

                <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                <FilterButtons activeFilter={activeFilter} onFilterChange={setActiveFilter} />

                {visibleProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {visibleProducts.map(product => (
                            <ProductCard 
                                key={product.id} 
                                product={product} 
                                onDetailsClick={handleDetailsClick}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-text-dark/70 dark:text-text-light/70 text-xl">
                            لا توجد منتجات تطابق بحثك
                        </p>
                    </div>
                )}

                {hasMore && <LoadMoreButton onClick={handleLoadMore} />}
            </div>
        </div>
    );
};