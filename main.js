// تفعيل القائمة المتنقلة
const menuToggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');

if (menuToggle && navList) {
  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    
    // تبديل أيقونات القائمة
    const menuIcon = document.querySelector('.fa-bars');
    const closeIcon = document.querySelector('.fa-times');
    
    if (menuIcon && closeIcon) {
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    }
  });
}

// زر العودة للأعلى
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('active');
    } else {
      backToTopButton.classList.remove('active');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// تفعيل الأسئلة الشائعة
const faqItems = document.querySelectorAll('.faq-item');

if (faqItems.length > 0) {
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // إغلاق جميع الأسئلة المفتوحة
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          const icon = otherItem.querySelector('.toggle-icon i');
          if (icon) {
            icon.className = 'fas fa-plus';
          }
        }
      });
      
      // تبديل حالة السؤال الحالي
      item.classList.toggle('active');
      
      // تغيير الأيقونة
      const icon = item.querySelector('.toggle-icon i');
      if (icon) {
        if (item.classList.contains('active')) {
          icon.className = 'fas fa-minus';
        } else {
          icon.className = 'fas fa-plus';
        }
      }
    });
  });
}

// تفعيل التأثيرات الحركية عند التمرير
const animateElements = document.querySelectorAll('.animate-on-scroll');

if (animateElements.length > 0) {
  const checkVisibility = () => {
    animateElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.classList.add('visible');
      }
    });
  };
  
  // تحقق عند تحميل الصفحة
  window.addEventListener('load', checkVisibility);
  
  // تحقق عند التمرير
  window.addEventListener('scroll', checkVisibility);
}

// تفعيل نموذج الاتصال
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // هنا يمكن إضافة التحقق من صحة البيانات
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
      // إظهار رسالة نجاح (يمكن استبدالها بإرسال البيانات إلى الخادم)
      alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
      contactForm.reset();
    } else {
      alert('يرجى ملء جميع الحقول المطلوبة.');
    }
  });
}

// تفعيل نموذج النشرة البريدية
const newsletterForms = document.querySelectorAll('.newsletter-form');

if (newsletterForms.length > 0) {
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const emailInput = form.querySelector('input[type="email"]');
      
      if (emailInput && emailInput.value) {
        // إظهار رسالة نجاح
        alert('تم الاشتراك في النشرة البريدية بنجاح!');
        form.reset();
      } else {
        alert('يرجى إدخال بريد إلكتروني صحيح.');
      }
    });
  });
}

// تفعيل تأثيرات الأزرار
const buttons = document.querySelectorAll('.primary-button, .secondary-button, .service-button, .cta-button-large, .submit-button');

if (buttons.length > 0) {
  buttons.forEach(button => {
    button.classList.add('ripple');
  });
}

// تفعيل تأثيرات البطاقات
const cards = document.querySelectorAll('.product-card, .service-card, .feature-card, .testimonial-card');

if (cards.length > 0) {
  cards.forEach(card => {
    card.classList.add('card-hover-effect');
  });
}

// تفعيل تأثيرات الصور
const productImages = document.querySelectorAll('.product-image');

if (productImages.length > 0) {
  productImages.forEach(image => {
    image.classList.add('image-hover-zoom');
  });
}

// تفعيل تأثيرات الروابط
const links = document.querySelectorAll('.service-link, .footer-links a');

if (links.length > 0) {
  links.forEach(link => {
    link.classList.add('text-hover-underline');
  });
}

// تحديث السنة في حقوق النشر
const copyrightYear = document.querySelector('.copyright');

if (copyrightYear) {
  const currentYear = new Date().getFullYear();
  copyrightYear.textContent = copyrightYear.textContent.replace('2023', currentYear);
}

// تفعيل أزرار المنتجات
const actionButtons = document.querySelectorAll('.action-button');

if (actionButtons.length > 0) {
  actionButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const type = button.classList.contains('wishlist-btn') ? 'المفضلة' :
                  button.classList.contains('compare-btn') ? 'المقارنة' :
                  'سلة التسوق';
      
      alert(`تمت الإضافة إلى ${type} بنجاح!`);
    });
  });
}

// تفعيل تصفية المنتجات
const categorySelect = document.querySelector('.category-select');
const sortSelect = document.querySelector('.sort-select');

if (categorySelect && sortSelect) {
  categorySelect.addEventListener('change', () => {
    // هنا يمكن إضافة منطق تصفية المنتجات حسب الفئة
    const selectedCategory = categorySelect.value;
    alert(`تم اختيار الفئة: ${selectedCategory || 'جميع الفئات'}`);
  });
  
  sortSelect.addEventListener('change', () => {
    // هنا يمكن إضافة منطق ترتيب المنتجات
    const selectedSort = sortSelect.value;
    alert(`تم اختيار الترتيب: ${selectedSort}`);
  });
}

// تفعيل البحث
const searchForm = document.querySelector('.search-filter');

if (searchForm) {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const searchInput = searchForm.querySelector('.search-input');
    
    if (searchInput && searchInput.value) {
      alert(`جاري البحث عن: ${searchInput.value}`);
    } else {
      alert('يرجى إدخال كلمة للبحث.');
    }
  });
}

// تحميل الصفحة بتأثير جميل
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// إضافة تأثير التمرير السلس لجميع الروابط الداخلية
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});