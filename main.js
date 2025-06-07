// Language system with complete translations
const translations = {
  ar: {
    // Platform
    'الموجه': 'الموجه',
    'منصة تعليمية متطورة': 'منصة تعليمية متطورة',
    
    // Menu items
    'النشرات التربوية': 'النشرات التربوية',
    'تدريبات وورش عمل': 'تدريبات وورش عمل',
    'تدريس مصغر': 'تدريس مصغر',
    'تغذية راجعة وجلسات انعكاسية': 'تغذية راجعة وجلسات انعكاسية',
    'قرأت لك': 'قرأت لك',
    'الموجه يتعلم': 'الموجه يتعلم',
    
    // Section descriptions
    'مجموعة من النشرات والمشاريع التعليمية المتنوعة': 'مجموعة من النشرات والمشاريع التعليمية المتنوعة',
    'ورش عمل تفاعلية لتطوير مهارات التعليم والتدريب': 'ورش عمل تفاعلية لتطوير مهارات التعليم والتدريب',
    'مشاريع تعليمية مصغرة لتطوير مهارات التدريس': 'مشاريع تعليمية مصغرة لتطوير مهارات التدريس',
    'ممارسات انعكاسية لتحسين الأداء التعليمي': 'ممارسات انعكاسية لتحسين الأداء التعليمي',
    'ملخصات وقراءات تعليمية منتقاة': 'ملخصات وقراءات تعليمية منتقاة',
    'موارد تعليمية وأفكار تطويرية للموجهين': 'موارد تعليمية وأفكار تطويرية للموجهين',
    
    // Content
    'استراتيجيات التعلم النشط': 'استراتيجيات التعلم النشط',
    'دليل شامل لتطبيق استراتيجيات التعلم النشط في الفصول الدراسية': 'دليل شامل لتطبيق استراتيجيات التعلم النشط في الفصول الدراسية',
    'تقنيات التقييم الحديثة': 'تقنيات التقييم الحديثة',
    'أساليب متطورة لتقييم الطلاب وقياس مخرجات التعلم': 'أساليب متطورة لتقييم الطلاب وقياس مخرجات التعلم',
    'إدارة الصف الفعالة': 'إدارة الصف الفعالة',
    'تقنيات وأساليب إدارة الصف لبيئة تعليمية محفزة': 'تقنيات وأساليب إدارة الصف لبيئة تعليمية محفزة',
    
    // Actions
    'تحميل': 'تحميل',
    'عرض التفاصيل': 'عرض التفاصيل',
    'English': 'English'
  },
  
  en: {
    // Platform
    'الموجه': 'Al-Muwajih',
    'منصة تعليمية متطورة': 'Advanced Educational Platform',
    
    // Menu items
    'النشرات التربوية': 'Educational Bulletins',
    'تدريبات وورش عمل': 'Workshops & Training',
    'تدريس مصغر': 'Microteaching',
    'تغذية راجعة وجلسات انعكاسية': 'Feedback & Reflective Sessions',
    'قرأت لك': 'I Read for You',
    'الموجه يتعلم': 'Al-Muwajih Learns',
    
    // Section descriptions
    'مجموعة من النشرات والمشاريع التعليمية المتنوعة': 'A collection of diverse educational bulletins and projects',
    'ورش عمل تفاعلية لتطوير مهارات التعليم والتدريب': 'Interactive workshops for developing teaching and training skills',
    'مشاريع تعليمية مصغرة لتطوير مهارات التدريس': 'Micro-educational projects for developing teaching skills',
    'ممارسات انعكاسية لتحسين الأداء التعليمي': 'Reflective practices to improve educational performance',
    'ملخصات وقراءات تعليمية منتقاة': 'Selected educational summaries and readings',
    'موارد تعليمية وأفكار تطويرية للموجهين': 'Educational resources and developmental ideas for supervisors',
    
    // Content
    'استراتيجيات التعلم النشط': 'Active Learning Strategies',
    'دليل شامل لتطبيق استراتيجيات التعلم النشط في الفصول الدراسية': 'Comprehensive guide for implementing active learning strategies in classrooms',
    'تقنيات التقييم الحديثة': 'Modern Assessment Techniques',
    'أساليب متطورة لتقييم الطلاب وقياس مخرجات التعلم': 'Advanced methods for student assessment and learning outcome measurement',
    'إدارة الصف الفعالة': 'Effective Classroom Management',
    'تقنيات وأساليب إدارة الصف لبيئة تعليمية محفزة': 'Classroom management techniques for a motivating educational environment',
    
    // Actions
    'تحميل': 'Download',
    'عرض التفاصيل': 'View Details',
    'العربية': 'Arabic'
  }
};

