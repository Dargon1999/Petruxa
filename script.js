// Новый эффект перехода
function navigateTo(url) {
    const overlay = document.getElementById('transitionOverlay');
    overlay.style.transition = 'all 0.6s ease';
    overlay.style.opacity = '1';
    overlay.style.transform = 'scale(20)';
    setTimeout(() => {
        window.location.href = url;
    }, 600);
}

// Общие переводы для всех страниц
const translations = {
    en: {
        home: "Home",
        join: "Join",
        contact: "Contact",
        laws: "Laws",
        greeting: "Hello",
        welcome: "Welcome to Petruxa Syndicate",
        aboutTitle: "About Us",
        about: "We are an elite team bringing together the best players.",
        servicesTitle: "Our Services",
        service1: "💻 Strength and Support",
        service2: "🎉 Participation in Major Events",
        service3: "💰 Financial Consulting",
        service4: "🌐 Growth Opportunities",
        service5: "🏅 Exclusive Privileges",
        service6: "🚔 Our guys command LSPD, EMS, FIB. The law is on our side",
        teamTitle: "Our Team",
        team1: "Strategist and team leader, responsible for organization and planning.",
        team2: "Financial expert, responsible for strategic investments and consulting.",
        achievementsTitle: "Our Achievements",
        achievement1: "🏆 Leadership in government structures",
        achievement2: "💼 Legends in government structures",
        achievement3: "🌍 🏍️ Captures and hijackings",
        achievement4: "🔐 Property protection and problem-solving assistance",
        contactTitle: "Contact Us",
        contactSubtitle: "We are always happy to answer your questions",
        contactInfoTitle: "Our Contacts",
        namePlaceholder: "Your Name",
        discordPlaceholder: "Your Discord",
        messagePlaceholder: "Your Message",
        send: "Send",
        successMessage: "Message sent! We will contact you soon.",
        errorMessage: "Error sending message. Please try again.",
        joinTitle: "Application to Join the Family",
        realNameLabel: "Your Name: [OOC]",
        ageOOCLabel: "How old are you? [OOC]",
        locationLabel: "Where are you from? [OOC]",
        timezoneLabel: "Your Time Zone: [OOC]",
        timezonePlaceholder: "For example, UTC+3",
        averageOnlineLabel: "Your Average Online Time:",
        selectTime: "Select Time",
        "1-3": "1-3 hours",
        "4-6": "4-6 hours",
        "6-8": "6-8 hours",
        "8+": "8+ hours",
        moveWithFamilyLabel: "Are you ready to move with the family?",
        selectAnswer: "Select Answer",
        yes: "Yes",
        no: "No",
        bestSkillLabel: "What are you best at?",
        selectSkill: "Select Skill",
        shoot: "Shooting",
        contracts: "Executing Contracts",
        communicate: "Communicating with People",
        leadership: "Exhibiting Leadership Qualities",
        observe: "Observing People",
        other: "Other",
        otherSkillLabel: "Specify your option:",
        preferenceLabel: "What do you prefer?",
        selectPreference: "Select Preference",
        crime: "Crime",
        gov: "Government",
        both: "Both",
        previousOrganizationsLabel: "Which organizations were you previously part of?",
        discordLabel: "Your Discord:",
        lawsTitle: "Syndicate Laws",
        icLawsTitle: "IC Laws",
        icLaw1: "Follow Los Santos laws if you’re in LSPD, EMS, or FIB.",
        icLaw2: "Respect your superiors in the syndicate.",
        icLaw3: "Do not betray the family for personal gain.",
        icLaw4: "Coordinate all operations with leadership.",
        oocLawsTitle: "OOC Rules",
        oocLaw1: "Using cheats or bugs is prohibited.",
        oocLaw2: "Follow the RP server rules.",
        oocLaw3: "Respect other players regardless of their role.",
        oocLaw4: "Report issues to the administration.",
        footer: "© 2025 All rights reserved."
    },
    ru: {
        home: "Главная",
        join: "Присоединиться",
        contact: "Связь",
        laws: "Законы",
        greeting: "Здравствуйте",
        welcome: "Добро пожаловать в Petruxa Syndicate",
        aboutTitle: "О нас",
        about: "Мы — это элитная команда, объединяющая лучших игроков.",
        servicesTitle: "Наши услуги",
        service1: "💻 Сила и поддержка",
        service2: "🎉 Участие в крупных событиях",
        service3: "💰 Финансовые консультации",
        service4: "🌐 Возможности для роста",
        service5: "🏅 Эксклюзивные привилегии",
        service6: "🚔Наши ребята командуют в LSPD, EMS, FIB. Закон — на нашей стороне",
        teamTitle: "Наша команда",
        team1: "Стратег и лидер команды, ответственен за организацию и планирование.",
        team2: "Эксперт в области финансов, отвечает за стратегические инвестиции и консультации.",
        achievementsTitle: "Наши достижения",
        achievement1: "🏆 Лидерство в гос. структурах",
        achievement2: "💼 Легенды в гос. структурах",
        achievement3: "🌍 🏍️ Захваты и угоны",
        achievement4: "🔐 Защита собственности и помощь в решениях",
        contactTitle: "Свяжитесь с нами",
        contactSubtitle: "Мы всегда рады ответить на ваши вопросы",
        contactInfoTitle: "Наши контакты",
        namePlaceholder: "Ваше имя",
        discordPlaceholder: "Ваш Discord",
        messagePlaceholder: "Ваше сообщение",
        send: "Отправить",
        successMessage: "Сообщение отправлено! Мы свяжемся с вами в ближайшее время.",
        errorMessage: "Ошибка при отправке сообщения. Попробуйте снова.",
        joinTitle: "Заявка в семью",
        realNameLabel: "Ваше имя: [OOC]",
        ageOOCLabel: "Сколько вам лет? [OOC]",
        locationLabel: "Откуда вы? [OOC]",
        timezoneLabel: "Ваш часовой пояс: [OOC]",
        timezonePlaceholder: "Например, UTC+3",
        averageOnlineLabel: "Ваш средний онлайн:",
        selectTime: "Выберите время",
        "1-3": "1-3 часа",
        "4-6": "4-6 часов",
        "6-8": "6-8 часов",
        "8+": "8 и более часов",
        moveWithFamilyLabel: "Готовы ли вы двигаться вместе с семьей?",
        selectAnswer: "Выберите ответ",
        yes: "Да",
        no: "Нет",
        bestSkillLabel: "Что у вас получается больше всего?",
        selectSkill: "Выберите навык",
        shoot: "Стрелять",
        contracts: "Выполнять контракты",
        communicate: "Коммуницировать с людьми",
        leadership: "Исполнять лидерские качества",
        observe: "Следить за людьми",
        other: "Другое",
        otherSkillLabel: "Укажите свой вариант:",
        preferenceLabel: "Что вы предпочитаете:",
        selectPreference: "Выберите предпочтение",
        crime: "Крайм",
        gov: "Госка",
        both: "Оба",
        previousOrganizationsLabel: "В каких организациях ранее состояли:",
        discordLabel: "Ваш Discord:",
        lawsTitle: "Законы Синдиката",
        icLawsTitle: "IC Законы",
        icLaw1: "Соблюдай законы Лос-Сантоса, если ты в LSPD, EMS или FIB.",
        icLaw2: "Уважай старших по званию в синдикате.",
        icLaw3: "Не предавай семью ради личной выгоды.",
        icLaw4: "Все операции согласовывай с руководством.",
        oocLawsTitle: "OOC Правила",
        oocLaw1: "Запрещено использование читов и багов.",
        oocLaw2: "Соблюдай правила сервера RP.",
        oocLaw3: "Уважай других игроков вне зависимости от роли.",
        oocLaw4: "Сообщай о проблемах администрации.",
        footer: "© 2025 Все права защищены."
    },
    uk: {
        home: "Головна",
        join: "Приєднатися",
        contact: "Зв'язок",
        laws: "Закони",
        greeting: "Привіт",
        welcome: "Ласкаво просимо в Petruxa Syndicate",
        aboutTitle: "Про нас",
        about: "Ми — це елітна команда, що об'єднує найкращих гравців.",
        servicesTitle: "Наші послуги",
        service1: "💻 Сила і підтримка",
        service2: "🎉 Участь у великих подіях",
        service3: "💰 Фінансові консультації",
        service4: "🌐 Можливості для зростання",
        service5: "🏅 Ексклюзивні привілеї",
        service6: "🚔Наші хлопці керують у LSPD, EMS, FIB. Закон — на нашому боці",
        teamTitle: "Наша команда",
        team1: "Стратег і лідер команди, відповідальний за організацію та планування.",
        team2: "Експерт у галузі фінансів, відповідає за стратегічні інвестиції та консультації.",
        achievementsTitle: "Наші досягнення",
        achievement1: "🏆 Лідерство в держ. структурах",
        achievement2: "💼 Легенди в держ. структурах",
        achievement3: "🌍 🏍️ Захоплення і викрадення",
        achievement4: "🔐 Захист власності та допомога у рішеннях",
        contactTitle: "Зв'яжіться з нами",
        contactSubtitle: "Ми завжди раді відповісти на ваші запитання",
        contactInfoTitle: "Наші контакти",
        namePlaceholder: "Ваше ім'я",
        discordPlaceholder: "Ваш Discord",
        messagePlaceholder: "Ваше повідомлення",
        send: "Надіслати",
        successMessage: "Повідомлення надіслано! Ми зв'яжемося з вами найближчим часом.",
        errorMessage: "Помилка при надсиланні повідомлення. Спробуйте ще раз.",
        joinTitle: "Заявка до сім'ї",
        realNameLabel: "Ваше ім'я: [OOC]",
        ageOOCLabel: "Скільки вам років? [OOC]",
        locationLabel: "Звідки ви? [OOC]",
        timezoneLabel: "Ваш часовий пояс: [OOC]",
        timezonePlaceholder: "Наприклад, UTC+3",
        averageOnlineLabel: "Ваш середній онлайн:",
        selectTime: "Оберіть час",
        "1-3": "1-3 години",
        "4-6": "4-6 годин",
        "6-8": "6-8 годин",
        "8+": "8 і більше годин",
        moveWithFamilyLabel: "Чи готові ви рухатися разом із сім'єю?",
        selectAnswer: "Оберіть відповідь",
        yes: "Так",
        no: "Ні",
        bestSkillLabel: "Що у вас виходить найкраще?",
        selectSkill: "Оберіть навичку",
        shoot: "Стріляти",
        contracts: "Виконувати контракти",
        communicate: "Комунікувати з людьми",
        leadership: "Виявляти лідерські якості",
        observe: "Стежити за людьми",
        other: "Інше",
        otherSkillLabel: "Вкажіть свій варіант:",
        preferenceLabel: "Що ви віддаєте перевагу:",
        selectPreference: "Оберіть перевагу",
        crime: "Крайм",
        gov: "Держава",
        both: "Обидва",
        previousOrganizationsLabel: "У яких організаціях ви раніше перебували:",
        discordLabel: "Ваш Discord:",
        lawsTitle: "Закони Синдикату",
        icLawsTitle: "IC Закони",
        icLaw1: "Дотримуйся законів Лос-Сантоса, якщо ти в LSPD, EMS або FIB.",
        icLaw2: "Поважай старших за вислугою в синдикаті.",
        icLaw3: "Не зраджуй сім'ю заради особистої вигоди.",
        icLaw4: "Усі операції узгоджуй із керівництвом.",
        oocLawsTitle: "OOC Правила",
        oocLaw1: "Заборонено використання чітів і багів.",
        oocLaw2: "Дотримуйся правил RP-сервера.",
        oocLaw3: "Поважай інших гравців незалежно від ролі.",
        oocLaw4: "Повідомляй про проблеми адміністрації.",
        footer: "© 2025 Усі права захищено."
    },
    pl: {
        home: "Strona główna",
        join: "Dołącz",
        contact: "Kontakt",
        laws: "Prawa",
        greeting: "Cześć",
        welcome: "Witamy w Petruxa Syndicate",
        aboutTitle: "O nas",
        about: "Jesteśmy elitarnym zespołem łączącym najlepszych graczy.",
        servicesTitle: "Nasze usługi",
        service1: "💻 Siła i wsparcie",
        service2: "🎉 Udział w dużych wydarzeniach",
        service3: "💰 Doradztwo finansowe",
        service4: "🌐 Możliwości rozwoju",
        service5: "🏅 Ekskluzywne przywileje",
        service6: "🚔Nasi ludzie dowodzą w LSPD, EMS, FIB. Prawo jest po naszej stronie",
        teamTitle: "Nasz zespół",
        team1: "Strateg i lider zespołu, odpowiedzialny za organizację i planowanie.",
        team2: "Ekspert w dziedzinie finansów, odpowiedzialny za strategiczne inwestycje i doradztwo.",
        achievementsTitle: "Nasze osiągnięcia",
        achievement1: "🏆 Przywództwo w strukturach rządowych",
        achievement2: "💼 Legendy w strukturach rządowych",
        achievement3: "🌍 🏍️ Przechwytywanie i porwania",
        achievement4: "🔐 Ochrona własności i pomoc w rozwiązywaniu problemów",
        contactTitle: "Skontaktuj się z nami",
        contactSubtitle: "Zawsze chętnie odpowiemy na Twoje pytania",
        contactInfoTitle: "Nasze kontakty",
        namePlaceholder: "Twoje imię",
        discordPlaceholder: "Twój Discord",
        messagePlaceholder: "Twoja wiadomość",
        send: "Wyślij",
        successMessage: "Wiadomość wysłana! Skontaktujemy się z Tobą wkrótce.",
        errorMessage: "Błąd podczas wysyłania wiadomości. Spróbuj ponownie.",
        joinTitle: "Wniosek o dołączenie do rodziny",
        realNameLabel: "Twoje imię: [OOC]",
        ageOOCLabel: "Ile masz lat? [OOC]",
        locationLabel: "Skąd jesteś? [OOC]",
        timezoneLabel: "Twoja strefa czasowa: [OOC]",
        timezonePlaceholder: "Na przykład, UTC+3",
        averageOnlineLabel: "Twój średni czas online:",
        selectTime: "Wybierz czas",
        "1-3": "1-3 godziny",
        "4-6": "4-6 godzin",
        "6-8": "6-8 godzin",
        "8+": "8 i więcej godzin",
        moveWithFamilyLabel: "Czy jesteś gotów poruszać się razem z rodziną?",
        selectAnswer: "Wybierz odpowiedź",
        yes: "Tak",
        no: "Nie",
        bestSkillLabel: "Co wychodzi Ci najlepiej?",
        selectSkill: "Wybierz umiejętność",
        shoot: "Strzelanie",
        contracts: "Wykonywanie kontraktów",
        communicate: "Komunikacja z ludźmi",
        leadership: "Wykazywanie cech przywódczych",
        observe: "Obserwowanie ludzi",
        other: "Inne",
        otherSkillLabel: "Podaj swoją opcję:",
        preferenceLabel: "Co wolisz:",
        selectPreference: "Wybierz preferencję",
        crime: "Przestępczość",
        gov: "Rząd",
        both: "Oba",
        previousOrganizationsLabel: "W jakich organizacjach wcześniej byłeś:",
        discordLabel: "Twój Discord:",
        lawsTitle: "Prawa Syndykatu",
        icLawsTitle: "IC Prawa",
        icLaw1: "Przestrzegaj praw Los Santos, jeśli jesteś w LSPD, EMS lub FIB.",
        icLaw2: "Szanuj starszych rangą w syndykacie.",
        icLaw3: "Nie zdradzaj rodziny dla osobistych korzyści.",
        icLaw4: "Wszystkie operacje uzgadniaj z kierownictwem.",
        oocLawsTitle: "OOC Zasady",
        oocLaw1: "Zabronione jest używanie cheatów i błędów.",
        oocLaw2: "Przestrzegaj zasad serwera RP.",
        oocLaw3: "Szanuj innych graczy niezależnie od roli.",
        oocLaw4: "Zgłaszaj problemy administracji.",
        footer: "© 2025 Wszystkie prawa zastrzeżone."
    }
};

