# Edwin Gigi - Portfolio Website

A modern, responsive portfolio website built with Jekyll and Bootstrap, showcasing my projects and professional experience.

## 🌟 Features

- **Modern Design**
  - Clean and professional layout
  - Responsive design that works on all devices
  - Smooth animations and transitions
  - Modern card-based UI components

- **Dark Mode Support**
  - Automatic theme detection
  - Manual theme toggle
  - Persistent theme preference
  - Smooth theme transitions

- **Project Showcase**
  - Featured projects with detailed descriptions
  - Technology stack badges
  - Project screenshots with hover effects
  - Links to live demos and GitHub repositories

- **Professional Experience**
  - Timeline of work experience
  - Educational background
  - Technical skills showcase
  - Achievements and certifications

## 🌐 Live Website

Visit the live website at: [edwingigi.github.io](https://edwingigi.github.io)

## 🛠️ Technologies Used

- Jekyll - Static site generator
- SCSS - Advanced styling
- Bootstrap 5 - Frontend framework
- JavaScript - Interactivity and animations
- Font Awesome - Icons
- GitHub Pages - Hosting

## 🚀 Setup and Development

1. **Prerequisites**
   ```bash
   # Install Ruby (if not already installed)
   # For Windows, download from https://rubyinstaller.org/
   # For macOS/Linux:
   brew install ruby # macOS
   sudo apt-get install ruby-full # Ubuntu

   # Install Jekyll and Bundler
   gem install jekyll bundler
   ```

2. **Installation**
   ```bash
   # Clone the repository
   git clone https://github.com/EdwinGigi/EdwinGigi.github.io.git
   cd EdwinGigi.github.io

   # Install dependencies
   bundle install
   ```

3. **Local Development**
   ```bash
   # Start the development server
   bundle exec jekyll serve

   # Visit http://localhost:4000 in your browser
   ```

4. **Building for Production**
   ```bash
   # Build the site
   bundle exec jekyll build
   ```

## 📂 Project Structure

```
.
├── _includes/          # Reusable components
├── _layouts/           # Page templates
├── _sass/             # SCSS partials
├── assets/            # Static assets
│   ├── css/          # Compiled CSS
│   ├── js/           # JavaScript files
│   └── images/       # Images and icons
├── _config.yml        # Jekyll configuration
└── index.md          # Homepage content
```

## 🎨 Customization

1. **Colors and Themes**
   - Edit `_sass/_variables.scss` to modify the color scheme
   - Update dark mode colors in the same file

2. **Content**
   - Modify `index.md` for the main content
   - Update project information in `projects.html`
   - Edit experience details in the experience section

3. **Styling**
   - Main styles are in `assets/css/main.scss`
   - Component-specific styles in `_sass/` directory

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints for different screen sizes
- Optimized images and assets
- Collapsible navigation for mobile devices

## 🔄 Updates and Maintenance

1. **Keeping Dependencies Updated**
   ```bash
   bundle update
   ```

2. **Adding New Content**
   - Create new project cards in `projects.html`
   - Update experience section as needed
   - Add new skills or technologies

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- GitHub: [@EdwinGigi](https://github.com/EdwinGigi)
- LinkedIn: [Edwin Gigi](https://linkedin.com/in/edwin-gigi)
- Email: edwingigi2012@gmail.com

## 🙏 Acknowledgments

- Jekyll theme inspiration
- Bootstrap for the responsive design
- GitHub Pages for hosting 