// Current language state
let currentLanguage = 'ar';

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize navigation
  initializeNavigation();
  
  // Initialize language toggle
  initializeLanguageToggle();
  
  // Set initial language
  updateLanguage();
});

function initializeNavigation() {
  const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
  const contentSections = document.querySelectorAll('.content-section');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
      
      // Hide all content sections
      contentSections.forEach(section => section.classList.remove('active'));
      
      // Show target section
      const targetSection = this.getAttribute('data-section');
      const targetElement = document.getElementById(targetSection);
      if (targetElement) {
        targetElement.classList.add('active');
      }
    });
  });
}

function initializeLanguageToggle() {
  const languageToggle = document.getElementById('languageToggle');
  
  languageToggle.addEventListener('click', function() {
    // Toggle language
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    
    // Update language
    updateLanguage();
  });
}

function updateLanguage() {
  const htmlElement = document.documentElement;
  const bodyElement = document.body;
  
  // Update HTML lang and dir attributes
  if (currentLanguage === 'ar') {
    htmlElement.setAttribute('lang', 'ar');
    htmlElement.setAttribute('dir', 'rtl');
    bodyElement.setAttribute('dir', 'rtl');
  } else {
    htmlElement.setAttribute('lang', 'en');
    htmlElement.setAttribute('dir', 'ltr');
    bodyElement.setAttribute('dir', 'ltr');
  }
  
  // Update all elements with data attributes
  const elementsWithTranslations = document.querySelectorAll('[data-ar][data-en]');
  
  elementsWithTranslations.forEach(element => {
    const arabicText = element.getAttribute('data-ar');
    const englishText = element.getAttribute('data-en');
    
    if (currentLanguage === 'ar') {
      element.textContent = arabicText;
    } else {
      element.textContent = englishText;
    }
  });
  
  // Update page title
  if (currentLanguage === 'ar') {
    document.title = 'الموجه - منصة تعليمية متطورة';
  } else {
    document.title = 'Al-Muwajih - Advanced Educational Platform';
  }
  
  // Add smooth transition effect
  bodyElement.style.transition = 'all 0.3s ease';
  
  // Update language toggle button text
  const langToggleSpan = document.querySelector('.language-toggle .lang-text');
  if (currentLanguage === 'ar') {
    langToggleSpan.textContent = 'English';
  } else {
    langToggleSpan.textContent = 'العربية';
  }
}

// Add smooth scrolling and animation effects
function addAnimationEffects() {
  // Intersection Observer for fade-in animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });
  
  // Observe all cards and content items
  const animatedElements = document.querySelectorAll(
    '.project-card, .workshop-card, .microteaching-card, .feedback-item, .reading-card, .learning-item'
  );
  
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
  });
}

// Initialize animation effects when DOM is loaded
document.addEventListener('DOMContentLoaded', addAnimationEffects);

// Add hover sound effects (optional - can be commented out)
function addHoverEffects() {
  const interactiveElements = document.querySelectorAll(
    '.nav-link, .btn, .project-card, .workshop-card, .microteaching-card'
  );
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.style.transform = this.style.transform || 'translateY(0)';
    });
  });
}

// Initialize hover effects
document.addEventListener('DOMContentLoaded', addHoverEffects);

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
  if (e.key === 'Tab') {
    // Add focus indicators for keyboard navigation
    document.body.classList.add('keyboard-navigation');
  }
});

// Remove keyboard navigation class on mouse use
document.addEventListener('mousedown', function() {
  document.body.classList.remove('keyboard-navigation');
});

// Additional accessibility features
function enhanceAccessibility() {
  // Add ARIA labels for better screen reader support
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link, index) => {
    link.setAttribute('role', 'button');
    link.setAttribute('tabindex', '0');
    link.setAttribute('aria-expanded', link.classList.contains('active') ? 'true' : 'false');
  });
  
  // Add keyboard support for navigation
  navLinks.forEach(link => {
    link.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
}

// Initialize accessibility enhancements
document.addEventListener('DOMContentLoaded', enhanceAccessibility);