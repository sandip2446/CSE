// Course data structure
const courseData = {
    "1st Semester (Year 1)": [
        { code: "COL100", title: "Introduction to Computer Science", ltp: "3-0-2", credits: 4, type: "DC", resources: "The C Programming Language (Brian W. Kernighan)|The C Programming Language (Brian W. Kernighan etc.) (Z-Library).pdf; Computer Science An Overview (Glenn Brookshear)|Computer Science An Overview (Glenn Brookshear) (Z-Library).pdf; Python Programming An Introduction to Computer Science (John M. Zelle)|Python Programming An Introduction to Computer Science (John M. Zelle) (Z-Library).pdf" },
        { code: "CYL110", title: "Physical Chemistry: Concepts and Applications", ltp: "3-1-0", credits: 4, type: "BS", resources: "Atkins physical chemistry 11th edition 2019 (Atkins Peter)|Atkins physical chemistry 11th edition 2019 (Atkins Peter) (Z-Library).pdf" },
        { code: "CYP100", title: "Chemistry Laboratory", ltp: "0-0-4", credits: 2, type: "BS", resources: "Chemistry The Central Science Value Pack|Chemistry The Central Science Value Pack (Includes Virtual ChemLab General Chemistry, Student Lab Manual  Workbook, V2.5 ... ( etc.) (Z-Library).mobi" },
        { code: "MAL111", title: "Introduction to Analysis and Differential Equations", ltp: "3-1-0", credits: 4, type: "BS", resources: "Thomas Calculus 13th Edition (George B. Thomas)|Thomas Calculus 13th Edition (George B. Thomas) (Z-Library).pdf" },
        { code: "AML110", title: "Engineering Mechanics", ltp: "3-0-2", credits: 4, type: "EAS", resources: "Engineering Mechanics Dynamics 9th Edition (Meriam, Kraige, Bolton)|Engineering Mechanics Dynamics 9th Edition (Meriam, Kraige, Bolton) (Z-Library).pdf" },
        { code: "HUN100", title: "Introduction to Humanities & Social Sciences", ltp: "2-0-0", credits: 2, type: "HSS", resources: "Course notes|Course notes" }
    ],
    "2nd Semester (Year 1)": [
        { code: "COL106", title: "Data Structures & Algorithms", ltp: "3-0-4", credits: 5, type: "DC", resources: "INTRODUCTION TO ALGORITHMS THIRD EDITION|INTRODUCTION TO ALGORITHMS THIRD EDITION (THOMAS, Cormen, Thomas H., Leiserson etc.) (Z-Library).pdf" },
        { code: "MAL124", title: "Introduction to Algebra and Matrix Analysis", ltp: "3-1-0", credits: 4, type: "BS", resources: "Linear Algebra and Its Applications|Linear Algebra and Its Applications, 3rd edition (Gilbert Strang) (Z-Library).pdf" },
        { code: "PHL110", title: "Fields and Waves", ltp: "3-1-0", credits: 4, type: "BS", resources: "Fundamentals of Physics|Fundamentals of Physics (David Halliday, Robert Resnick, Jearl Walker) (Z-Library).pdf" },
        { code: "PHP100", title: "Physics Laboratory", ltp: "0-0-4", credits: 2, type: "BS", resources: "Course notes|Course notes" },
        { code: "EEL101", title: "Fundamentals of Electrical Engineering", ltp: "3-0-2", credits: 4, type: "EAS", resources: "Basic Electrical Engineering|Basic Electrical Engineering, 3rd Edition (D. P. Kothari, I. J. Nagrath) (Z-Library).pdf" },
        { code: "MEL110", title: "Graphic Science", ltp: "2-0-4", credits: 4, type: "EAS", resources: "Course notes|Course notes" }
    ],
    "3rd Semester (Year 2)": [
        { code: "COL202", title: "Discrete Mathematical Structures", ltp: "3-1-0", credits: 4, type: "DC", resources: "Discrete Mathematics and Its Applications|Discrete Mathematics and Its Applications, 8th Edition (Kenneth H. Rosen) (Z-Library).pdf" },
        { code: "COL215", title: "Digital Logic & System Design", ltp: "3-0-4", credits: 5, type: "DC", resources: "Digital Design Global Edition|Digital Design Global Edition (Michael Ciletti M. Morris Mano) (Z-Library).pdf" },
        { code: "MEL120", title: "Manufacturing Practices", ltp: "2-0-4", credits: 4, type: "EAS", resources: "Manufacturing Processes for Engineering Materials|Manufacturing Processes for Engineering Materials (Serope Kalpakjian and Steven R. Schmid) (Z-Library).pdf" },
        { code: "PHL120", title: "Physics of Materials", ltp: "3-1-0", credits: 4, type: "BS", resources: "Introduction To Solid State Physics|Introduction To Solid State Physics 8th edition (Charles Kittel) (Z-Library).pdf" },
        { code: "HSS Elective", title: "Humanities Elective", ltp: "3-0-0", credits: 3, type: "HSS", resources: "Course notes|Course notes" }
    ],
    "4th Semester (Year 2)": [
        { code: "COL226", title: "Programming Languages", ltp: "3-0-4", credits: 5, type: "DC", resources: "Programming Language Pragmatics|Programming Language Pragmatics (Michael L. Scott) (Z-Library).pdf" },
        { code: "COL216", title: "Computer Architecture", ltp: "3-0-2", credits: 4, type: "DC", resources: "Computer Organization and Architecture|Computer Organization and Architecture, Global Edition (William Stallings) (Z-Library).pdf" },
        { code: "COL351", title: "Analysis and Design of Algorithms", ltp: "3-1-0", credits: 4, type: "DC", resources: "INTRODUCTION TO ALGORITHMS THIRD EDITION|INTRODUCTION TO ALGORITHMS THIRD EDITION (THOMAS, Cormen, Thomas H., Leiserson etc.) (Z-Library).pdf" },
        { code: "HSS Elective", title: "Humanities Elective", ltp: "3-0-0", credits: 3, type: "HSS", resources: "Course notes|Course notes" },
        { code: "MTL106", title: "Probability & Statistics", ltp: "3-0-0", credits: 3, type: "OE", resources: "Probability and statistics|Probability and statistics (DeGroot M., Schervish M.) (Z-Library).pdf" }
    ],
    "5th Semester (Year 3)": [
        { code: "COL331", title: "Operating Systems", ltp: "3-0-4", credits: 5, type: "DC", resources: "Operating System Concepts|Operating System Concepts (Abraham Silberschatz, Peter B. Galvin etc.) (Z-Library).pdf" },
        { code: "COL362", title: "Introduction to Database Management Systems", ltp: "3-0-2", credits: 4, type: "DC", resources: "Database System Concepts|Database System Concepts (Abraham Silberschatz, Henry Korth, S. Sudarshan) (Z-Library).pdf" },
        { code: "COP290", title: "Design Practices", ltp: "0-0-6", credits: 3, type: "DC", resources: "Project documentation|Project documentation" },
        { code: "CSL341", title: "Fundamentals of Machine Learning", ltp: "3-0-2", credits: 4, type: "DE", resources: "Pattern Recognition and Machine Learning|Pattern Recognition and Machine Learning (Christopher M. Bishop) (Z-Library).pdf" },
        { code: "SIL765", title: "Networks & System Security", ltp: "3-0-2", credits: 4, type: "OE", resources: "Cryptography and Network Security|Cryptography and Network Security Principles and Practice (6th Edition) (William Stallings) (Z-Library).pdf" }
    ],
    "6th Semester (Year 3)": [
        { code: "COL352", title: "Introduction to Automata & Theory of Computation", ltp: "3-0-0", credits: 3, type: "DC", resources: "Introduction to the Theory of Computation|Introduction to the Theory of Computation, 3rd ed. (Michael Sipser) (Z-Library).pdf" },
        { code: "COL334", title: "Computer Networks", ltp: "3-0-2", credits: 4, type: "DC", resources: "Computer Networking A Top-Down Approach|Computer Networking A Top-Down Approach (James F. Kurose, Keith W. Ross) (Z-Library).pdf" },
        { code: "CSL740", title: "Software Engineering", ltp: "3-0-2", credits: 4, type: "DE", resources: "Software engineering|Software engineering (Sommerville, Ian) (Z-Library).pdf" },
        { code: "CSL730", title: "Parallel Programming", ltp: "3-0-2", credits: 4, type: "DE", resources: "Parallel Programming in C with MPI and OpenMP|Parallel Programming in C with MPI and OpenMP (Michael Jay Quinn) (Z-Library).pdf" },
        { code: "CSV883", title: "Special Module in Theoretical Computer Science", ltp: "1-0-0", credits: 1, type: "OE", resources: "Course notes|Course notes" }
    ],
    "7th Semester (Year 4)": [
        { code: "COD492", title: "B.Tech. Project Part-I", ltp: "0-0-12", credits: 6, type: "DC", resources: "Project documentation|Project documentation" },
        { code: "CSL771", title: "Machine Learning", ltp: "3-0-2", credits: 4, type: "DE", resources: "Machine Learning|Machine Learning (Tom M. Mitchell) (Z-Library).pdf" },
        { code: "CSL759", title: "Cryptography and Computer Security", ltp: "3-0-0", credits: 3, type: "DE", resources: "Cryptography and Network Security|Cryptography and Network Security Principles and Practice (6th Edition) (William Stallings) (Z-Library).pdf" },
        { code: "CSR310", title: "Professional Practices (CS)", ltp: "3-0-0", credits: 3, type: "DC", resources: "Course notes|Course notes" },
        { code: "CSV884", title: "Special Module in Artificial Intelligence", ltp: "1-0-0", credits: 1, type: "OE", resources: "Course notes|Course notes" }
    ],
    "8th Semester (Year 4)": [
        { code: "COD494", title: "B.Tech. Project Part-II", ltp: "0-0-16", credits: 8, type: "DC", resources: "Project documentation|Project documentation" },
        { code: "CSL772", title: "Natural Language Processing", ltp: "3-0-2", credits: 4, type: "DE", resources: "Speech and Language Processing|Speech and Language Processing (3rd ed. draft) (Dan Jurafsky and James H. Martin) (Z-Library).pdf" },
        { code: "CSL781", title: "Computer Graphics", ltp: "3-0-0", credits: 3, type: "DE", resources: "Course notes|Course notes" },
        { code: "CSV890", title: "Special Module on Visual Computing", ltp: "1-0-0", credits: 1, type: "OE", resources: "Course notes|Course notes" },
        { code: "SIV864", title: "Special Module on Media Processing & Communication", ltp: "1-0-0", credits: 1, type: "OE", resources: "Course notes|Course notes" }
    ]
};

