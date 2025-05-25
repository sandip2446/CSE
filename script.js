// Course data structure
const courseData = {
    "1st Semester (Year 1)": [
        { code: "COL100", title: "Introduction to Computer Science", ltp: "3-0-2", credits: 4, type: "DC", resources: "The C Programming Language|https://drive.google.com/file/d/1iZ2l8lePO5SyTraZ3lF5Z8RjnKsRwBT2/view?usp=drive_link; Computer Science An Overview|https://drive.google.com/file/d/1WxViR5MFY-dLm8RACPWhJsAClrUbaEMA/view?usp=drive_link; Python Programming An Introduction to Computer Science|https://drive.google.com/file/d/1bEi37eGiORcz61D_fQ4kmHFJxbmAmFri/view?usp=drive_link" },
        { code: "CYL110", title: "Physical Chemistry: Concepts and Applications", ltp: "3-1-0", credits: 4, type: "BS", resources: "Physical Chemistry by Atkins|https://drive.google.com/open?id=1mmkGeLMuA7mVKPobv1dJanLHDK8wyKl2&usp=drive_copy" },
        { code: "CYP100", title: "Chemistry Laboratory", ltp: "0-0-4", credits: 2, type: "BS", resources: "Chemistry The Central Science Value Pack|https://drive.google.com/open?id=1bEi37eGiORcz61D_fQ4kmHFJxbmAmFri&usp=drive_copy" },
        { code: "MAL111", title: "Introduction to Analysis and Differential Equations", ltp: "3-1-0", credits: 4, type: "BS", resources: "Calculus by Thomas|https://drive.google.com/file/d/1BWuNPFyyYHGBO5Ep80N7pL0O_YTMYpUw/view?usp=drive_link" },
        { code: "AML110", title: "Engineering Mechanics", ltp: "3-0-2", credits: 4, type: "EAS", resources: "Engineering Mechanics by Meriam & Kraige|https://drive.google.com/file/d/1BySty0IKqU1GNoqTrTvJgXBYxZeTJUk-/view?usp=drive_link" },
        { code: "HUN100", title: "Introduction to Humanities & Social Sciences", ltp: "2-0-0", credits: 2, type: "HSS", resources: "Course notes|Course notes; MIT OpenCourseWare HSS|MIT OpenCourseWare HSS" }
    ],
    "2nd Semester (Year 1)": [
        { code: "COL106", title: "Data Structures & Algorithms", ltp: "3-0-4", credits: 5, type: "DC", resources: "Data Structures and Algorithms in C++ by Weiss|https://drive.google.com/file/d/1Zhszb7R0_vl27J-Ea4FF1gALnqW36mhW/view?usp=sharing" },
        { code: "MAL124", title: "Introduction to Algebra and Matrix Analysis", ltp: "3-1-0", credits: 4, type: "BS", resources: "Linear Algebra and Its Applications by Strang|https://drive.google.com/file/d/1Xm_dpMiCqKdkaVANbLRyZDSuZ6KVWAb6/view?usp=drive_link" },
        { code: "PHL110", title: "Fields and Waves", ltp: "3-1-0", credits: 4, type: "BS", resources: "Fundamentals of Physics by Halliday, Resnick, Walker|https://drive.google.com/file/d/1iY02rPq4V3aVxrI0URtXiiVtLTzVSD2x/view?usp=drive_link" },
        { code: "PHP100", title: "Physics Laboratory", ltp: "0-0-4", credits: 2, type: "BS", resources: "Virtual Labs (IIT Delhi or Amrita University)|Virtual Labs (IIT Delhi or Amrita University)" },
        { code: "EEL101", title: "Fundamentals of Electrical Engineering", ltp: "3-0-2", credits: 4, type: "EAS", resources: "Basic Electrical Engineering by Nagrath & Kothari|https://drive.google.com/file/d/1N0goDYcKbR5Uqpp-MhkaaU8zdxiKF-b9/view?usp=drive_link" },
        { code: "MEL110", title: "Graphic Science", ltp: "2-0-4", credits: 4, type: "EAS", resources: "Engineering Drawing by Bhatt|Engineering Drawing by Bhatt" }
    ],
    "3rd Semester (Year 2)": [
        { code: "COL202", title: "Discrete Mathematical Structures", ltp: "3-1-0", credits: 4, type: "DC", resources: "Discrete Mathematics and Its Applications by Rosen|https://drive.google.com/file/d/1sIZb5qV8zp5uNU8g37JVC4FsWlsl6kDH/view?usp=drive_link" },
        { code: "COL215", title: "Digital Logic & System Design", ltp: "3-0-4", credits: 5, type: "DC", resources: "Digital Design by Mano & Ciletti|https://drive.google.com/file/d/1Y7gWILFHWGu3HKLc-GI3dQ7qZTrpA2uf/view?usp=drive_link" },
        { code: "MEL120", title: "Manufacturing Practices", ltp: "2-0-4", credits: 4, type: "EAS", resources: "Manufacturing Processes by Kalpakjian|https://drive.google.com/file/d/16nlEE-vJi8VpBzOa_-M8dm9J1AyrwrK7/view?usp=drive_link" },
        { code: "PHL120", title: "Physics of Materials", ltp: "3-1-0", credits: 4, type: "BS", resources: "Introduction to Solid State Physics by Kittel|https://drive.google.com/file/d/1Uxxk-FQGfeuaP6psyj0WciawYFF_sxsc/view?usp=drive_link" },
        { code: "HSS Elective", title: "Humanities Elective", ltp: "3-0-0", credits: 3, type: "HSS", resources: "Course-specific texts (IIT Delhi HSS list)|Course-specific texts (IIT Delhi HSS list)" }
    ],
    "4th Semester (Year 2)": [
        { code: "COL226", title: "Programming Languages", ltp: "3-0-4", credits: 5, type: "DC", resources: "Programming Language Pragmatics by Scott|https://drive.google.com/file/d/1HrMub-TxDUkOfapJ1Nl-xcnzUaqpahKV/view?usp=drive_link" },
        { code: "COL216", title: "Computer Architecture", ltp: "3-0-2", credits: 4, type: "DC", resources: "Computer Organization and Architecture by Stallings|https://drive.google.com/file/d/10mkmbQvR_WzCe3gE1C6jZ4UzS6xCAr8j/view?usp=drive_link" },
        { code: "COL351", title: "Analysis and Design of Algorithms", ltp: "3-1-0", credits: 4, type: "DC", resources: "Introduction to Algorithms by Cormen et al.|https://drive.google.com/file/d/1VoxQgOzSPzsguTNtV0uanEE-pUqH1dul/view?usp=drive_link" },
        { code: "HSS Elective", title: "Humanities Elective", ltp: "3-0-0", credits: 3, type: "HSS", resources: "Course-specific texts|Course-specific texts" },
        { code: "MTL106", title: "Probability & Statistics", ltp: "3-0-0", credits: 3, type: "OE", resources: "Probability and Statistics by DeGroot|https://drive.google.com/file/d/1_cxQphsQdeDtnYqYdPNuXR5m-DBcCUlc/view?usp=drive_link" }
    ],
    "5th Semester (Year 3)": [
        { code: "COL331", title: "Operating Systems", ltp: "3-0-4", credits: 5, type: "DC", resources: "Operating System Concepts by Silberschatz, Galvin, Gagne|https://drive.google.com/file/d/1zvUkyQm6a-Sk-WuxEl-easHC-0QZtH0W/view?usp=drive_link" },
        { code: "COL362", title: "Introduction to Database Management Systems", ltp: "3-0-2", credits: 4, type: "DC", resources: "Database System Concepts by Silberschatz, Korth, Sudarshan|https://drive.google.com/file/d/1NJ9XIl57pzjpg7T0VuDqPIQeR9XkkmK-/view?usp=drive_link" },
        { code: "COP290", title: "Design Practices", ltp: "0-0-6", credits: 3, type: "DC", resources: "Project documentation|Project documentation" },
        { code: "CSL341", title: "Fundamentals of Machine Learning", ltp: "3-0-2", credits: 4, type: "DE", resources: "Pattern Recognition and Machine Learning by Bishop|https://drive.google.com/file/d/1Q6hh54kfyGCoGbue9p0DnlC8r3riKTFQ/view?usp=drive_link" },
        { code: "SIL765", title: "Networks & System Security", ltp: "3-0-2", credits: 4, type: "OE", resources: "Cryptography and Network Security by Stallings|https://drive.google.com/file/d/123qbyfG7zwDmiHShV5Hiqre5J06fBP2h/view?usp=drive_link" }
    ],
    "6th Semester (Year 3)": [
        { code: "COL352", title: "Introduction to Automata & Theory of Computation", ltp: "3-0-0", credits: 3, type: "DC", resources: "Introduction to the Theory of Computation by Sipser|https://drive.google.com/file/d/1dqXQaX8qpGoQW_2np-z_Ns5E1Vace9Q5/view?usp=drive_link" },
        { code: "COL334", title: "Computer Networks", ltp: "3-0-2", credits: 4, type: "DC", resources: "Computer Networking: A Top-Down Approach by Kurose & Ross|https://drive.google.com/file/d/17vUH-0181qC_zXMIZ21UriYW6675SC1F/view?usp=drive_link" },
        { code: "CSL740", title: "Software Engineering", ltp: "3-0-2", credits: 4, type: "DE", resources: "Software Engineering by Sommerville|https://drive.google.com/file/d/1HMDooHV-FycgfNLxNxxCyJkKgxQz8ZAy/view?usp=drive_link" },
        { code: "CSL730", title: "Parallel Programming", ltp: "3-0-2", credits: 4, type: "DE", resources: "Parallel Programming in C with MPI and OpenMP by Quinn|https://drive.google.com/file/d/1Eku0t5a2C_tH85unTQ2Br94rVXRlwc5F/view?usp=drive_link" },
        { code: "CSV883", title: "Special Module in Theoretical Computer Science", ltp: "1-0-0", credits: 1, type: "OE", resources: "Research papers; instructor-specific notes|Research papers; instructor-specific notes" }
    ],
    "7th Semester (Year 4)": [
        { code: "COD492", title: "B.Tech. Project Part-I", ltp: "0-0-12", credits: 6, type: "DC", resources: "Research papers; GitHub for implementation|Research papers; GitHub for implementation" },
        { code: "CSL771", title: "Machine Learning", ltp: "3-0-2", credits: 4, type: "DE", resources: "Machine Learning by Mitchell|https://drive.google.com/file/d/1kS28O7u9XH0cOk11TkXbtEguzcFUQ4Uu/view?usp=drive_link" },
        { code: "CSL759", title: "Cryptography and Computer Security", ltp: "3-0-0", credits: 3, type: "DE", resources: "Cryptography and Network Security by Stallings|https://drive.google.com/file/d/123qbyfG7zwDmiHShV5Hiqre5J06fBP2h/view?usp=drive_link" },
        { code: "CSR310", title: "Professional Practices (CS)", ltp: "3-0-0", credits: 3, type: "DC", resources: "Industry talks; online webinars (e.g., IEEE)|Industry talks; online webinars (e.g., IEEE)" },
        { code: "CSV884", title: "Special Module in Artificial Intelligence", ltp: "1-0-0", credits: 1, type: "OE", resources: "AI research papers; ArXiv|AI research papers; ArXiv" }
    ],
    "8th Semester (Year 4)": [
        { code: "COD494", title: "B.Tech. Project Part-II", ltp: "0-0-16", credits: 8, type: "DC", resources: "Research papers; TensorFlow, Django for projects|Research papers; TensorFlow, Django for projects" },
        { code: "CSL772", title: "Natural Language Processing", ltp: "3-0-2", credits: 4, type: "DE", resources: "Speech and Language Processing by Jurafsky & Martin|https://drive.google.com/file/d/1G8D80bGb8aSCg3Ta2c52pzCdNf0gbixa/view?usp=drive_link" },
        { code: "CSL781", title: "Computer Graphics", ltp: "3-0-0", credits: 3, type: "DE", resources: "Course notes|Course notes" },
        { code: "CSV890", title: "Special Module on Visual Computing", ltp: "1-0-0", credits: 1, type: "OE", resources: "Research papers; OpenGL tutorials|Research papers; OpenGL tutorials" },
        { code: "SIV864", title: "Special Module on Media Processing & Communication", ltp: "1-0-0", credits: 1, type: "OE", resources: "Multimedia processing tutorials; research papers|Multimedia processing tutorials; research papers" }
    ]
};

// Constants
const TYPE_ICONS = {
    'dc': 'fa-lightbulb',
    'bs': 'fa-atom',
    'eas': 'fa-microscope',
    'hss': 'fa-users',
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
            const parts = resource.split('|');
            const title = parts[0] || 'Resource';
            const url = parts[1] || '';
            
            const resourceItem = document.createElement('div');
            resourceItem.className = 'resource-item';
            
            if (url && url.startsWith('http')) {
                // Handle Google Drive links with title and view action
                resourceItem.innerHTML = `
                    <a href="${url}" target="_blank" class="resource-content">
                        <div class="resource-info">
                            <i class="fas fa-book"></i>
                            <div class="resource-text">
                                <p class="resource-name">${title}</p>
                            </div>
                        </div>
                        <div class="resource-actions">
                            <i class="fas fa-external-link-alt"></i> View
                        </div>
                    </a>
                `;
            } else {
                // Handle local resources with title only
                resourceItem.innerHTML = `
                    <span class="resource-text">
                        <i class="fas fa-file-alt"></i> ${title}
                    </span>
                `;
            }
            
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
