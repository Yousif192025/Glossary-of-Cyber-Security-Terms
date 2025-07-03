// بيانات المصطلحات (أضفت بعض المصطلحات الجديدة وفئات جديدة)
const terms = [
    {
        term: "التصيد (Phishing)",
        definition: "هو هجوم إلكتروني يستخدم فيه المهاجمون رسائل بريد إلكتروني أو مواقع ويب مزيفة لخداع الضحايا وإغرائهم بتقديم معلومات حساسة مثل كلمات المرور أو أرقام البطاقات الائتمانية.",
        category: "hacking",
        example: "رسالة بريد إلكتروني تبدو وكأنها من البنك تطلب تحديث معلومات الحساب."
    },
    {
        term: "برمجية الفدية (Ransomware)",
        definition: "هو نوع من البرمجيات الخبيثة التي تقوم بتشفير ملفات الضحية وطلب فدية مالية مقابل فك التشفير.",
        category: "malware",
        example: "برنامج WannaCry الذي أصاب مئات الآلاف من الأجهزة حول العالم في 2017."
    },
    {
        term: "جدار الحماية (Firewall)",
        definition: "هو نظام أمان يتحكم في حركة مرور الشبكة الواردة والصادرة بناءً على قواعد أمان محددة مسبقًا.",
        category: "network",
        example: "أداة تمنع الوصول غير المصرح به إلى شبكة المؤسسة من الإنترنت."
    },
    {
        term: "التصيد المستهدف (Spear Phishing)",
        definition: "هو هجوم تصيد يركز على هدف معين (فرد أو منظمة) ويستخدم معلومات شخصية لزيادة فرص النجاح.",
        category: "hacking",
        example: "رسالة بريد إلكتروني موجهة لمدير مالي تبدو وكأنها من الرئيس التنفيذي تطلب تحويل أموال."
    },
    {
        term: "التصيد بالرمح (Whaling)",
        definition: "هو نوع من التصيد المستهدف يستهدف كبار المسؤولين التنفيذيين أو الشخصيات المهمة في المنظمة.",
        category: "hacking",
        example: "هجوم يستهدف الرئيس التنفيذي للشركة بادعاء وجود مشكلة قانونية تتطلب تحويل أموال."
    },
    {
        term: "هندسة اجتماعية (Social Engineering)",
        definition: "هو تكتيك يستخدمه المهاجمون لخداع الأشخاص لكشف معلومات سرية أو القيام بأفعال معينة.",
        category: "hacking",
        example: "الاتصال بالضحية وادعاء أن المتصل من قسم الدعم الفني ويطلب كلمة المرور."
    },
    {
        term: "برمجية خبيثة (Malware)",
        definition: "هو مصطلح عام يشير إلى أي برنامج مصمم لإلحاق الضرر بجهاز كمبيوتر أو شبكة أو مستخدم.",
        category: "malware",
        example: "الفيروسات، الديدان، أحصنة طروادة، برمجيات الفدية."
    },
    {
        term: "حصان طروادة (Trojan Horse)",
        definition: "هو نوع من البرمجيات الخبيثة التي تتنكر في صورة برنامج شرعي لخداع المستخدمين لتنزيلها وتشغيلها.",
        category: "malware",
        example: "برنامج يبدو كبرنامج تشغيل فيديو مجاني ولكنه في الواقع يثبت برنامج تجسس على الجهاز."
    },
    {
        term: "هجوم رفض الخدمة (DoS Attack)",
        definition: "هو هجوم يهدف إلى جعل خدمة أو مورد غير متاح للمستخدمين المقصودين.",
        category: "network",
        example: "إغراق خادم ويب بطلبات كثيرة جدًا بحيث لا يستطيع معالجة الطلبات الشرعية."
    },
    {
        term: "هجوم رفض الخدمة الموزع (DDoS Attack)",
        definition: "هو هجوم DoS يستخدم أجهزة متعددة (غالبًا ما تكون جزءًا من شبكة من الأجهزة المخترقة تسمى البوت نت) لإغراق الهدف بحركة مرور زائفة.",
        category: "network",
        example: "هجوم على موقع حكومي باستخدام آلاف الأجهزة المخترقة حول العالم."
    },
    {
        term: "التشفير (Encryption)",
        definition: "هو عملية تحويل المعلومات إلى شكل غير قابل للقراءة لمنع الوصول غير المصرح به إليها.",
        category: "encryption",
        example: "تشفير رسائل البريد الإلكتروني باستخدام بروتوكول PGP لحماية خصوصية المراسلات."
    },
    {
        term: "نفق VPN (Virtual Private Network)",
        definition: "هو تقنية تخلق اتصالاً مشفرًا عبر شبكة عامة لتوفير اتصال آمن وخاص.",
        category: "encryption",
        example: "استخدام VPN عند الاتصال بشبكة واي فاي عامة لحماية البيانات من المتطفلين."
    },
    {
        term: "ثغرة أمنية (Vulnerability)",
        definition: "نقطة ضعف في نظام أو برنامج يمكن للمهاجم استغلالها للوصول غير المصرح به أو تنفيذ عمليات ضارة.",
        category: "vulnerability",
        example: "خطأ برمجي في نظام تشغيل يسمح للمتسلل بتنفيذ تعليمات برمجية عن بعد."
    },
    {
        term: "باتش (Patch)",
        definition: "تحديث برنامج أو نظام لإصلاح الأخطاء أو الثغرات الأمنية.",
        category: "vulnerability",
        example: "تطبيق باتش أمني على نظام التشغيل لإغلاق ثغرة مكتشفة حديثًا."
    },
    {
        term: "قانون حماية البيانات العامة (GDPR)",
        definition: "لائحة في الاتحاد الأوروبي تحكم كيفية جمع وتخزين ومعالجة البيانات الشخصية للمواطنين الأوروبيين.",
        category: "compliance",
        example: "شركة تتأكد من أن أنظمة جمع بيانات العملاء تتوافق مع متطلبات GDPR."
    },
    {
        term: "PCI DSS",
        definition: "معيار أمان بيانات صناعة بطاقات الدفع، وهو مجموعة من المتطلبات الأمنية التي يجب على المؤسسات الالتزام بها لحماية بيانات حاملي البطاقات.",
        category: "compliance",
        example: "متجر تجزئة يطبق معايير PCI DSS لحماية معلومات بطاقات ائتمان العملاء."
    }
];

