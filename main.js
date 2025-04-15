document.addEventListener('DOMContentLoaded', () => {
    // Theme switching functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    // Mobile menu functionality
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu after clicking a link
                navLinks.classList.remove('active');
            }
        });
    });

    // Add hover effect for product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Add animation to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });

    // Add scroll reveal animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.product-card, .hero-content, .footer-section').forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });

    // Language selector functionality
    const languageBtn = document.querySelector('.language-btn span');
    const languageLinks = document.querySelectorAll('.language-dropdown a');

    // Set initial language
    let currentLang = 'en';

    // Language texts
    const translations = {
        en: {
            men: 'Men',
            women: 'Women',
            kids: 'Kids',
            sale: 'Sale',
            search: 'Search',
            account: 'Account',
            cart: 'Cart',
            newCollection: 'New Collection 2024',
            discover: 'Discover the latest Adidas sneakers',
            shopNow: 'Shop Now',
            featured: 'Featured Products',
            addToCart: 'Add to Cart',
            aboutUs: 'About Us',
            contact: 'Contact',
            followUs: 'Follow Us',
            office: 'Our Office',
            products: 'Products',
            footwear: 'Footwear',
            clothing: 'Clothing',
            accessories: 'Accessories',
            newArrivals: 'New Arrivals',
            bestSellers: 'Best Sellers',
            sports: 'Sports',
            running: 'Running',
            football: 'Football',
            basketball: 'Basketball',
            training: 'Training',
            outdoor: 'Outdoor',
            support: 'Support',
            help: 'Help',
            returns: 'Returns',
            shipping: 'Shipping',
            sizing: 'Sizing',
            company: 'Company',
            careers: 'Careers',
            press: 'Press',
            sustainability: 'Sustainability',
            investors: 'Investors',
            rights: 'All rights reserved',
            terms: 'Terms of Use',
            privacy: 'Privacy Policy',
            cookies: 'Cookie Policy',
            sortDefault: 'Default',
            sortPriceAsc: 'Price (ascending)',
            sortPriceDesc: 'Price (descending)',
            sortPopular: 'Popular'
        },
        ru: {
            men: 'Мужчины',
            women: 'Женщины',
            kids: 'Дети',
            sale: 'Распродажа',
            search: 'Поиск',
            account: 'Аккаунт',
            cart: 'Корзина',
            newCollection: 'Новая коллекция 2024',
            discover: 'Откройте для себя последние кроссовки Adidas',
            shopNow: 'Купить сейчас',
            featured: 'Рекомендуемые товары',
            addToCart: 'Добавить в корзину',
            aboutUs: 'О нас',
            contact: 'Контакты',
            followUs: 'Подпишитесь на нас',
            office: 'Наш офис',
            products: 'Продукция',
            footwear: 'Обувь',
            clothing: 'Одежда',
            accessories: 'Аксессуары',
            newArrivals: 'Новинки',
            bestSellers: 'Бестселлеры',
            sports: 'Виды спорта',
            running: 'Бег',
            football: 'Футбол',
            basketball: 'Баскетбол',
            training: 'Тренировки',
            outdoor: 'Активный отдых',
            support: 'Поддержка',
            help: 'Помощь',
            returns: 'Возвраты',
            shipping: 'Доставка',
            sizing: 'Размеры',
            company: 'Компания',
            careers: 'Карьера',
            press: 'Пресса',
            sustainability: 'Устойчивое развитие',
            investors: 'Инвесторам',
            rights: 'Все права защищены',
            terms: 'Условия использования',
            privacy: 'Политика конфиденциальности',
            cookies: 'Политика использования файлов cookie',
            sortDefault: 'По умолчанию',
            sortPriceAsc: 'По цене (возрастание)',
            sortPriceDesc: 'По цене (убывание)',
            sortPopular: 'По популярности'
        },
        ja: {
            men: 'メンズ',
            women: 'レディース',
            kids: 'キッズ',
            sale: 'セール',
            search: '検索',
            account: 'アカウント',
            cart: 'カート',
            newCollection: '2024年新作コレクション',
            discover: '最新のアディダススニーカーを発見',
            shopNow: '今すぐ購入',
            featured: 'おすすめ商品',
            addToCart: 'カートに追加',
            aboutUs: '会社概要',
            contact: 'お問い合わせ',
            followUs: 'フォローする',
            office: 'オフィス',
            products: '商品',
            footwear: 'シューズ',
            clothing: 'アパレル',
            accessories: 'アクセサリー',
            newArrivals: '新商品',
            bestSellers: 'ベストセラー',
            sports: 'スポーツ',
            running: 'ランニング',
            football: 'サッカー',
            basketball: 'バスケットボール',
            training: 'トレーニング',
            outdoor: 'アウトドア',
            support: 'サポート',
            help: 'ヘルプ',
            returns: '返品',
            shipping: '配送',
            sizing: 'サイズ',
            company: '企業情報',
            careers: '採用情報',
            press: 'プレス',
            sustainability: 'サステナビリティ',
            investors: '投資家情報',
            rights: '全著作権所有',
            terms: '利用規約',
            privacy: 'プライバシーポリシー',
            cookies: 'クッキーポリシー',
            sortDefault: 'デフォルト',
            sortPriceAsc: '価格（昇順）',
            sortPriceDesc: '価格（降順）',
            sortPopular: '人気順'
        }
    };

    // Update language
    function updateLanguage(lang) {
        currentLang = lang;
        languageBtn.textContent = lang.toUpperCase();
        
        // Update all translatable elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                if (element.tagName === 'SELECT') {
                    // Update select options
                    Array.from(element.options).forEach(option => {
                        const optionKey = option.getAttribute('data-translate');
                        if (translations[lang][optionKey]) {
                            option.textContent = translations[lang][optionKey];
                        }
                    });
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    }

    // Add click event listeners to language links
    languageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });

    // Add data-translate attributes to HTML elements
    document.querySelector('.nav-links a:nth-child(1)').setAttribute('data-translate', 'men');
    document.querySelector('.nav-links a:nth-child(2)').setAttribute('data-translate', 'women');
    document.querySelector('.nav-links a:nth-child(3)').setAttribute('data-translate', 'kids');
    document.querySelector('.nav-links a:nth-child(4)').setAttribute('data-translate', 'sale');
    document.querySelector('.hero h1').setAttribute('data-translate', 'newCollection');
    document.querySelector('.hero p').setAttribute('data-translate', 'discover');
    document.querySelector('.cta-button').setAttribute('data-translate', 'shopNow');
    document.querySelector('.featured h2').setAttribute('data-translate', 'featured');
    document.querySelectorAll('.product-card button').forEach(btn => {
        btn.setAttribute('data-translate', 'addToCart');
    });
    document.querySelector('.footer-section:nth-child(1) h4').setAttribute('data-translate', 'aboutUs');
    document.querySelector('.footer-section:nth-child(2) h4').setAttribute('data-translate', 'contact');
    document.querySelector('.footer-section:nth-child(3) h4').setAttribute('data-translate', 'followUs');
    document.querySelector('.map-info h3').setAttribute('data-translate', 'office');

    // Сортировка товаров
    const sortSelect = document.getElementById('sort-select');
    const productGrid = document.querySelector('.product-grid');

    // Данные о популярности товаров
    const productPopularity = {
        'Ultraboost 22': 5,
        'NMD R1': 3,
        'Stan Smith': 4,
        'Predator Edge': 2,
        'Harden Vol. 7': 1,
        'Barricade': 3,
        'Pureboost': 2,
        'Terrex': 4,
        'Busenitz': 1
    };

    function sortProducts() {
        const products = Array.from(productGrid.children);
        const sortValue = sortSelect.value;

        products.sort((a, b) => {
            const priceA = parseInt(a.querySelector('[data-price]').getAttribute('data-price'));
            const priceB = parseInt(b.querySelector('[data-price]').getAttribute('data-price'));
            const nameA = a.querySelector('h3').textContent;
            const nameB = b.querySelector('h3').textContent;

            switch (sortValue) {
                case 'price-asc':
                    return priceA - priceB;
                case 'price-desc':
                    return priceB - priceA;
                case 'popular':
                    return (productPopularity[nameB] || 0) - (productPopularity[nameA] || 0);
                default:
                    return 0;
            }
        });

        // Очищаем и перезаполняем сетку
        productGrid.innerHTML = '';
        products.forEach(product => {
            productGrid.appendChild(product);
        });
    }

    sortSelect.addEventListener('change', sortProducts);
});
