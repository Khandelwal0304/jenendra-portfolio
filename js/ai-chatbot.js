// AI Chatbot for Jay's Portfolio

class JayAI {
    constructor() {
        this.messages = [];
        this.isOpen = false;
        this.init();
    }

    init() {
        this.chatbotToggle = document.getElementById('chatbotToggle');
        this.chatbotContainer = document.getElementById('chatbotContainer');
        this.chatbotClose = document.getElementById('chatbotClose');
        this.chatbotMessages = document.getElementById('chatbotMessages');
        this.chatbotInput = document.getElementById('chatbotInput');
        this.chatbotSend = document.getElementById('chatbotSend');

        this.setupEventListeners();
        this.loadKnowledgeBase();
    }

    setupEventListeners() {
        // Toggle chatbot
        this.chatbotToggle.addEventListener('click', () => {
            this.toggleChatbot();
        });

        // Close chatbot
        this.chatbotClose.addEventListener('click', () => {
            this.closeChatbot();
        });

        // Send message on button click
        this.chatbotSend.addEventListener('click', () => {
            this.sendMessage();
        });

        // Send message on Enter key
        this.chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });

        // Close chatbot when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.chatbotContainer.contains(e.target) && 
                !this.chatbotToggle.contains(e.target) && 
                this.isOpen) {
                this.closeChatbot();
            }
        });
    }

    loadKnowledgeBase() {
        this.knowledgeBase = {
            skills: {
                programming: ['Python (Advanced)', 'Java (Intermediate)', 'C++ (Intermediate)', 'JavaScript (Advanced)', 'TypeScript (Basic)'],
                web: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap'],
                databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL & NoSQL'],
                tools: ['Git/GitHub', 'Docker', 'Jenkins', 'Firebase', 'Vercel', 'Netlify', 'REST APIs', 'GraphQL'],
                ai: ['Machine Learning Basics', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenAI API Integration', 'Prompt Engineering'],
                soft: ['Communication', 'Team Leadership', 'Management']
            },
            projects: {
                portfolio: {
                    name: 'Personal Portfolio Website',
                    description: 'Multi-page interactive portfolio with smooth animations and AI-powered chatbot for portfolio Q&A',
                    tech: ['HTML5', 'CSS3', 'JavaScript', 'AI Integration'],
                    category: 'web'
                },
                ecommerce: {
                    name: 'E-Commerce Website',
                    description: 'React.js and Node.js powered shopping platform with secure payment gateway and product filtering system',
                    tech: ['React.js', 'Node.js', 'MongoDB', 'Payment Gateway'],
                    category: 'web'
                },
                nexora: {
                    name: 'Nexora (Futuristic University Management Tool)',
                    description: 'Next-gen academic management platform with AI-powered attendance, timetable generation, grade analysis, and chatbot for student queries',
                    tech: ['AI/ML', 'React.js', 'Node.js', 'Database Design'],
                    category: 'ai'
                }
            },
            experience: {
                internship: {
                    company: '1Stop',
                    role: 'Web Development Intern',
                    duration: 'June 2023 - August 2023',
                    responsibilities: [
                        'Developed fully responsive websites optimized for performance',
                        'Worked with HTML, CSS, JavaScript, React.js for frontend enhancements',
                        'Collaborated with backend developers to integrate APIs',
                        'Improved website load speed by 30% through code optimization',
                        'Designed reusable UI components for faster development cycles',
                        'Participated in daily stand-ups, task planning, and sprint reviews'
                    ]
                }
            },
            education: {
                degree: 'B.Tech Computer Science Engineering',
                university: 'Amity University Jaipur',
                duration: '2020-2024',
                cgpa: '7.5/10'
            },
            achievements: [
                'Java Programming and Software Engineering Fundamentals – Coursera',
                'Front-End Web Development with React – Udemy',
                'Data Science & Machine Learning – Coursera'
            ],
            languages: ['English', 'Hindi', 'Gujarati', 'Spanish'],
            hobbies: ['Web Development & AI Experiments', 'Reading on Artificial Intelligence & Future Tech', 'Playing Chess & Solving Logic Puzzles', 'Designing Futuristic App Interfaces']
        };
    }

    toggleChatbot() {
        if (this.isOpen) {
            this.closeChatbot();
        } else {
            this.openChatbot();
        }
    }

    openChatbot() {
        this.chatbotContainer.classList.add('active');
        this.isOpen = true;
        this.chatbotInput.focus();
    }

    closeChatbot() {
        this.chatbotContainer.classList.remove('active');
        this.isOpen = false;
    }

    sendMessage() {
        const message = this.chatbotInput.value.trim();
        if (!message) return;

        // Add user message
        this.addMessage(message, 'user');
        this.chatbotInput.value = '';

        // Generate AI response
        const response = this.generateResponse(message);
        
        // Simulate typing delay
        setTimeout(() => {
            this.addMessage(response, 'bot');
        }, 500);
    }

    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.textContent = text;
        
        messageDiv.appendChild(contentDiv);
        this.chatbotMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        this.chatbotMessages.scrollTop = this.chatbotMessages.scrollHeight;
        
        // Store message
        this.messages.push({ text, sender, timestamp: new Date() });
    }

    generateResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        // Greeting patterns
        if (this.matchesPattern(message, ['hello', 'hi', 'hey', 'greetings'])) {
            return this.getGreeting();
        }
        
        // Skills patterns
        if (this.matchesPattern(message, ['skill', 'technology', 'tech', 'programming', 'language'])) {
            return this.getSkillsInfo(message);
        }
        
        // Projects patterns
        if (this.matchesPattern(message, ['project', 'work', 'portfolio', 'ecommerce', 'whispwear'])) {
            return this.getProjectsInfo(message);
        }
        
        // Experience patterns
        if (this.matchesPattern(message, ['experience', 'internship', 'work', 'job', '1stop'])) {
            return this.getExperienceInfo();
        }
        
        // Education patterns
        if (this.matchesPattern(message, ['education', 'degree', 'university', 'college', 'cgpa'])) {
            return this.getEducationInfo();
        }
        
        // Achievements patterns
        if (this.matchesPattern(message, ['achievement', 'award', 'hackathon', 'certification'])) {
            return this.getAchievementsInfo();
        }
        
        // Contact patterns
        if (this.matchesPattern(message, ['contact', 'email', 'linkedin', 'github', 'reach'])) {
            return this.getContactInfo();
        }
        
        // Languages patterns
        if (this.matchesPattern(message, ['language', 'speak', 'fluent'])) {
            return this.getLanguagesInfo();
        }
        
        // Hobbies patterns
        if (this.matchesPattern(message, ['hobby', 'interest', 'chess', 'puzzle'])) {
            return this.getHobbiesInfo();
        }
        
        // Help patterns
        if (this.matchesPattern(message, ['help', 'what can you do', 'assist'])) {
            return this.getHelpInfo();
        }
        
        // Default response
        return this.getDefaultResponse();
    }

    matchesPattern(message, patterns) {
        return patterns.some(pattern => message.includes(pattern));
    }

    getGreeting() {
        const hour = new Date().getHours();
        let greeting = '';
        
        if (hour < 12) {
            greeting = 'Good morning!';
        } else if (hour < 17) {
            greeting = 'Good afternoon!';
        } else if (hour < 21) {
            greeting = 'Good evening!';
        } else {
            greeting = 'Good night!';
        }
        
        return `${greeting} I'm Jay's AI assistant. I can help you learn about Jenendra Khandelwal's skills, projects, experience, and more. What would you like to know?`;
    }

    getSkillsInfo(message) {
        if (message.includes('programming') || message.includes('language')) {
            return `Jenendra Khandelwal is proficient in multiple programming languages including ${this.knowledgeBase.skills.programming.join(', ')}. He has strong foundations in both object-oriented and functional programming paradigms.`;
        }
        
        if (message.includes('web') || message.includes('frontend') || message.includes('backend')) {
            return `For web development, Jenendra Khandelwal works with ${this.knowledgeBase.skills.web.join(', ')}. He creates responsive, modern web applications with excellent user experience and performance optimization.`;
        }
        
        if (message.includes('database') || message.includes('sql') || message.includes('mongo')) {
            return `Jenendra Khandelwal has experience with both SQL and NoSQL databases: ${this.knowledgeBase.skills.databases.join(', ')}. He can design efficient database schemas and optimize queries for better performance.`;
        }
        
        if (message.includes('tool') || message.includes('git') || message.includes('docker')) {
            return `Jenendra Khandelwal uses various development tools including ${this.knowledgeBase.skills.tools.join(', ')}. He follows best practices for version control, deployment, and cloud platforms.`;
        }
        
        return `Jenendra Khandelwal has a diverse skill set covering programming languages (${this.knowledgeBase.skills.programming.join(', ')}), web technologies (${this.knowledgeBase.skills.web.join(', ')}), databases (${this.knowledgeBase.skills.databases.join(', ')}), development tools (${this.knowledgeBase.skills.tools.join(', ')}), and AI/ML technologies (${this.knowledgeBase.skills.ai.join(', ')}). He also excels in soft skills like ${this.knowledgeBase.skills.soft.join(', ')}.`;
    }

    getProjectsInfo(message) {
        if (message.includes('portfolio')) {
            const project = this.knowledgeBase.projects.portfolio;
            return `${project.name}: ${project.description}. Technologies used: ${project.tech.join(', ')}.`;
        }
        
        if (message.includes('ecommerce') || message.includes('e-commerce')) {
            const project = this.knowledgeBase.projects.ecommerce;
            return `${project.name}: ${project.description}. Technologies used: ${project.tech.join(', ')}.`;
        }
        
        if (message.includes('nexora') || message.includes('university management')) {
            const project = this.knowledgeBase.projects.nexora;
            return `${project.name}: ${project.description}. Technologies used: ${project.tech.join(', ')}.`;
        }
        
        return `Jenendra Khandelwal has worked on several projects including a Personal Portfolio Website (multi-page interactive with AI chatbot), E-Commerce Platform (React.js/Node.js with payment gateway), and Nexora (futuristic university management tool with AI features). Each project demonstrates different aspects of his technical skills and creativity.`;
    }

    getExperienceInfo() {
        const exp = this.knowledgeBase.experience.internship;
        return `Jenendra Khandelwal worked as a ${exp.role} at ${exp.company} from ${exp.duration}. His responsibilities included: ${exp.responsibilities.join(', ')}. This experience helped him develop practical web development skills and team collaboration abilities.`;
    }

    getEducationInfo() {
        const edu = this.knowledgeBase.education;
        return `Jenendra Khandelwal completed his ${edu.degree} from ${edu.university} (${edu.duration}) with an impressive CGPA of ${edu.cgpa}. His academic background provides a strong foundation in computer science principles and software engineering practices.`;
    }

    getAchievementsInfo() {
        return `Jenendra Khandelwal has achieved several notable accomplishments: ${this.knowledgeBase.achievements.join(', ')}. These achievements demonstrate his technical skills, problem-solving abilities, and commitment to continuous learning.`;
    }

                        getContactInfo() {
                        return `You can reach Jenendra Khandelwal through multiple channels: Email (khandelwaljenendra96600@gmail.com), Phone (+91 8824318188), LinkedIn (linkedin.com/in/jenendrakhandelwal), GitHub (github.com/khandelwal0304), or through the contact form on this website. He's always open to new opportunities and collaborations!`;
                    }

    getLanguagesInfo() {
        return `Jenendra Khandelwal is multilingual and can communicate in ${this.knowledgeBase.languages.join(', ')}. This linguistic diversity helps him work effectively in global teams and understand diverse perspectives.`;
    }

    getHobbiesInfo() {
        return `When not coding, Jenendra Khandelwal enjoys ${this.knowledgeBase.hobbies.join(', ')}. These activities help him maintain a balanced lifestyle and develop strategic thinking skills.`;
    }

    getHelpInfo() {
        return `I can help you learn about Jenendra Khandelwal's skills, projects, experience, education, achievements, contact information, languages, and hobbies. Just ask me anything about these topics! For example, try asking "What are his skills?" or "Tell me about his projects."`;
    }

    getDefaultResponse() {
        const responses = [
            "I'm not sure I understood that. Could you try asking about Jenendra Khandelwal's skills, projects, experience, or achievements?",
            "I'd be happy to tell you about Jenendra Khandelwal's technical skills, projects he's worked on, his experience, or his achievements. What interests you most?",
            "I can help you learn about Jenendra Khandelwal's background. Try asking about his programming skills, web development projects, internship experience, or academic achievements.",
            "Feel free to ask me about Jenendra Khandelwal's skills, projects, work experience, education, or any other aspect of his professional background!"
        ];
        
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// Initialize the AI chatbot when the page loads
document.addEventListener('DOMContentLoaded', function() {
    new JayAI();
});
