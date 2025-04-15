// Конвертация валют
const exchangeRates = {
    'USD': {
        'RUB': 90,
        'EUR': 0.92,
        'USD': 1
    },
    'RUB': {
        'USD': 0.011,
        'EUR': 0.01,
        'RUB': 1
    },
    'EUR': {
        'USD': 1.09,
        'RUB': 98,
        'EUR': 1
    }
};

// Форматирование цены в зависимости от языка
function formatPrice(price, currency) {
    const formatters = {
        'en': new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
        'ru': new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }),
        'de': new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' })
    };
    
    return formatters[language].format(price);
}

// Обновление цен при смене языка
function updatePrices() {
    const prices = document.querySelectorAll('.price');
    prices.forEach(priceElement => {
        const basePrice = parseFloat(priceElement.getAttribute('data-price'));
        const baseCurrency = priceElement.getAttribute('data-currency');
        
        // Конвертация в целевую валюту
        let targetCurrency = 'USD';
        if (language === 'ru') targetCurrency = 'RUB';
        if (language === 'de') targetCurrency = 'EUR';
        
        const convertedPrice = basePrice * exchangeRates[baseCurrency][targetCurrency];
        priceElement.textContent = formatPrice(convertedPrice, targetCurrency);
    });
}

// Добавляем обработчик изменения языка
document.querySelectorAll('.language-dropdown a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const newLang = e.target.getAttribute('data-lang');
        if (newLang !== language) {
            language = newLang;
            updateTranslations();
            updatePrices();
        }
    });
});

// Инициализация цен при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    updatePrices();
});

// Мобильное меню
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavClose = document.querySelector('.mobile-nav-close');

// Открытие мобильного меню
mobileMenu.addEventListener('click', () => {
    mobileNav.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Закрытие мобильного меню
mobileNavClose.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    document.body.style.overflow = '';
});

// Закрытие мобильного меню при клике вне его
document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Закрытие мобильного меню при изменении размера окна
window.addEventListener('resize', () => {
    if (window.innerWidth > 1100) {
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
    }
});

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const notification = this.nextElementSibling;
        notification.classList.add('active');
        
        // Удаляем класс active после завершения анимации
        setTimeout(() => {
            notification.classList.remove('active');
        }, 2000);
    });
}); 