// Функция для установки языка
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    applyLanguage(lang);
}

// Применение языка на странице
function applyLanguage(lang) {
    const trans = translations[lang];

    // Перевод элементов с data-lang
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (trans[key]) {
            element.textContent = trans[key];
        }
    });

    // Перевод плейсхолдеров
    document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
        const key = element.getAttribute('data-lang-placeholder');
        if (trans[key]) {
            element.placeholder = trans[key];
        }
    });

    // Перевод заголовков и текстов по id
    const pageId = document.body.id;
    if (pageId === 'index') {
        document.querySelector("#greeting").textContent = trans.greeting;
        document.querySelector("#welcome").textContent = trans.welcome;
        document.querySelector("#about-title").textContent = trans.aboutTitle;
        document.querySelector("#about-text").textContent = trans.about;
        document.querySelector("#services-title").textContent = trans.servicesTitle;
        document.querySelector("#team-title").textContent = trans.teamTitle;
        document.querySelector("#achievements-title").textContent = trans.achievementsTitle;
    } else if (pageId === 'contact') {
        document.querySelector("#contact-title").textContent = trans.contactTitle;
        document.querySelector("#contact-subtitle").textContent = trans.contactSubtitle;
        document.querySelector("#contact-info-title").textContent = trans.contactInfoTitle;
    } else if (pageId === 'join') {
        document.querySelector("#join-title").textContent = trans.joinTitle;
    } else if (pageId === 'laws') {
        document.querySelector("#laws-title").textContent = trans.lawsTitle;
        document.querySelector("#ic-laws-title").textContent = trans.icLawsTitle;
        document.querySelector("#ooc-laws-title").textContent = trans.oocLawsTitle;
    }
}