// Constants
const TYPE_ICONS = {
    'dc': 'fa-lightbulb',
    'bs': 'fa-atom',
    'eas': 'fa-microscope',
    'hSS': 'fa-users',
    'de': 'fa-book',
    'oe': 'fa-bookmark'
};

// DOM Elements
const elements = {
    semesterGrid: document.getElementById('semesterGrid'),
    searchContainer: document.querySelector('.search-container'),
    searchInput: document.getElementById('searchInput'),
    typeFilter: document.getElementById('typeFilter'),
    darkModeToggle: document.getElementById('darkModeToggle'),
    summaryToggle: document.getElementById('summaryToggle'),
    summaryModal: document.getElementById('summaryModal'),
    closeSummary: document.getElementById('closeSummary'),
    backToTop: document.getElementById('backToTop'),
    totalCourses: document.getElementById('totalCourses'),
    totalCreditsSummary: document.getElementById('totalCreditsSummary'),
    avgCredits: document.getElementById('avgCredits'),
    courseTypeStats: document.getElementById('courseTypeStats'),
    courseModal: document.getElementById('courseModal'),
    modalSemesterTitle: document.getElementById('modalSemesterTitle'),
    modalTotalCredits: document.getElementById('modalTotalCredits'),
    modalCoursesContainer: document.getElementById('modalCoursesContainer'),
    closeCourseModal: document.getElementById('closeCourseModal')
};

