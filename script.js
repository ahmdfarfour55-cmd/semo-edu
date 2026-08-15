// Subjects & Lessons Data
const subjectsData = {
    arabic: {
        title: "📖 دروس اللغة العربية",
        lessons: [
            { title: "نشيدة الباخرة (إلقاء وقراءة)", badge: "فيديو تفاعلي" },
            { title: "قواعد الإملاء: الهمزة المتوسطة", badge: "شرح + تمارين" },
            { title: "فهم المنطوق: رحلة إلى البحر", badge: "صوتي" },
            { title: "الإعراب المبسط: الجملة الاسمية", badge: "ورقة عمل" }
        ]
    },
    math: {
        title: "📐 دروس الرياضيات",
        lessons: [
            { title: "جدول الضرب والعمليات السريعة", badge: "اختبار تفاعلي" },
            { title: "الأشكال الهندسية والمحيط", badge: "فيديو" },
            { title: "حل المسائل الكلامية بذكاء", badge: "تمارين" },
            { title: "مفهوم الكسور والأعداد العشرية", badge: "بطاقات تعليمية" }
        ]
    },
    science: {
        title: "🔬 دروس العلوم والبيئة",
        lessons: [
            { title: "دورة حياة النباتات بالتفصيل", badge: "تجربة عملية" },
            { title: "الحواس الخمس ووظائفها", badge: "فيديو أنيميشن" },
            { title: "الكواكب والمجموعة الشمسية", badge: "عرض ثلاثي الأبعاد" },
            { title: "أهمية الماء وكيفية ترشيده", badge: "نشاط بيئي" }
        ]
    }
};

// Modal Elements
const modal = document.getElementById('subjectModal');
const modalTitle = document.getElementById('modalTitle');
const modalLessons = document.getElementById('modalLessons');

// Open Modal Function
function openSubject(subjectKey) {
    const data = subjectsData[subjectKey];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalLessons.innerHTML = '';

    data.lessons.forEach(lesson => {
        const li = document.createElement('li');
        li.className = 'lesson-item';

        const titleSpan = document.createElement('span');
        titleSpan.textContent = lesson.title;

        const badgeSpan = document.createElement('span');
        badgeSpan.className = 'lesson-badge';
        badgeSpan.textContent = lesson.badge;

        li.appendChild(titleSpan);
        li.appendChild(badgeSpan);

        modalLessons.appendChild(li);
    });

    modal.classList.add('active');
}

// Close Modal Function
function closeModal() {
    modal.classList.remove('active');
}

// Close Modal when clicking outside content
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};

// Add New Comment Dynamically
function addComment(e) {
    e.preventDefault();
    const name = document.getElementById('authorName').value;
    const rating = document.getElementById('rating').value;
    const text = document.getElementById('commentContent').value;

    const commentsContainer = document.getElementById('commentsContainer');
    const newComment = document.createElement('div');
    newComment.className = 'comment-card';

    const header = document.createElement('div');
    header.className = 'comment-header';

    const authorSpan = document.createElement('span');
    authorSpan.className = 'comment-author';
    authorSpan.textContent = name;

    const ratingSpan = document.createElement('span');
    ratingSpan.className = 'stars';
    ratingSpan.textContent = rating;

    header.appendChild(authorSpan);
    header.appendChild(ratingSpan);

    const commentParagraph = document.createElement('p');
    commentParagraph.className = 'comment-text';
    commentParagraph.textContent = text;

    newComment.appendChild(header);
    newComment.appendChild(commentParagraph);

    commentsContainer.prepend(newComment);
    document.getElementById('commentForm').reset();
    alert('تم إضافة تعليقك بنجاح! شكراً لمشاركتك.');
}
