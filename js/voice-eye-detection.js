// Voice Input and Eye Detection Features
class VoiceEyeDetection {
    constructor() {
        this.recognition = null;
        this.synthesis = window.speechSynthesis;
        this.isListening = false;
        this.eyeTracking = null;
        this.isEyeTracking = false;
        this.init();
    }

    init() {
        this.initVoiceRecognition();
        this.initEyeTracking();
        this.setupUI();
    }

    // Voice Recognition Setup
    initVoiceRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'en-US';

            // Check if permission was already granted
            this.micPermissionGranted = localStorage.getItem('micPermissionGranted') === 'true';

            this.recognition.onstart = () => {
                this.isListening = true;
                this.updateVoiceButton();
                this.showNotification('🎤 Listening... Speak now!', 'info');
            };

            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                this.handleVoiceCommand(transcript);
            };

            this.recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                this.isListening = false;
                this.updateVoiceButton();
                
                // Handle permission denied error
                if (event.error === 'not-allowed') {
                    this.showNotification('❌ Microphone permission denied. Please allow microphone access.', 'error');
                } else {
                    this.showNotification('❌ Voice recognition error. Please try again.', 'error');
                }
            };

            this.recognition.onend = () => {
                this.isListening = false;
                this.updateVoiceButton();
                
                // Mark permission as granted if we got this far
                if (!this.micPermissionGranted) {
                    localStorage.setItem('micPermissionGranted', 'true');
                    this.micPermissionGranted = true;
                    this.showNotification('✅ Microphone permission granted!', 'success');
                }
            };
        } else {
            console.warn('Speech recognition not supported');
        }
    }

    // Voice Command Handling
    handleVoiceCommand(transcript) {
        const command = transcript.toLowerCase().trim();
        this.showNotification(`🎤 Heard: "${transcript}"`, 'info');

        // Navigation commands
        if (command.includes('home') || command.includes('go home')) {
            this.scrollToSection('home');
        } else if (command.includes('about') || command.includes('about me')) {
            this.scrollToSection('about');
        } else if (command.includes('skills') || command.includes('my skills')) {
            this.scrollToSection('skills');
        } else if (command.includes('experience') || command.includes('work experience')) {
            this.scrollToSection('experience');
        } else if (command.includes('projects') || command.includes('my projects')) {
            this.scrollToSection('projects');
        } else if (command.includes('achievements') || command.includes('certificates')) {
            this.scrollToSection('achievements');
        } else if (command.includes('contact') || command.includes('get in touch')) {
            this.scrollToSection('contact');
        }
        // AI Chatbot commands
        else if (command.includes('ask jay') || command.includes('ask jai') || command.includes('chat with jay') || command.includes('chat with jai')) {
            this.openChatbot();
        } else if (command.includes('close chatbot') || command.includes('close chat')) {
            this.closeChatbot();
        }
        // LinkedIn commands
        else if (command.includes('linkedin') || command.includes('connect on linkedin')) {
            window.open('https://www.linkedin.com/in/jenendrakhandelwal', '_blank');
        }
        // General commands
        else if (command.includes('scroll down') || command.includes('go down')) {
            window.scrollBy(0, 500);
        } else if (command.includes('scroll up') || command.includes('go up')) {
            window.scrollBy(0, -500);
        } else if (command.includes('top') || command.includes('go to top')) {
            window.scrollTo(0, 0);
        } else if (command.includes('help') || command.includes('what can i say')) {
            this.showVoiceHelp();
                                }                         else if (command.includes('tell me about jay') || command.includes('who is jay') || command.includes('tell me about jai') || command.includes('who is jai')) {
                            this.speak("Jenendra Khandelwal is a B.Tech Computer Science graduate from Amity University Jaipur with a CGPA of 7.5. He's a web developer, AI enthusiast, and team leader with experience at 1Stop as a Web Development Intern. You can reach him at khandelwaljenendra96600@gmail.com, phone +91 8824318188, or on GitHub at khandelwal0304.");
                        } else if (command.includes('what are your skills') || command.includes('tell me your skills')) {
                            this.speak("Jenendra Khandelwal's skills include Python (Advanced), Java (Intermediate), C++ (Intermediate), JavaScript (Advanced), TypeScript, React.js, Next.js, Node.js, Express.js, HTML5, CSS3, MySQL, PostgreSQL, MongoDB, Git, Docker, Jenkins, Firebase, Vercel, Netlify, and AI/ML technologies including Machine Learning, OpenAI API Integration, and Prompt Engineering. He's also proficient in web development, AI technologies, and team leadership.");
                        } else if (command.includes('what projects') || command.includes('show projects')) {
                            this.speak("Jenendra Khandelwal has worked on several projects including a Personal Portfolio Website with AI chatbot, E-Commerce Platform with payment gateway, and Nexora - a futuristic university management tool with AI features. You can view his projects in the projects section.");
                        } else {
            this.speak(`I heard "${transcript}". Try saying "help" to see available commands.`);
        }
    }

    // Eye Tracking Setup
    initEyeTracking() {
        // Check if webcam is available
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            this.setupEyeTracking();
        } else {
            console.warn('Camera access not supported');
        }
    }

    setupEyeTracking() {
        const video = document.createElement('video');
        video.style.display = 'none';
        document.body.appendChild(video);

        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                video.srcObject = stream;
                video.play();
                this.startEyeTracking(video);
            })
            .catch(err => {
                console.error('Camera access denied:', err);
            });
    }

    startEyeTracking(video) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.style.display = 'none';
        document.body.appendChild(canvas);

        const detectEyes = () => {
            if (!this.isEyeTracking) return;

            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            
            // Simple eye detection based on brightness
            this.detectEyeMovement(imageData);
            
            requestAnimationFrame(detectEyes);
        };

        video.addEventListener('loadeddata', () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            detectEyes();
        });
    }

    detectEyeMovement(imageData) {
        // Simple eye movement detection
        // This is a basic implementation - in a real app, you'd use a proper eye tracking library
        const data = imageData.data;
        let brightness = 0;
        
        for (let i = 0; i < data.length; i += 4) {
            brightness += (data[i] + data[i + 1] + data[i + 2]) / 3;
        }
        
        brightness /= (data.length / 4);
        
        // Simple threshold-based detection
        if (brightness > 100) {
            this.handleEyeMovement('bright');
        } else {
            this.handleEyeMovement('dark');
        }
    }

    handleEyeMovement(type) {
        // Handle different eye movements
        if (type === 'bright') {
            // User looking at screen
            this.addEyeTrackingEffect('looking');
        } else {
            // User looking away
            this.addEyeTrackingEffect('away');
        }
    }

    addEyeTrackingEffect(type) {
        const cursor = document.querySelector('.eye-cursor');
        if (!cursor) {
            this.createEyeCursor();
        }
        
        if (type === 'looking') {
            document.body.classList.add('eye-tracking-active');
        } else {
            document.body.classList.remove('eye-tracking-active');
        }
    }

    createEyeCursor() {
        const cursor = document.createElement('div');
        cursor.className = 'eye-cursor';
        cursor.innerHTML = '<i class="fas fa-eye"></i>';
        document.body.appendChild(cursor);
    }

    // UI Setup
    setupUI() {
        this.createVoiceButton();
        this.createEyeTrackingButton();
        this.addVoiceHelpModal();
    }

    createVoiceButton() {
        const voiceBtn = document.createElement('button');
        voiceBtn.id = 'voiceBtn';
        voiceBtn.className = 'voice-btn';
        voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
        voiceBtn.title = 'Voice Commands';
        
        voiceBtn.addEventListener('click', () => {
            this.toggleVoiceRecognition();
        });

        // Add to navigation or floating position
        const nav = document.querySelector('.nav-menu');
        if (nav) {
            const li = document.createElement('li');
            li.className = 'nav-item';
            li.appendChild(voiceBtn);
            nav.appendChild(li);
        }
    }

    createEyeTrackingButton() {
        const eyeBtn = document.createElement('button');
        eyeBtn.id = 'eyeBtn';
        eyeBtn.className = 'eye-btn';
        eyeBtn.innerHTML = '<i class="fas fa-eye"></i>';
        eyeBtn.title = 'Eye Tracking';
        
        eyeBtn.addEventListener('click', () => {
            this.toggleEyeTracking();
        });

        // Add next to voice button
        const voiceBtn = document.getElementById('voiceBtn');
        if (voiceBtn && voiceBtn.parentElement) {
            const li = document.createElement('li');
            li.className = 'nav-item';
            li.appendChild(eyeBtn);
            voiceBtn.parentElement.parentElement.appendChild(li);
        }
    }

    addVoiceHelpModal() {
        const modal = document.createElement('div');
        modal.id = 'voiceHelpModal';
        modal.className = 'voice-help-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>🎤 Voice Commands</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <h4>Navigation:</h4>
                    <ul>
                        <li>"Go to home" - Navigate to home section</li>
                        <li>"About me" - Navigate to about section</li>
                        <li>"My skills" - Navigate to skills section</li>
                        <li>"Work experience" - Navigate to experience section</li>
                        <li>"My projects" - Navigate to projects section</li>
                        <li>"Achievements" - Navigate to achievements section</li>
                        <li>"Contact" - Navigate to contact section</li>
                    </ul>
                    <h4>AI Chatbot:</h4>
                    <ul>
                        <li>"Ask Jay" or "Ask Jai" - Open AI chatbot</li>
                        <li>"Close chatbot" - Close AI chatbot</li>
                    </ul>
                    <h4>Actions:</h4>
                    <ul>
                        <li>"LinkedIn" - Open LinkedIn profile</li>
                        <li>"Scroll down/up" - Scroll page</li>
                        <li>"Go to top" - Scroll to top</li>
                        <li>"Tell me about Jenendra" - Get information about Jenendra</li>
                        <li>"What are your skills" - Learn about Jenendra's skills</li>
                        <li>"What projects" - Get information about projects</li>
                    </ul>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Close modal functionality
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        // Close on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    // Voice Recognition Controls
    toggleVoiceRecognition() {
        if (!this.recognition) {
            this.showNotification('❌ Voice recognition not supported in this browser', 'error');
            return;
        }

        if (this.isListening) {
            this.recognition.stop();
        } else {
            this.recognition.start();
        }
    }

    updateVoiceButton() {
        const voiceBtn = document.getElementById('voiceBtn');
        if (voiceBtn) {
            if (this.isListening) {
                voiceBtn.classList.add('listening');
                voiceBtn.innerHTML = '<i class="fas fa-microphone-slash"></i>';
            } else {
                voiceBtn.classList.remove('listening');
                voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
            }
        }
    }

    // Eye Tracking Controls
    toggleEyeTracking() {
        this.isEyeTracking = !this.isEyeTracking;
        const eyeBtn = document.getElementById('eyeBtn');
        
        if (eyeBtn) {
            if (this.isEyeTracking) {
                eyeBtn.classList.add('active');
                this.showNotification('👁️ Eye tracking activated', 'info');
            } else {
                eyeBtn.classList.remove('active');
                this.showNotification('👁️ Eye tracking deactivated', 'info');
            }
        }
    }

    // Utility Functions
    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            this.speak(`Navigating to ${sectionId} section`);
        }
    }

    openChatbot() {
        const chatbot = document.getElementById('aiChatbot');
        if (chatbot) {
            const toggle = chatbot.querySelector('#chatbotToggle');
            if (toggle) toggle.click();
        }
    }

    closeChatbot() {
        const chatbot = document.getElementById('aiChatbot');
        if (chatbot) {
            const close = chatbot.querySelector('#chatbotClose');
            if (close) close.click();
        }
    }

    speak(text) {
        if (this.synthesis) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.9;
            utterance.pitch = 1;
            this.synthesis.speak(utterance);
        }
    }

    showVoiceHelp() {
        const modal = document.getElementById('voiceHelpModal');
        if (modal) {
            modal.classList.add('active');
        }
    }

    showNotification(message, type = 'info') {
        // Use existing notification system if available
        if (window.showNotification) {
            window.showNotification(message, type);
        } else {
            // Fallback notification
            const notification = document.createElement('div');
            notification.className = `notification notification-${type}`;
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }
    }
}

// Initialize voice and eye detection when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new VoiceEyeDetection();
});