// أسئلة الاختبار (أضفت المزيد من الأسئلة)
const quizQuestions = [
    {
        question: "ما هو الهجوم الذي يستخدم رسائل بريد إلكتروني مزيفة لخداع الضحايا؟",
        options: ["برمجية الفدية", "التصيد (Phishing)", "هجوم رفض الخدمة", "حصان طروادة"],
        correctAnswer: 1
    },
    {
        question: "أي من هذه الأنواع يصنف كبرمجية خبيثة؟",
        options: ["جدار الحماية", "VPN", "برمجية الفدية (Ransomware)", "التشفير"],
        correctAnswer: 2
    },
    {
        question: "ما هو الغرض الأساسي من جدار الحماية (Firewall)؟",
        options: [
            "تشفير البيانات",
            "منع الوصول غير المصرح به للشبكة",
            "خداع المستخدمين لكشف معلومات",
            "طلب فدية مالية"
        ],
        correctAnswer: 1
    },
    {
        question: "ما الفرق الرئيسي بين هجوم DoS و DDoS؟",
        options: [
            "لا يوجد فرق بينهما",
            "DoS يستهدف الأفراد بينما DDoS يستهدف المؤسسات",
            "DoS يأتي من مصدر واحد بينما DDoS يأتي من مصادر متعددة",
            "DoS يستخدم لسرقة البيانات بينما DDoS لشل الخدمات"
        ],
        correctAnswer: 2
    },
    {
        question: "ما المصطلح الذي يشير إلى نقطة ضعف في نظام يمكن استغلالها؟",
        options: ["التشفير", "باتش", "ثغرة أمنية (Vulnerability)", "جدار الحماية"],
        correctAnswer: 2
    },
    {
        question: "ما هي اللائحة الأوروبية التي تحكم خصوصية البيانات؟",
        options: ["PCI DSS", "ISO 27001", "GDPR", "HIPAA"],
        correctAnswer: 2
    }
];

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // عرض المصطلحات
    renderTerms(terms);
    
    // إعداد فلتر الفئات
    setupCategoryFilters();
    
    // إعداد البحث
    setupSearch();
    
    // إعداد الاختبار
    setupQuiz();
    
    // إعداد أزرار المشاركة
    setupShareButtons();

    // إعداد Mega Menu للتفاعل (مثال بسيط، يحتاج لتطوير JS كامل)
    setupMegaMenu();
});

