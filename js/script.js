// ===== Слайдер отзывов =====
document.addEventListener('DOMContentLoaded', function () {
    const reviews = document.querySelectorAll('.review-item');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let current = 0;

    if (reviews.length > 0) {
        function showReview(index) {
            reviews.forEach(r => r.classList.remove('active'));
            reviews[index].classList.add('active');
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                current = (current + 1) % reviews.length;
                showReview(current);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                current = (current - 1 + reviews.length) % reviews.length;
                showReview(current);
            });
        }

        showReview(0);
    }

    // ===== Форма заявки =====
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const service = document.getElementById('service').value;

            if (!name || !phone || !service) {
                alert('Пожалуйста, заполните все поля.');
                return;
            }

            const message = document.getElementById('form-message');
            if (message) {
                message.style.display = 'block';
                message.textContent = 'Спасибо! Ваша заявка отправлена. Мы свяжемся с вами.';
            }
            orderForm.reset();
        });
    }

    // ===== Калькулятор стоимости =====
    const calcForm = document.getElementById('calc-form');
    if (calcForm) {
        calcForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const service = document.getElementById('calc-service').value;
            const qty = parseInt(document.getElementById('calc-qty').value) || 0;
            const result = document.getElementById('calc-result');

            const prices = {
                'odezhda': 800,
                'kovry': 300,
                'mebel': 1200
            };

            const price = prices[service] || 0;
            const total = price * qty;

            if (result) {
                result.textContent = 'Примерная стоимость: ' + total + ' руб.';
            }
        });
    }
});