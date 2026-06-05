// ==============================================
// MENU & CALORIES - ОРТАҚ БЭКЕНД ФАЙЛ (толық нұсқа)
// Барлық беттерге ортақ функциялар
// ==============================================

const APP = {
    // === ВЕРСИЯ ===
    VERSION: '2.0.0',
    
    // === КОНСТАНТАЛАР ===
    STORAGE_KEYS: {
        USER_DATA: 'menuCalories_userData',
        HEALTH_DATA: 'menuCalories_healthData',
        TODAY_FOODS: 'menuCalories_todayFoods',
        IS_LOGGED_IN: 'men  uCalories_isLoggedIn',
        SETTINGS: 'menuCalories_settings',
        USERS_DB: 'menuCalories_usersDB',
        CALORIE_DATA: 'menuCalories_calorieData'
    },
    
    // === ТАҒАМДАР ДЕРЕКҚОРЫ ===
    FOODS_DB: {
        breakfast: [
            { id: 1, name: 'Жұмыртқа және тосты', calories: 420, protein: 25, fat: 18, carbs: 40, time: 15, tags: ['белок', 'таңғы'] },
            { id: 2, name: 'Жарма ботқасы', calories: 350, protein: 12, fat: 8, carbs: 60, time: 10, tags: ['веган', 'көмірсу'] },
            { id: 3, name: 'Пайдалы смузи', calories: 280, protein: 10, fat: 5, carbs: 45, time: 8, tags: ['веган', 'витамин'] },
            { id: 4, name: 'Йогурт парфе', calories: 320, protein: 18, fat: 12, carbs: 35, time: 7, tags: ['пробиотик'] },
            { id: 5, name: 'Көкөніс омлеті', calories: 410, protein: 28, fat: 22, carbs: 15, time: 18, tags: ['белок'] },
            { id: 6, name: 'Чиа пудингі', calories: 240, protein: 8, fat: 12, carbs: 25, time: 5, tags: ['веган', 'палео'] },
            { id: 7, name: 'Француз тосты', calories: 360, protein: 12, fat: 15, carbs: 45, time: 15, tags: ['тәтті'] },
            { id: 8, name: 'Блиндер', calories: 390, protein: 14, fat: 16, carbs: 50, time: 20, tags: ['тәтті'] },
            { id: 9, name: 'Тофу шижи', calories: 310, protein: 22, fat: 18, carbs: 20, time: 22, tags: ['веган', 'белок'] },
            { id: 10, name: 'Мюсли', calories: 270, protein: 9, fat: 8, carbs: 40, time: 3, tags: ['веган', 'жеңіл'] }
        ],
        lunch: [
            { id: 11, name: 'Гриль тауық', calories: 650, protein: 45, fat: 25, carbs: 50, time: 30, tags: ['белок', 'диеталық'] },
            { id: 12, name: 'Гриль лосось', calories: 580, protein: 40, fat: 30, carbs: 30, time: 25, tags: ['омега-3'] },
            { id: 13, name: 'Веган табақшасы', calories: 520, protein: 25, fat: 20, carbs: 55, time: 25, tags: ['веган'] },
            { id: 14, name: 'Түркия орамасы', calories: 610, protein: 38, fat: 22, carbs: 60, time: 15, tags: ['белок'] },
            { id: 15, name: 'Киноа салаты', calories: 450, protein: 18, fat: 15, carbs: 60, time: 20, tags: ['веган', 'жеңіл'] },
            { id: 16, name: 'Баттат бургер', calories: 680, protein: 28, fat: 30, carbs: 70, time: 35, tags: ['веган'] },
            { id: 17, name: 'Тауық қуыруы', calories: 590, protein: 42, fat: 24, carbs: 45, time: 28, tags: ['белок'] },
            { id: 18, name: 'Балық тако', calories: 530, protein: 32, fat: 25, carbs: 40, time: 22, tags: ['балық'] },
            { id: 19, name: 'Веган лазанья', calories: 720, protein: 30, fat: 28, carbs: 80, time: 45, tags: ['веган'] },
            { id: 20, name: 'Сиыр стейк', calories: 750, protein: 50, fat: 35, carbs: 30, time: 30, tags: ['белок'] },
            { id: 21, name: 'Тон балық салаты', calories: 410, protein: 35, fat: 18, carbs: 25, time: 12, tags: ['балық', 'жеңіл'] },
            { id: 22, name: 'Тофу карри', calories: 480, protein: 22, fat: 20, carbs: 50, time: 30, tags: ['веган'] }
        ],
        dinner: [
            { id: 23, name: 'Печень балық', calories: 520, protein: 38, fat: 22, carbs: 40, time: 30, tags: ['балық', 'жеңіл'] },
            { id: 24, name: 'Брокколи супы', calories: 420, protein: 15, fat: 12, carbs: 55, time: 25, tags: ['диеталық'] },
            { id: 25, name: 'Толтырылған бұрыш', calories: 480, protein: 22, fat: 18, carbs: 50, time: 40, tags: ['веган'] },
            { id: 26, name: 'Тауық қуыруы', calories: 510, protein: 38, fat: 22, carbs: 40, time: 28, tags: ['белок'] },
            { id: 27, name: 'Цуккини кеспесі', calories: 390, protein: 12, fat: 15, carbs: 45, time: 20, tags: ['веган', 'жеңіл'] },
            { id: 28, name: 'Жасымық карри', calories: 460, protein: 24, fat: 16, carbs: 55, time: 35, tags: ['веган'] },
            { id: 29, name: 'Саңырауқұлақ ризотто', calories: 540, protein: 18, fat: 22, carbs: 65, time: 40, tags: ['веган'] },
            { id: 30, name: 'Спагетти болоньезе', calories: 580, protein: 32, fat: 24, carbs: 60, time: 35, tags: ['итальян'] },
            { id: 31, name: 'Веган кәуап', calories: 430, protein: 25, fat: 20, carbs: 35, time: 25, tags: ['веган'] },
            { id: 32, name: 'Көкөніс кәуабы', calories: 350, protein: 12, fat: 14, carbs: 40, time: 20, tags: ['веган', 'жеңіл'] }
        ],
        snack: [
            { id: 33, name: 'Алма', calories: 52, protein: 0.5, fat: 0.2, carbs: 14, time: 1, tags: ['фрукт'] },
            { id: 34, name: 'Банан', calories: 96, protein: 1.1, fat: 0.3, carbs: 22, time: 1, tags: ['фрукт'] },
            { id: 35, name: 'Йогурт', calories: 180, protein: 15, fat: 8, carbs: 12, time: 2, tags: ['пробиотик'] },
            { id: 36, name: 'Жаңғақтар', calories: 180, protein: 6, fat: 15, carbs: 5, time: 2, tags: ['пайдалы май'] },
            { id: 37, name: 'Қара шоколад', calories: 210, protein: 3, fat: 14, carbs: 18, time: 1, tags: ['антиоксидант'] },
            { id: 38, name: 'Жеміс салаты', calories: 220, protein: 2, fat: 1, carbs: 50, time: 10, tags: ['витамин'] },
            { id: 39, name: 'Чиа пудинг', calories: 280, protein: 8, fat: 14, carbs: 30, time: 5, tags: ['веган'] },
            { id: 40, name: 'Банан балмұздақ', calories: 290, protein: 4, fat: 8, carbs: 50, time: 8, tags: ['тәтті'] }
        ]
    },

    // === ПАЙДАЛАНУШЫ МАҚСАТТАРЫ ===
    GOALS: {
        lose: { 
            name: 'Салмақ азайту', 
            deficit: 500, 
            tips: [
                'Көкөністерді көбірек жеңіз',
                'Тәттіні азайтыңыз',
                'Күніне 2 литр су ішіңіз',
                'Кешкі асты 19:00-ге дейін ішіңіз'
            ] 
        },
        maintain: { 
            name: 'Салмақты сақтау', 
            deficit: 0, 
            tips: [
                'Балансты тамақтаныңыз',
                'Тұрақты спорт',
                'Аптасына 3 рет жаттығыңыз',
                'Ұйқыңыз 7-8 сағат'
            ] 
        },
        gain: { 
            name: 'Салмақ қосу', 
            deficit: -300, 
            tips: [
                'Протеинді көбейтіңіз',
                'Күніне 5 рет тамақтаныңыз',
                'Күш жаттығуларын жасаңыз',
                'Тағамға май қосыңыз'
            ] 
        }
    },

    // === НЕГІЗГІ ФУНКЦИЯЛАР ===

    // Пайдаланушы деректерін алу
    getUserData: function() {
        try {
            const userData = JSON.parse(localStorage.getItem(this.STORAGE_KEYS.USER_DATA)) || {};
            const healthData = JSON.parse(localStorage.getItem(this.STORAGE_KEYS.HEALTH_DATA)) || {};
            
            return {
                ...userData,
                ...healthData,
                fullname: userData.fullname || 'Қонақ',
                email: userData.email || '',
                goal: healthData.goal || 'maintain',
                age: healthData.age || 28,
                weight: healthData.weight || 65,
                height: healthData.height || 165,
                gender: healthData.gender || 'female'
            };
        } catch (e) {
            console.error('Қате:', e);
            return {
                fullname: 'Қонақ',
                goal: 'maintain',
                age: 28,
                weight: 65,
                height: 165
            };
        }
    },

    // Бүгінгі тағамдарды алу
    getTodayFoods: function() {
        try {
            const saved = JSON.parse(localStorage.getItem(this.STORAGE_KEYS.TODAY_FOODS));
            if (saved && saved.date === new Date().toDateString()) {
                return saved.foods || { breakfast: [], lunch: [], dinner: [], snack: [] };
            }
        } catch (e) {}
        return { breakfast: [], lunch: [], dinner: [], snack: [] };
    },

    // === AI ФУНКЦИЯЛАРЫ ===

    // 1. Тағам ұсыну
    recommendFood: function(mealType = 'lunch', count = 5) {
        try {
            const userData = this.getUserData();
            const goal = userData.goal;
            
            let foods = this.FOODS_DB[mealType] || [];
            
            if (foods.length === 0) {
                // Егер mealType дұрыс емес болса, барлық тағамдардан аламыз
                foods = Object.values(this.FOODS_DB).flat();
            }
            
            // Мақсат бойынша фильтр
            if (goal === 'lose') {
                foods = foods.filter(f => f.calories < 500);
            } else if (goal === 'gain') {
                foods = foods.filter(f => f.calories > 500);
            }
            
            // Рейтинг бойынша сұрыптау
            const recommendations = foods.sort((a, b) => {
                if (goal === 'lose') {
                    return (b.protein / b.calories) - (a.protein / a.calories);
                }
                return b.calories - a.calories;
            }).slice(0, count);
            
            return {
                success: true,
                recommendations: recommendations,
                message: recommendations.length > 0 ? 'Ұсыныстар дайын' : 'Сәйкес тағам табылмады'
            };
        } catch (e) {
            console.error('recommendFood қатесі:', e);
            return {
                success: false,
                recommendations: [],
                message: 'Қате пайда болды'
            };
        }
    },

    // 2. Күндік анализ
    analyzeDay: function() {
        try {
            const foods = this.getTodayFoods();
            const userData = this.getUserData();
            
            let totalCalories = 0, totalProtein = 0;
            
            Object.values(foods).forEach(meal => {
                if (Array.isArray(meal)) {
                    meal.forEach(item => {
                        totalCalories += item.calories || 0;
                        totalProtein += item.protein || 0;
                    });
                }
            });
            
            const status = totalCalories > 2500 ? 'exceed' : 
                          totalCalories < 1500 ? 'deficit' : 'optimal';
            
            const messages = {
                optimal: '✅ Бүгін тамақтануыңыз теңгерімді!',
                exceed: '⚠️ Калорияңыз көп болды. Ертең жеңілдеу тамақтаныңыз.',
                deficit: '⚠️ Калорияңыз аз болды. Қосымша тамақтаныңыз.'
            };
            
            return {
                calories: totalCalories,
                protein: totalProtein,
                status: status,
                message: messages[status],
                suggestions: this.GOALS[userData.goal]?.tips.slice(0, 2) || ['Көкөністерді жеңіз', 'Су ішіңіз']
            };
        } catch (e) {
            console.error('analyzeDay қатесі:', e);
            return {
                calories: 0,
                protein: 0,
                status: 'error',
                message: 'Анализ жасау мүмкін емес',
                suggestions: ['Қайталап көріңіз']
            };
        }
    },

    // 3. Сұраққа жауап беру
    askAI: function(question) {
        try {
            if (!question) return 'Сұрақ жазыңыз';
            
            const answers = {
                'калория': 'Калория - энергия өлшемі. Ересек адамға күніне 2000-2500 ккал қажет.',
                'протеин': 'Протеин бұлшық етке қажет. Тауық, балық, жұмыртқада көп.',
                'белок': 'Белок - протеиннің қазақша аты. Күніне салмағыңыздың 1.5 есесін жеңіз.',
                'май': 'Пайдалы майлар (авокадо, жаңғақ) гормондарға қажет.',
                'көмірсу': 'Көмірсулар энергия береді. Толық дәнді таңдаңыз.',
                'су': 'Күніне 2-3 литр су ішіңіз. Суды тамақтан 30 мин бұрын ішіңіз.',
                'спорт': 'Аптасына 3-4 рет спортпен шұғылданыңыз.',
                'ұйқы': '7-8 сағат ұйықтаңыз. Ұйқы гормондары маңызды.',
                'диета': 'Диета тұрақты болуы керек. Аштықтан аулақ болыңыз.',
                'таңғы': 'Таңғы ас - ең маңызды. Протеинді көбірек жеңіз.',
                'кешкі': 'Кешкі ас жеңіл болуы керек. Ұйқыдан 3 сағат бұрын.'
            };
            
            const lowerQuestion = question.toLowerCase();
            
            for (let key in answers) {
                if (lowerQuestion.includes(key)) {
                    return answers[key];
                }
            }
            
            // Егер ешқандай кілт табылмаса
            if (lowerQuestion.includes('салем') || lowerQuestion.includes('привет')) {
                return 'Сәлеметсіз бе! Мен AI көмекшімін. Қалай көмектесе аламын?';
            } else if (lowerQuestion.includes('рахмет')) {
                return 'Оқасы жоқ! Көмек керек болса, сұраңыз.';
            }
            
            return 'Кешіріңіз, мен бұл сұраққа жауап бере алмаймын. Басқа сұрақ қойыңыз.';
        } catch (e) {
            console.error('askAI қатесі:', e);
            return 'Қате пайда болды. Қайталап көріңіз.';
        }
    },

    // 4. Апталық жоспар
    createWeeklyPlan: function() {
        try {
            const mealTypes = ['breakfast', 'lunch', 'dinner', 'snack'];
            const days = ['Дүйсенбі', 'Сейсенбі', 'Сәрсенбі', 'Бейсенбі', 'Жұма', 'Сенбі', 'Жексенбі'];
            const weeklyPlan = [];
            
            for (let i = 0; i < 7; i++) {
                const dayPlan = {
                    day: days[i],
                    meals: {}
                };
                
                mealTypes.forEach(type => {
                    const foods = this.FOODS_DB[type] || [];
                    if (foods.length > 0) {
                        const randomIndex = Math.floor(Math.random() * foods.length);
                        dayPlan.meals[type] = foods[randomIndex];
                    } else {
                        dayPlan.meals[type] = { name: 'Тағам жоқ', calories: 0 };
                    }
                });
                
                weeklyPlan.push(dayPlan);
            }
            
            return weeklyPlan;
        } catch (e) {
            console.error('createWeeklyPlan қатесі:', e);
            return [];
        }
    },

    // 5. Хабарлама көрсету
    showNotification: function(message, type = 'success') {
        try {
            // Ескі хабарламаларды өшіру
            document.querySelectorAll('.global-message').forEach(el => el.remove());
            
            const notification = document.createElement('div');
            notification.className = `global-message ${type}`;
            notification.innerHTML = `
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
                <button class="message-close" onclick="this.parentElement.remove()">✕</button>
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.classList.add('show');
            }, 10);
            
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        } catch (e) {
            console.error('showNotification қатесі:', e);
            alert(message);
        }
    },

    // 6. Жүйеден шығу
    logout: function() {
        try {
            localStorage.setItem(this.STORAGE_KEYS.IS_LOGGED_IN, 'false');
            window.location.href = 'index.html';
        } catch (e) {
            console.error('logout қатесі:', e);
        }
    },

    // 7. Тексеру: пайдаланушы кірген бе?
    checkAuth: function() {
        try {
            const isLoggedIn = localStorage.getItem(this.STORAGE_KEYS.IS_LOGGED_IN);
            if (isLoggedIn !== 'true') {
                window.location.href = 'pages/login.html';
                return false;
            }
            return true;
        } catch (e) {
            console.error('checkAuth қатесі:', e);
            return false;
        }
    },

    // 8. Инициализация
    init: function() {
        console.log('✅ APP инициализация:', this.VERSION);
        
        // localStorage тексеру
        try {
            localStorage.setItem('test', 'test');
            localStorage.removeItem('test');
        } catch (e) {
            console.warn('⚠️ localStorage жұмыс істемейді');
        }
        
        return this;
    }
    
};

// Инициализация
APP.init();

// Глобалды объект
window.APP = APP;

// ==============================================
// БАРЛЫҚ КНОПКАЛАРДЫ АВТОМАТТЫ ТҮЗЕТУ
// ==============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM жүктелді');
    
    // Гамбургер меню
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu') || document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
    
    // Барлық сілтемелерді түзету
    document.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href !== '#' && !href.startsWith('http') && !href.startsWith('javascript')) {
            // Ескі href-ті сақтаймыз, бірақ қажет болса өңдейміз
            link.addEventListener('click', function(e) {
                // Егер сілтеме сыртқы болмаса
                if (href.startsWith('/') || href.startsWith('./') || href.startsWith('../') || href.match(/^[^/]+\.html$/)) {
                    e.preventDefault();
                    window.location.href = href;
                }
            });
        }
    });
});

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

// ==============================================
// СТИЛЬДЕР
// ==============================================

const style = document.createElement('style');
style.textContent = `
    .global-message {
        position: fixed;
        top: 20px;
        right: 20px;
        max-width: 350px;
        padding: 15px 20px;
        border-radius: 8px;
        background-color: white;
        box-shadow: 0 5px 20px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        gap: 12px;
        z-index: 9999;
        transform: translateX(120%);
        transition: transform 0.3s ease;
    }
    
    .global-message.show {
        transform: translateX(0);
    }
    
    .global-message.success {
        border-left: 4px solid #27ae60;
        background-color: #dff0d8;
        color: #3c763d;
    }
    
    .global-message.error {
        border-left: 4px solid #e74c3c;
        background-color: #fee;
        color: #c0392b;
    }
    
    .global-message.info {
        border-left: 4px solid #3498db;
        background-color: #e3f2fd;
        color: #2c3e50;
    }
    
    .global-message i {
        font-size: 1.2rem;
    }
    
    .message-close {
        margin-left: auto;
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        opacity: 0.7;
    }
    
    .message-close:hover {
        opacity: 1;
    }
`;

document.head.appendChild(style);
// Тіл сақтау
localStorage.setItem('preferred-language', 'kk')

// Тема сақтау  
localStorage.setItem('preferred-theme', 'dark')
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => console.log('✅ SW тіркелді'))
      .catch(error => console.log('❌ SW қате:', error));
  });
}