# Edwin Gigi - Portfolio Website

A modern, responsive portfolio website built with Jekyll and GitHub Pages. This website showcases my professional experience, projects, and technical skills.

## 🌐 Live Website

Visit the live website at: [edwingigi.github.io](https://edwingigi.github.io)

## 🛠️ Technologies Used

- Jekyll - Static site generator
- HTML5 & CSS3
- Bootstrap - Frontend framework
- GitHub Pages - Hosting
- Font Awesome - Icons
- Markdown - Content formatting

## 🚀 Local Development Setup

### Prerequisites

1. Ruby (version 2.5.0 or higher)
2. RubyGems
3. GCC and Make

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/EdwinGigi/EdwinGigi.github.io.git
   cd EdwinGigi.github.io
   ```

2. **Install Jekyll and Bundler**
   ```bash
   gem install jekyll bundler
   ```

3. **Install dependencies**
   ```bash
   bundle install
   ```

4. **Run the development server**
   ```bash
   bundle exec jekyll serve
   ```

5. **View the site**
   Open your browser and navigate to `http://localhost:4000`

## 📁 Project Structure

```
EdwinGigi.github.io/
├── _data/          # Site data files
├── _includes/      # Reusable components
├── _layouts/       # Page templates
├── _posts/         # Blog posts
├── assets/         # Static files (images, CSS, JS)
├── _config.yml     # Site configuration
├── index.md        # Homepage
└── projects.html   # Projects page
```

## 📝 Content Management

### Adding a New Project

1. Open `projects.html`
2. Add a new project card following the existing format:
   ```html
   <div class="project-card">
     <div class="row align-items-center">
       <div class="col-md-4">
         <img src="{{ "/assets/images/project-image.jpg" | relative_url }}" class="img-fluid project-image" alt="Project Name">
       </div>
       <div class="col-md-8">
         <h2>Project Name</h2>
         <p class="project-description">
           Project description goes here.
         </p>
         <div class="tech-stack">
           <span class="badge badge-primary">Technology 1</span>
           <span class="badge badge-primary">Technology 2</span>
         </div>
         <div class="project-links mt-3">
           <a href="#" class="btn btn-primary mr-2">
             <i class="fas fa-code"></i> View Code
           </a>
         </div>
       </div>
     </div>
   </div>
   ```

### Updating Experience

1. Open `index.md`
2. Modify the experience section following the existing format
3. Commit and push your changes

## 🚀 Deployment

The website is automatically deployed using GitHub Pages. Any changes pushed to the `master` branch will trigger a new deployment.

1. **Make your changes locally**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin master
   ```

2. **Wait for deployment**
   - GitHub Pages will automatically build and deploy your site
   - This usually takes 1-3 minutes
   - You can check the status in your repository's "Actions" tab

## 🎨 Customization

### Changing Colors

The site uses Bootstrap's default color scheme. To customize:

1. Create a new CSS file in `assets/css/`
2. Add your custom styles
3. Link the CSS file in `_includes/head.html`

### Adding New Pages

1. Create a new `.md` or `.html` file in the root directory
2. Add the front matter:
   ```yaml
   ---
   layout: default
   title: "Page Title"
   ---
   ```
3. Add your content
4. The page will be accessible at `/page-name`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Feel free to reach out if you have any questions or suggestions:
- GitHub: [@EdwinGigi](https://github.com/EdwinGigi)
- LinkedIn: [Your LinkedIn Profile]
- Email: [Your Email]

## 🙏 Acknowledgments

- Jekyll theme inspiration
- Bootstrap for the responsive design
- GitHub Pages for hosting 