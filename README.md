# 🌸 Paula Palmer | Celebrant Website

A high-performance, accessible, and elegant website built for Paula Palmer, a professional celebrant. This site features a custom "Glass-morphism" design, an optimized photo gallery, and Vercel analytics.

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build/)
- **Deployment:** [Vercel](https://vercel.com)
- **Styling:** Custom CSS (Modern Mesh Gradients & Glassmorphism)
- **Forms:** [Web3Forms](https://web3forms.com/) (Serverless submission)
- **Icons:** Lucide / SVG

## 🛠️ Installation & Setup

### 1. **Clone the repository:**

```bash
git clone https://github.com/boygeniusnr1/celebrant-website.git
cd celebrant-website
```

### 2. **Install dependencies:**

    ```bash
    pnpm install
    ```

### 3. **Start the development server:**

    ```bash
    pnpm run dev
    ```

## 📁 Project Structure

    ### /src/assets/ - High-resolution images and brand assets.

    ### /src/components/ - Reusable UI components (Gallery, Contact Form, Header).

    ### /src/pages/ - Site routes (Home, Success).

    ### /public/ - Static assets like the robots.txt and favicon.

## 🔧 Features

    ### Custom Lightbox: Optimized gallery with swipe gestures and loading states.

    ### Magnetic Interaction: Custom JS-driven cursor follower for a premium feel.

    ### SEO Ready: Automated XML sitemap generation and robots.txt.

    ### Responsive: Fluid design for mobile, tablet, and desktop.

## 📝 Environment Variables

To use the contact form, ensure you have your Web3Forms access key set in the Contact.astro component or via Vercel's environment variables.

## 🖼️ Image content

The Keystatic admin is available at `/keystatic` while running the site locally.
The Hero singleton and Gallery collection use explicit image-upload fields;
uploaded images are stored under `public/images/` and their content metadata
lives under `content/`. The current images are preloaded as editable CMS
entries. If those entries are missing, the site falls back to its bundled
images in `src/assets/`.

Keystatic is configured with local storage, so edits are written to the
repository on the machine running the development server.