// Анимация печатной машинки для заголовков
function typeWriter(element, text, speed = 100) {
    element.textContent = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Слушаем событие при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('transitionOverlay');
    overlay.style.transition = 'all 0.6s ease';
    overlay.style.opacity = '0';
    overlay.style.transform = 'scale(0)';

    // Применяем сохранённый язык
    let savedLang = localStorage.getItem('language') || 'ru';
    applyLanguage(savedLang);

    // Анимация заголовков
    const title = document.querySelector('.cyber-title');
    if (title) {
        const text = translations[savedLang][document.body.id === 'index' ? 'greeting' : document.body.id + 'Title'];
        typeWriter(title, text);
    }

    // Показ/скрытие выпадающего списка языков
    const langSelector = document.getElementById('language-selector');
    const langDropdown = document.getElementById('language-dropdown');
    langSelector.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.style.display = langDropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Выбор языка из списка
    document.querySelectorAll('#language-dropdown a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang-code');
            setLanguage(lang);
            langDropdown.style.display = 'none';
            // Перезапуск анимации заголовка при смене языка
            const title = document.querySelector('.cyber-title');
            if (title) {
                const text = translations[lang][document.body.id === 'index' ? 'greeting' : document.body.id + 'Title'];
                typeWriter(title, text);
            }
        });
    });

    // Закрытие списка при клике вне его
    document.addEventListener('click', (e) => {
        if (!langSelector.contains(e.target)) {
            langDropdown.style.display = 'none';
        }
    });

    // Переход по ссылкам с эффектом
    const links = document.querySelectorAll('.nav-link, .action-btn');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            overlay.classList.add('active');
            setTimeout(() => {
                window.location.href = link.getAttribute('href');
            }, 500);
        });
    });

    // Обработчик переключения видимости поля "Другое" в форме
    const select = document.getElementById('bestSkill');
    if (select) {
        select.addEventListener('change', function () {
            toggleOtherSkill(this);
        });
    }
});