// Theme Management
class ThemeManager {
    static init() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.dataset.theme = savedTheme;
        this.updateThemeIcon(savedTheme);
    }

    static toggle() {
        const newTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
        document.body.dataset.theme = newTheme;
        this.updateThemeIcon(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    static updateThemeIcon(theme) {
        elements.darkModeToggle.innerHTML = theme === 'dark' ? 
            '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
}

// Course Management
class CourseManager {
    static createSemesterCards() {
        elements.semesterGrid.innerHTML = '';
        
        Object.entries(courseData).forEach(([semester, courses]) => {
            const totalSemesterCredits = courses.reduce((sum, course) => sum + course.credits, 0);
            const card = document.createElement('div');
            card.className = 'semester-card';
            card.innerHTML = `
                <h3><i class="fas fa-calendar-alt"></i> ${semester}</h3>
                <p class="course-count"><i class="fas fa-book"></i> ${courses.length} Courses</p>
                <div class="total-credits">
                    <i class="fas fa-star"></i> ${totalSemesterCredits} Credits
                </div>
            `;
            card.addEventListener('click', () => this.showCourseDetails(semester));
            elements.semesterGrid.appendChild(card);
        });
    }

    static showCourseDetails(semester) {
        document.querySelectorAll('.semester-card').forEach(card => {
            card.classList.remove('active');
        });
        
        const clickedCard = Array.from(document.querySelectorAll('.semester-card')).find(card => 
            card.querySelector('h3').textContent.includes(semester)
        );
        if (clickedCard) {
            clickedCard.classList.add('active');
        }

        const courses = courseData[semester];
        if (!courses) {
            console.error('No courses found for semester:', semester);
            return;
        }

        elements.modalSemesterTitle.textContent = semester;
        
        const searchTerm = elements.searchInput ? elements.searchInput.value.toLowerCase() : '';
        const selectedType = elements.typeFilter ? elements.typeFilter.value.toLowerCase() : 'all';
        
        const filteredCourses = courses.filter(course => {
            const matchesSearch = course.code.toLowerCase().includes(searchTerm) ||
                                course.title.toLowerCase().includes(searchTerm);
            const matchesType = selectedType === 'all' || course.type.toLowerCase() === selectedType;
            return matchesSearch && matchesType;
        });

        const totalSemesterCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
        elements.modalTotalCredits.textContent = totalSemesterCredits;
        
        elements.modalCoursesContainer.innerHTML = '';
        filteredCourses.forEach(course => {
            const courseCard = this.createCourseCard(course);
            elements.modalCoursesContainer.appendChild(courseCard);
        });
        
        elements.courseModal.classList.add('active');
    }

    static createCourseCard(course) {
        const template = document.getElementById('courseCardTemplate');
        const card = template.content.cloneNode(true);
        
        const typeIcon = TYPE_ICONS[course.type.toLowerCase()];

        card.querySelector('.course-code').textContent = course.code;
        card.querySelector('.course-title').textContent = course.title;
        card.querySelector('.course-ltp').innerHTML = `<i class="fas fa-clock"></i> L-T-P: ${course.ltp}`;
        card.querySelector('.course-credits').innerHTML = `<i class="fas fa-star"></i> Credits: ${course.credits}`;
        
        const typeElement = card.querySelector('.course-type');
        typeElement.innerHTML = `<i class="fas ${typeIcon}"></i> ${course.type}`;
        typeElement.classList.add(`type-${course.type.toLowerCase()}`);
        
        const resourcesList = card.querySelector('.resources-list');
        const resources = course.resources.split(';').map(resource => resource.trim());
        
        resources.forEach(resource => {
            const resourceItem = document.createElement('div');
            resourceItem.className = 'resource-item';
            
            const [displayName, filepath] = resource.split('|');
            const absolutePath = filepath.startsWith('http') ? filepath : filepath;
            
            // Determine icon based on resource type
            let icon = 'fa-file-pdf';
            if (displayName.toLowerCase().includes('nptel')) {
                icon = 'fa-video';
            }
            
            resourceItem.innerHTML = `
                <a href="${absolutePath}" target="_blank" class="resource-content">
                    <div class="resource-info">
                        <i class="fas ${icon}"></i>
                        <div class="resource-text">
                            <p class="resource-name">${displayName}</p>
                        </div>
                    </div>
                    <div class="resource-actions">
                        <i class="fas fa-external-link-alt"></i>
                    </div>
                </a>
            `;
            
            resourcesList.appendChild(resourceItem);
        });
        
        return card;
    }

    static handleSearch() {
        const activeSemester = document.querySelector('.semester-card.active');
        if (activeSemester) {
            const semesterTitle = activeSemester.querySelector('h3').textContent.trim();
            this.showCourseDetails(semesterTitle);
        }
    }

    static showSummary() {
        let totalCredits = 0;
        const typeCount = {};
        
        Object.values(courseData).forEach(courses => {
            courses.forEach(course => {
                totalCredits += course.credits;
                typeCount[course.type] = (typeCount[course.type] || 0) + 1;
            });
        });

        const totalCoursesCount = Object.values(courseData).reduce((sum, courses) => sum + courses.length, 0);
        const avgCreditsPerSemester = Math.round((totalCredits / Object.keys(courseData).length) * 10) / 10;
        
        elements.totalCourses.textContent = totalCoursesCount;
        elements.totalCreditsSummary.textContent = totalCredits;
        elements.avgCredits.textContent = avgCreditsPerSemester;
        
        elements.courseTypeStats.innerHTML = Object.entries(typeCount)
            .map(([type, count]) => {
                const typeIcon = TYPE_ICONS[type.toLowerCase()];
                return `
                    <div class="type-stat">
                        <span class="course-type type-${type.toLowerCase()}">
                            <i class="fas ${typeIcon}"></i>
                            ${type}
                        </span>
                        <span class="type-count">${count} courses</span>
                    </div>
                `;
            }).join('');

        elements.summaryModal.classList.add('active');
    }
}

// Event Handlers
class EventHandlers {
    static init() {
        // Dark mode toggle
        elements.darkModeToggle.addEventListener('click', ThemeManager.toggle);

        // Back to top button
        window.addEventListener('scroll', () => {
            elements.backToTop.classList.toggle('visible', window.scrollY > 300);
        });

        elements.backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Search and filter
        if (elements.searchInput) {
            elements.searchInput.addEventListener('input', CourseManager.handleSearch);
        }
        if (elements.typeFilter) {
            elements.typeFilter.addEventListener('change', CourseManager.handleSearch);
        }

        // Close course modal
        if (elements.closeCourseModal) {
            elements.closeCourseModal.addEventListener('click', () => {
                elements.courseModal.classList.remove('active');
            });
        }

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === elements.courseModal) {
                elements.courseModal.classList.remove('active');
            }
        });

        // Summary toggle
        elements.summaryToggle.addEventListener('click', CourseManager.showSummary);
        elements.closeSummary.addEventListener('click', () => {
            elements.summaryModal.classList.remove('active');
        });

        // Close summary modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === elements.summaryModal) {
                elements.summaryModal.classList.remove('active');
            }
        });
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    CourseManager.createSemesterCards();
    ThemeManager.init();
    EventHandlers.init();
    
    if (elements.searchContainer) {
        elements.searchContainer.style.display = 'flex';
    }
});