// دالة لعرض المصطلحات
function renderTerms(termsToRender) {
    const container = document.getElementById('termsContainer');
    container.innerHTML = '';
    
    if (termsToRender.length === 0) {
        container.innerHTML = '<p style="text-align: center; font-size: 1.3rem; color: #6c757d; margin-top: 50px;">لا توجد مصطلحات مطابقة لمعايير البحث أو الفلترة.</p>';
        return;
    }

    termsToRender.forEach(term => {
        const termCard = document.createElement('div');
        termCard.className = 'term-card';
        
        termCard.innerHTML = `
            <div class="term-header">
                <h3>${term.term}</h3>
                <span class="category">${getCategoryName(term.category)}</span>
            </div>
            <div class="term-body">
                <p>${term.definition}</p>
                <div class="example">
                    <strong>مثال:</strong> ${term.example}
                </div>
            </div>
        `;
        
        container.appendChild(termCard);
    });
}

// دالة للحصول على اسم الفئة
function getCategoryName(category) {
    const categories = {
        'hacking': 'الاختراق',
        'malware': 'البرمجيات الخبيثة',
        'network': 'أمن الشبكات',
        'encryption': 'التشفير',
        'vulnerability': 'الثغرات الأمنية',
        'compliance': 'الامتثال',
        'general': 'عام' // Fallback for undefined categories
    };
    return categories[category] || 'عام';
}

// إعداد فلتر الفئات
function setupCategoryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const megaMenuCategoryLinks = document.querySelectorAll('.mega-menu a[data-category-filter]');
    
    // Function to apply filter
    const applyFilter = (category) => {
        // Remove active from all filter buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active to the clicked button
        document.querySelector(`.filter-btn[data-category="${category}"]`)?.classList.add('active');

        // Filter and render terms
        if (category === 'all') {
            renderTerms(terms);
        } else {
            const filteredTerms = terms.filter(term => term.category === category);
            renderTerms(filteredTerms);
        }
    };

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            applyFilter(category);
        });
    });

    megaMenuCategoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            const category = this.dataset.categoryFilter;
            applyFilter(category);
            // Optionally close mega menu here
        });
    });
}

// إعداد البحث
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        if (searchTerm.trim() === '') {
            renderTerms(terms);
            return;
        }
        
        const filteredTerms = terms.filter(term => {
            return term.term.toLowerCase().includes(searchTerm) || 
                   term.definition.toLowerCase().includes(searchTerm) ||
                   (term.example && term.example.toLowerCase().includes(searchTerm)); // Search in example too
        });
        
        renderTerms(filteredTerms);
    });
}

