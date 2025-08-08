# Jenendra Khandelwal - AI-Enhanced Portfolio

A stunning, modern portfolio website featuring glassmorphism design, AI chatbot, interactive animations, and responsive layout.

## 🌟 Features

### Design & UX
- **Glassmorphism Design**: Modern glass-like effects with backdrop blur
- **Dark Theme**: Professional dark mode with gradient accents
- **Responsive Layout**: Fully responsive for mobile, tablet, and desktop
- **Smooth Animations**: AOS (Animate On Scroll) and custom CSS animations
- **Interactive Particles**: Dynamic particle background with hover effects

### AI Features
- **AI Chatbot**: Intelligent assistant that answers questions about Jenendra
- **Dynamic Greeting**: Time-based personalized greetings
- **Smart Form**: Contact form with validation and auto-response
- **Project Recommender**: AI-powered project suggestions

### Voice & Eye Detection
- **Voice Input System**: Navigate the portfolio using voice commands
- **Eye Tracking**: Basic eye movement detection for enhanced interaction
- **Voice-Activated Navigation**: Say "go to home", "about me", "my skills", etc.
- **Voice-Controlled AI Chatbot**: "Ask Jay" or "Ask Jai" or "close chatbot"
- **LinkedIn Voice Commands**: "LinkedIn" to open profile
- **Voice Help System**: Say "help" for available commands

### Technical Features
- **Pure HTML/CSS/JS**: No framework dependencies
- **Modern CSS**: CSS Grid, Flexbox, and custom properties
- **Performance Optimized**: Lazy loading and efficient animations
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessibility**: ARIA labels and keyboard navigation

## 📁 Project Structure

```
jenendra-portfolio/
├── index.html              # Main HTML file
├── styles/
│   ├── main.css           # Main styles and layout
│   ├── components.css     # Component-specific styles
│   └── animations.css     # Animations and transitions
├── js/
│   ├── main.js           # Core functionality
│   ├── ai-chatbot.js     # AI chatbot implementation
│   ├── particles-config.js # Particles background
│   └── voice-eye-detection.js # Voice and eye detection features
└── README.md             # This file
```

## 🚀 Quick Start

### Option 1: Direct Opening
1. Download all files to a folder
2. Open `index.html` in your web browser
3. The portfolio will load with all features

### Option 2: Local Server (Recommended)
1. Install a local server (e.g., Live Server extension in VS Code)
2. Open the project folder
3. Start the local server
4. Access via `http://localhost:3000` (or similar)

### Option 3: Python Simple Server
```bash
# Navigate to project directory
cd jenendra-portfolio

# Start Python server
python -m http.server 8000

# Open in browser
# http://localhost:8000
```

## 🎨 Customization

### Personal Information
Edit the following sections in `index.html`:

1. **Hero Section** (Lines 60-90):
   - Name, title, and description
   - Stats (CGPA, skills count, languages)

2. **About Section** (Lines 120-180):
   - Personal story
   - Education details
   - Timeline events

3. **Skills Section** (Lines 200-280):
   - Add/remove skill categories
   - Update skill icons and names

4. **Projects Section** (Lines 320-380):
   - Project details, descriptions
   - Technology tags
   - Links to live demos

5. **Contact Section** (Lines 420-460):
   - Email, LinkedIn, GitHub links
   - Location information

### Voice & Eye Detection Features
The portfolio includes advanced voice and eye detection capabilities:

1. **Voice Commands**: 
   - Navigation: "go to home", "about me", "my skills", "work experience", "my projects", "achievements", "contact"
   - AI Chatbot: "ask jay", "ask jai", "close chatbot"
   - Actions: "linkedin", "scroll down/up", "go to top"
        - Information: "tell me about jay", "tell me about jai", "what are your skills", "what projects"

2. **Eye Tracking**:
   - Basic eye movement detection using webcam
   - Visual feedback when user is looking at screen
   - Toggle on/off with eye button in navigation

3. **Voice Help**:
   - Say "help" or "what can i say" to see all available commands
   - Voice help modal with complete command list

### Styling
Modify CSS variables in `styles/main.css`:

```css
:root {
    --primary-color: #6366f1;    /* Main brand color */
    --secondary-color: #8b5cf6;  /* Secondary color */
    --accent-color: #06b6d4;     /* Accent color */
    --bg-primary: #0a0a0a;       /* Background color */
    /* ... more variables */
}
```

### AI Chatbot
Customize the AI responses in `js/ai-chatbot.js`:

1. **Knowledge Base** (Lines 50-100):
   - Update skills, projects, experience
   - Add new response patterns

2. **Response Functions** (Lines 150-300):
   - Modify response logic
   - Add new conversation topics

## 🌐 Deployment

### GitHub Pages
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop the project folder to [Netlify](https://netlify.com)
2. Your site will be deployed instantly
3. Custom domain can be added in settings

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to project directory
3. Run `vercel` and follow prompts
4. Your site will be deployed with a custom URL

### Custom Domain
1. Purchase a domain (e.g., from Namecheap, GoDaddy)
2. Add DNS records pointing to your hosting provider
3. Configure in your hosting platform settings

## 🔧 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📱 Mobile Optimization

The portfolio is fully optimized for mobile devices with:
- Responsive navigation menu
- Touch-friendly interactions
- Optimized animations for mobile
- Proper viewport settings

## 🎯 Performance Tips

1. **Image Optimization**: Use WebP format and compress images
2. **Minification**: Minify CSS and JS files for production
3. **Caching**: Enable browser caching for static assets
4. **CDN**: Use a CDN for faster loading times

## 🛠️ Troubleshooting

### Common Issues

1. **Particles not loading**:
   - Check if particles.js is loaded
   - Verify internet connection for CDN

2. **Animations not working**:
   - Ensure AOS library is loaded
   - Check browser console for errors

3. **Chatbot not responding**:
   - Verify JavaScript is enabled
   - Check browser console for errors

4. **Styling issues**:
   - Clear browser cache
   - Check CSS file paths

### Debug Mode
Add this to the browser console for debugging:
```javascript
// Enable debug mode
window.debugMode = true;
console.log('Portfolio debug mode enabled');
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support:
- Email: khandelwaljenendra96600@gmail.com
- Phone: +91 8824318188
- LinkedIn: linkedin.com/in/jenendrakhandelwal
- GitHub: github.com/khandelwal0304

## 🎉 Acknowledgments

- **Particles.js**: For the interactive background
- **AOS**: For scroll animations
- **Font Awesome**: For icons
- **Google Fonts**: For typography

---

**Built with ❤️ by Jenendra Khandelwal**

*This portfolio showcases modern web development skills with AI integration and stunning visual effects.*