// Функция для переключения видимости поля "Другое"
function toggleOtherSkill(select) {
    const otherSkillField = document.getElementById('otherSkillField');
    if (select.value === translations[localStorage.getItem('language') || 'ru'].other) {
        otherSkillField.style.display = 'block';
    } else {
        otherSkillField.style.display = 'none';
    }
}

// Функция обработки отправки формы (join.html)
async function submitForm(event) {
    event.preventDefault();
    const form = document.getElementById('join-form');
    const status = document.getElementById('status');
    const currentLang = localStorage.getItem('language') || 'ru';

    const formData = new FormData(form);
    const data = {
        realName: formData.get('realName'),
        ageOOC: formData.get('ageOOC'),
        location: formData.get('location'),
        timezone: formData.get('timezone'),
        averageOnline: formData.get('averageOnline'),
        moveWithFamily: formData.get('moveWithFamily'),
        bestSkill: formData.get('bestSkill'),
        otherSkillInput: formData.get('otherSkillInput') || translations[currentLang].notSpecified,
        preference: formData.get('preference'),
        previousOrganizations: formData.get('previousOrganizations'),
        discord: formData.get('discord')
    };

    const discordMessage = {
        content: translations[currentLang].newApplication,
        embeds: [
            {
                title: translations[currentLang].applicationTitle,
                color: 0xFF00FF,
                fields: [
                    { name: translations[currentLang].realNameLabel, value: `${data.realName}\n`, inline: false },
                    { name: translations[currentLang].ageOOCLabel, value: `${data.ageOOC}\n`, inline: false },
                    { name: translations[currentLang].locationLabel, value: `${data.location}\n`, inline: false },
                    { name: translations[currentLang].timezoneLabel, value: `${data.timezone}\n`, inline: false },
                    { name: translations[currentLang].averageOnlineLabel, value: `${translations[currentLang][data.averageOnline]}\n`, inline: false },
                    { name: translations[currentLang].moveWithFamilyLabel, value: `${translations[currentLang][data.moveWithFamily.toLowerCase()]}\n`, inline: false },
                    { name: translations[currentLang].bestSkillLabel, value: `${data.bestSkill === translations[currentLang].other ? data.otherSkillInput : translations[currentLang][data.bestSkill.toLowerCase()]}\n`, inline: false },
                    { name: translations[currentLang].preferenceLabel, value: `${translations[currentLang][data.preference.toLowerCase()]}\n`, inline: false },
                    { name: translations[currentLang].previousOrganizationsLabel, value: `${data.previousOrganizations}\n`, inline: false },
                    { name: translations[currentLang].discordLabel, value: `${data.discord}\n`, inline: false }
                ],
                timestamp: new Date().toISOString()
            }
        ]
    };

    try {
        const response = await fetch('https://discord.com/api/webhooks/1358163732575813772/wo34Y5sGiRIH9DhGbi9mGUUOHd2RHn-3XHnZWko6PUpAz-TRGaKsTkk8CfwH2_gGABL9', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(discordMessage)
        });

        if (response.ok) {
            status.textContent = translations[currentLang].successMessage;
            form.reset();
            document.getElementById('otherSkillField').style.display = 'none';
        } else {
            status.textContent = translations[currentLang].errorMessage;
            status.style.color = '#ff0000';
        }
    } catch (error) {
        status.textContent = translations[currentLang].errorMessage + ': ' + error.message;
        status.style.color = '#ff0000';
    }
}

// Дополнительные переводы для функции submitForm
translations.en.notSpecified = "Not specified";
translations.ru.notSpecified = "Не указано";
translations.uk.notSpecified = "Не вказано";
translations.pl.notSpecified = "Nie określono";
translations.en.newApplication = "New application to join the Family!";
translations.ru.newApplication = "Новая заявка на присоединение в Семью!";
translations.uk.newApplication = "Нова заявка на приєднання до Сім'ї!";
translations.pl.newApplication = "Nowy wniosek o dołączenie do Rodziny!";
translations.en.applicationTitle = "Application to Join";
translations.ru.applicationTitle = "Заявка на вступление";
translations.uk.applicationTitle = "Заявка на вступ";
translations.pl.applicationTitle = "Wniosek o dołączenie";