// إعداد الاختبار
function setupQuiz() {
    let currentQuestionIndex = 0;
    const quizQuestionEl = document.getElementById('quizQuestion');
    const quizOptionsEl = document.getElementById('quizOptions');
    const quizResultEl = document.getElementById('quizResult');
    const nextQuestionBtn = document.getElementById('nextQuestionBtn');
    let score = 0; // Initialize score

    // Shuffle questions and options for a better experience
    const shuffledQuestions = shuffleArray(quizQuestions);
    shuffledQuestions.forEach(q => q.options = shuffleArray(q.options));
    
    // عرض السؤال الأول
    showQuestion(currentQuestionIndex);
    
    // دالة لعرض السؤال
    function showQuestion(index) {
        if (index >= shuffledQuestions.length) {
            displayFinalResult();
            return;
        }
        
        const question = shuffledQuestions[index];
        quizQuestionEl.textContent = question.question;
        quizOptionsEl.innerHTML = '';
        quizResultEl.textContent = '';
        quizResultEl.className = 'quiz-result'; // Reset class
        
        nextQuestionBtn.textContent = 'السؤال التالي';
        nextQuestionBtn.style.display = 'inline-block'; // Ensure button is visible

        question.options.forEach((optionText, i) => {
            const optionEl = document.createElement('div');
            optionEl.className = 'quiz-option';
            optionEl.textContent = optionText;
            
            // Store the original index to check against correctAnswer later
            // This is a bit tricky with shuffling options. Better to store correct answer directly or its original text.
            // For simplicity, let's assume `question.options` is the *shuffled* options for *this specific question*.
            // We need to find the index of the *original correct answer text* within the *shuffled options*.
            const originalQuestion = quizQuestions.find(q => q.question === question.question);
            if (originalQuestion) {
                 // Find the index of the option text within the original question's options
                 // Then compare against the correct answer index of the original question.
                 // This ensures the correct answer is always correctly identified regardless of shuffle.
                optionEl.dataset.isCorrect = (optionText === originalQuestion.options[originalQuestion.correctAnswer]).toString();
            }

            optionEl.addEventListener('click', function() {
                checkAnswer(this, originalQuestion.correctAnswer);
            });
            
            quizOptionsEl.appendChild(optionEl);
        });
    }
    
    // دالة للتحقق من الإجابة
    function checkAnswer(selectedOptionElement, originalCorrectAnswerIndex) {
        const options = document.querySelectorAll('.quiz-option');
        
        // Disable all options after one is selected
        options.forEach(option => {
            option.style.pointerEvents = 'none';
        });
        
        const currentQuestion = shuffledQuestions[currentQuestionIndex];
        // Find the text of the correct answer from the *original* question structure
        const originalQuestion = quizQuestions.find(q => q.question === currentQuestion.question);
        const correctAnswerText = originalQuestion.options[originalQuestion.correctAnswer];

        if (selectedOptionElement.textContent === correctAnswerText) {
            selectedOptionElement.classList.add('correct');
            quizResultEl.textContent = 'إجابة صحيحة!';
            quizResultEl.classList.add('result-correct');
            score++; // Increment score for correct answer
        } else {
            selectedOptionElement.classList.add('incorrect');
            // Find and highlight the correct answer
            options.forEach(option => {
                if (option.textContent === correctAnswerText) {
                    option.classList.add('correct');
                }
            });
            quizResultEl.textContent = 'إجابة خاطئة!';
            quizResultEl.classList.add('result-incorrect');
        }
    }
    
    // دالة لعرض النتيجة النهائية
    function displayFinalResult() {
        quizQuestionEl.textContent = "انتهى الاختبار!";
        quizOptionsEl.innerHTML = "";
        quizResultEl.textContent = `لقد أجبت على ${score} سؤالًا بشكل صحيح من أصل ${shuffledQuestions.length}.`;
        quizResultEl.className = 'quiz-result';
        if (score === shuffledQuestions.length) {
            quizResultEl.classList.add('result-correct');
            quizResultEl.textContent += " ممتاز! جميع إجاباتك صحيحة.";
        } else if (score > shuffledQuestions.length / 2) {
            quizResultEl.classList.add('result-correct');
        } else {
            quizResultEl.classList.add('result-incorrect');
        }
        nextQuestionBtn.style.display = 'none';
    }

    // زر السؤال التالي
    nextQuestionBtn.addEventListener('click', function() {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    });

    // Fisher-Yates shuffle algorithm
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}

// إعداد أزرار المشاركة
function setupShareButtons() {
    const shareUrl = window.location.href;
    const title = 'قاموس مصطلحات الأمن السيبراني | مرجع شامل';
    
    document.getElementById('shareWhatsapp').addEventListener('click', function(e) {
        e.preventDefault();
        window.open(`https://wa.me/?text=${encodeURIComponent(title + ': ' + shareUrl)}`, '_blank');
    });
    
    document.getElementById('shareTwitter').addEventListener('click', function(e) {
        e.preventDefault();
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
    });
    
    document.getElementById('shareFacebook').addEventListener('click', function(e) {
        e.preventDefault();
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
    });
    
    document.getElementById('shareLink').addEventListener('click', function(e) {
        e.preventDefault();
        navigator.clipboard.writeText(shareUrl).then(() => {
            alert('تم نسخ الرابط إلى الحافظة!');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
}

// إعدادات ال Mega Menu
function setupMegaMenu() {
    const megaMenuItems = document.querySelectorAll('.navigation.primary .item.level1.children');

    megaMenuItems.forEach(item => {
        const link = item.querySelector('.link.level1');
        const megaMenu = item.querySelector('.mega-menu');

        if (link && megaMenu) {
            // Show on hover for desktop
            item.addEventListener('mouseenter', () => {
                if (window.innerWidth > 992) { // Only for desktop
                    megaMenu.style.display = 'flex'; // Use flex for layout
                }
            });
            item.addEventListener('mouseleave', () => {
                if (window.innerWidth > 992) {
                    megaMenu.style.display = 'none';
                }
            });

            // Basic click toggle for mobile (requires a more robust mobile menu logic)
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 992) {
                    e.preventDefault(); // Prevent default link behavior on mobile
                    megaMenu.style.display = megaMenu.style.display === 'flex' ? 'none' : 'flex';
                }
            });
        }
    });
}
