document.addEventListener('DOMContentLoaded', () => {
    // بيانات المصطلحات (يمكنك إضافة المزيد هنا)
    const terms = [
        {
            title: "هجوم التصيد الاحتيالي (Phishing)",
            description: "محاولة الحصول على معلومات حساسة مثل أسماء المستخدمين وكلمات المرور وتفاصيل بطاقة الائتمان، غالبًا لأغراض خبيثة، عن طريق التنكر ككيان موثوق به في اتصال إلكتروني.",
            category: "hacking"
        },
        {
            title: "برامج الفدية (Ransomware)",
            description: "نوع من البرامج الضارة التي تهدد بنشر بيانات الضحية أو حجب الوصول الدائم إليها ما لم يتم دفع فدية (عادةً بالعملة المشفرة).",
            category: "malware"
        },
        {
            title: "جدار الحماية (Firewall)",
            description: "نظام أمان للشبكة يراقب ويتحكم في حركة مرور الشبكة الواردة والصادرة بناءً على قواعد الأمان المحددة مسبقًا.",
            category: "network"
        },
        {
            title: "التشفير (Encryption)",
            description: "عملية تحويل المعلومات أو البيانات إلى رمز لمنع الوصول غير المصرح به.",
            category: "encryption"
        },
        {
            title: "الثغرة الأمنية (Vulnerability)",
            description: "ضعف في نظام الكمبيوتر، أو الشبكة، أو البرنامج، أو الإجراءات، يمكن استغلاله من قبل مهاجم لإلحاق الضرر بالنظام أو الحصول على وصول غير مصرح به.",
            category: "vulnerability"
        },
        {
            title: "هندسة اجتماعية (Social Engineering)",
            description: "فن التلاعب بالناس بحيث يتخلون عن معلومات سرية. تستخدم الأساليب الخبيثة لإقناع الضحايا بكسر الإجراءات الأمنية العادية.",
            category: "hacking"
        },
        {
            title: "برامج التجسس (Spyware)",
            description: "برنامج يجمع معلومات عن أنشطة المستخدم على الإنترنت دون علمه أو موافقته ويرسلها إلى جهة خارجية.",
            category: "malware"
        },
        {
            title: "شبكة افتراضية خاصة (VPN)",
            description: "تقنية تمكن المستخدمين من إرسال واستقبال البيانات عبر الشبكات العامة المشتركة أو العامة كما لو كانت أجهزتهم الحاسوبية متصلة مباشرة بالشبكة الخاصة.",
            category: "network"
        },
        {
            title: "المصادقة متعددة العوامل (MFA)",
            description: "طريقة مصادقة تتطلب من المستخدم تقديم عاملين أو أكثر للتحقق من الهوية من مجموعات مختلفة من بيانات الاعتماد.",
            category: "compliance"
        },
        {
            title: "هجوم حجب الخدمة الموزع (DDoS)",
            description: "محاولة لجعل خدمة أو مورد شبكة غير متاح للمستخدمين المقصودين عن طريق إغراقها بحركة مرور هائلة من مصادر متعددة.",
            category: "hacking"
        },
        {
            title: "حصان طروادة (Trojan Horse)",
            description: "برنامج ضار يتنكر في هيئة برنامج مشروع. يخدع المستخدمين لتثبيته، ثم يقوم بأنشطة ضارة مثل سرقة البيانات أو فتح باب خلفي للنظام.",
            category: "malware"
        },
        {
            title: "اختبار الاختراق (Penetration Testing)",
            description: "عملية محاكاة هجوم سيبراني ضد نظام كمبيوتر، أو شبكة، أو تطبيق ويب، أو أي أصول أخرى لتقييم أمنها.",
            category: "vulnerability"
        },
        {
            title: "المفتاح العام (Public Key)",
            description: "في التشفير غير المتماثل، المفتاح الذي يمكن مشاركته بشكل علني واستخدامه لتشفير الرسائل التي يمكن فك تشفيرها فقط باستخدام المفتاح الخاص المقابل.",
            category: "encryption"
        },
        {
            title: "المفتاح الخاص (Private Key)",
            description: "في التشفير غير المتماثل، المفتاح الذي يجب أن يظل سريًا ويستخدم لفك تشفير الرسائل التي تم تشفيرها بالمفتاح العام المقابل.",
            category: "encryption"
        },
        {
            title: "إدارة الهوية والوصول (IAM)",
            description: "إطار عمل للسياسات والتقنيات التي تضمن أن الأشخاص المناسبين لديهم الوصول المناسب إلى موارد الشركة في الأوقات المناسبة.",
            category: "compliance"
        }
    ];

    const termsContainer = document.getElementById('termsContainer');
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // وظيفة لعرض المصطلحات
    function displayTerms(filteredTerms) {
        termsContainer.innerHTML = ''; // مسح المصطلحات الموجودة
        if (filteredTerms.length === 0) {
            termsContainer.innerHTML = '<p class="no-results" style="text-align: center; grid-column: 1 / -1; color: var(--sans-dark-gray);">لا توجد مصطلحات مطابقة.</p>';
            return;
        }
        filteredTerms.forEach(term => {
            const termCard = document.createElement('div');
            termCard.classList.add('term-card');
            termCard.setAttribute('data-category', term.category);
            termCard.innerHTML = `
                <h3>${term.title}</h3>
                <p>${term.description}</p>
                <span class="category">${term.category}</span>
            `;
            termsContainer.appendChild(termCard);
        });
    }

    // وظيفة للبحث
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
        
        let filtered = terms.filter(term =>
            term.title.toLowerCase().includes(searchTerm) ||
            term.description.toLowerCase().includes(searchTerm)
        );

        if (activeCategory !== 'all') {
            filtered = filtered.filter(term => term.category === activeCategory);
        }
        displayTerms(filtered);
    });

    // وظيفة للتصفية حسب الفئة
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // إزالة حالة النشاط من كل الأزرار
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // إضافة حالة النشاط للزر الحالي
            e.target.classList.add('active');

            const category = e.target.dataset.category;
            const searchTerm = searchInput.value.toLowerCase();

            let filtered = terms.filter(term => {
                const matchesCategory = (category === 'all' || term.category === category);
                const matchesSearch = term.title.toLowerCase().includes(searchTerm) || term.description.toLowerCase().includes(searchTerm);
                return matchesCategory && matchesSearch;
            });
            displayTerms(filtered);
        });
    });

    // عرض جميع المصطلحات عند تحميل الصفحة لأول مرة
    displayTerms(terms);

    // --- جزء الاختبار (Quiz Section) ---
    const quizQuestions = [
        {
            question: "ما هو المصطلح الذي يشير إلى محاولة الحصول على معلومات حساسة عن طريق التنكر ككيان موثوق به؟",
            options: ["برامج الفدية", "التصيد الاحتيالي", "جدار الحماية", "حصان طروادة"],
            answer: "التصيد الاحتيالي"
        },
        {
            question: "ما نوع البرامج الضارة الذي يهدد بنشر البيانات أو حجب الوصول ما لم يتم دفع فدية؟",
            options: ["برامج التجسس", "حصان طروادة", "برامج الفدية", "برامج الإعلانات"],
            answer: "برامج الفدية"
        },
        {
            question: "أي مما يلي هو نظام أمان للشبكة يراقب ويتحكم في حركة مرور الشبكة؟",
            options: ["VPN", "جدار الحماية", "IPS", "Proxy"],
            answer: "جدار الحماية"
        },
        {
            question: "عملية تحويل المعلومات إلى رمز لمنع الوصول غير المصرح به تسمى؟",
            options: ["التشفير", "التجزئة", "التوقيع الرقمي", "المصادقة"],
            answer: "التشفير"
        },
        {
            question: "ما هو الضعف في نظام يمكن استغلاله من قبل مهاجم؟",
            options: ["التهديد", "الثغرة الأمنية", "المخاطرة", "الهجوم"],
            answer: "الثغرة الأمنية"
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const quizQuestionEl = document.getElementById('quizQuestion');
    const quizOptionsEl = document.getElementById('quizOptions');
    const nextQuestionBtn = document.getElementById('nextQuestionBtn');
    const quizResultEl = document.getElementById('quizResult');

    function loadQuestion() {
        if (currentQuestionIndex < quizQuestions.length) {
            const q = quizQuestions[currentQuestionIndex];
            quizQuestionEl.textContent = q.question;
            quizOptionsEl.innerHTML = '';
            quizResultEl.textContent = '';
            nextQuestionBtn.style.display = 'none';

            q.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.classList.add('btn-option');
                button.addEventListener('click', () => checkAnswer(button, option, q.answer));
                quizOptionsEl.appendChild(button);
            });
        } else {
            showQuizResult();
        }
    }

    function checkAnswer(selectedButton, selectedOption, correctAnswer) {
        // تعطيل جميع أزرار الخيارات بعد الاختيار
        Array.from(quizOptionsEl.children).forEach(button => button.disabled = true);

        if (selectedOption === correctAnswer) {
            selectedButton.classList.add('correct');
            quizResultEl.textContent = "إجابة صحيحة!";
            quizResultEl.style.color = "#28a745"; // لون أخضر
            score++;
        } else {
            selectedButton.classList.add('incorrect');
            quizResultEl.textContent = `إجابة خاطئة. الإجابة الصحيحة هي: ${correctAnswer}`;
            quizResultEl.style.color = "#dc3545"; // لون أحمر
            // ابحث عن الزر الصحيح وأضف له فئة correct
            Array.from(quizOptionsEl.children).forEach(button => {
                if (button.textContent === correctAnswer) {
                    button.classList.add('correct');
                }
            });
        }
        nextQuestionBtn.style.display = 'block'; // إظهار زر التالي
    }

    function showQuizResult() {
        quizQuestionEl.textContent = `انتهى الاختبار! حصلت على ${score} من ${quizQuestions.length} إجابات صحيحة.`;
        quizOptionsEl.innerHTML = '';
        quizResultEl.textContent = '';
        nextQuestionBtn.textContent = 'إعادة الاختبار';
        nextQuestionBtn.style.display = 'block';
        nextQuestionBtn.removeEventListener('click', nextQuestionHandler); // إزالة المستمع القديم
        nextQuestionBtn.addEventListener('click', resetQuiz); // إضافة مستمع جديد لإعادة الاختبار
    }

    function nextQuestionHandler() {
        currentQuestionIndex++;
        loadQuestion();
    }

    function resetQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextQuestionBtn.textContent = 'السؤال التالي';
        nextQuestionBtn.removeEventListener('click', resetQuiz); // إزالة مستمع إعادة الاختبار
        nextQuestionBtn.addEventListener('click', nextQuestionHandler); // إعادة المستمع الأصلي
        loadQuestion();
    }

    // إضافة المستمع لزر "السؤال التالي" لأول مرة
    nextQuestionBtn.addEventListener('click', nextQuestionHandler);

    // تحميل أول سؤال عند بدء تشغيل الصفحة
    loadQuestion();

    // --- وظائف المشاركة ---
    const shareWhatsapp = document.getElementById('shareWhatsapp');
    const shareTwitter = document.getElementById('shareTwitter');
    const shareFacebook = document.getElementById('shareFacebook');
    const shareLink = document.getElementById('shareLink');

    const pageTitle = document.title;
    const pageUrl = window.location.href; // رابط الصفحة الحالي

    shareWhatsapp.addEventListener('click', (e) => {
        e.preventDefault();
        const text = encodeURIComponent(`تصفح قاموس مصطلحات الأمن السيبراني: ${pageTitle}\n${pageUrl}`);
        window.open(`https://api.whatsapp.com/send?text=${text}`);
    });

    shareTwitter.addEventListener('click', (e) => {
        e.preventDefault();
        const text = encodeURIComponent(`قاموس شامل لمصطلحات الأمن السيبراني: ${pageTitle}`);
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(pageUrl)}`);
    });

    shareFacebook.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`);
    });

    shareLink.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(pageUrl);
            alert('تم نسخ رابط الصفحة!');
        } catch (err) {
            console.error('فشل النسخ:', err);
            // يمكنك توفير طريقة بديلة للنسخ هنا إذا فشل clipboard API
        }
    });

    // --- وظيفة القائمة المنسدلة (Mega Menu) - تعديل بسيط ---
    const menuItemsWithChildren = document.querySelectorAll('.navigation.primary .item.level1.children');

    menuItemsWithChildren.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const megaMenu = item.querySelector('.mega-menu');
            if (megaMenu) {
                megaMenu.style.display = 'flex'; // أظهر القائمة
            }
        });

        item.addEventListener('mouseleave', () => {
            const megaMenu = item.querySelector('.mega-menu');
            if (megaMenu) {
                megaMenu.style.display = 'none'; // أخفِ القائمة
            }
        });
    });

});
