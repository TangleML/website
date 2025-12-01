import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import {
  APP_NAME,
  APP_URL,
  DEMO_URL,
  DOCS_URL,
  GITHUB_BACKEND_REPO_URL,
  GITHUB_FRONTEND_REPO_URL,
  GITHUB_ISSUES_URL,
  GITHUB_DISCUSSIONS_URL,
} from "../../constants";
import HeroSection from "./components/HeroSection/HeroSection";
import CTASection, { ctaStyles } from "../components/CTASection";
import { useEffect, useState } from "react";

function DeveloperInfoBanner() {
  return (
    <section className={styles.developerBanner}>
        <div className={styles.bannerContent}>
          <div className={styles.developerInfo}>
            <div className={styles.shopifyBrand}>
              <img
                src="/img/shopify_glyph.svg"
                alt="Shopify Logo"
                className={styles.shopifyLogo}
              />
              <span>Powered by Shopify</span>
            </div>
            <p>
              Developed by Shopify ML and software engineers to democratize machine learning pipeline development.
            </p>
          </div>
          <div className={styles.openSourceInfo}>
            <div className={styles.shopifyBrand}>
              <img src="/icons/book-open-text.svg" alt="Open Source" className={styles.bannerIcon} />
              <span>Open Source</span>
            </div>
            <p>
              Access publicly available code and contribute to the future of visual ML pipeline development.
            </p>
          </div>
        </div>
    </section>
  );
}

function FeaturesSection() {
  const [lightboxImage, setLightboxImage] = useState(null);
  
  const features = [
    {
      title: "Drag & Drop Pipeline Editing",
      description:
        "Create complex ML workflows with a powerful visual editor. Connect components, configure arguments, and build pipelines– with or without writing code.",
      image: "/img/feature-pipeline-editing.png",
      imageAlt: "Drag and drop interface showing pipeline components",
    },
    {
      title: "Build Pipelines Together",
      description:
        "Clone, edit and run any pipeline as you see fit. Choose from reusable modules in the component library or add your own.",
      image: "/img/feature-collaboration.png",
      imageAlt: "A list of pipelines runs from many different users",
    },
    {
      title: "Any Language, Any Framework",
      description:
        "Tangle is platform agnostic. Wrap your existing code in a container using the in-app editor.",
      image: "/img/feature-in-app-editor.png",
      imageAlt: "In-app editor wizard",
    },
    {
      title: "Advanced Execution Caching",
      description:
        "Cache intermediate results to accelerate experimentation. Content-based caching saves significant time and compute costs.",
      image: "/img/feature-pipeline-execution.png",
      imageAlt: "Pipeline execution page",
    },
  ];

  const openLightbox = (image, alt) => {
    setLightboxImage({ src: image, alt });
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  };

  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Powerful Features for ML Teams</h2>
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={clsx(
                styles.featureRow,
                idx % 2 === 1 && styles.featureRowReverse
              )}
            >
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
              <div className={styles.featureImage}
                  onClick={() => openLightbox(feature.image, feature.imageAlt)}
              >
                <div 
                  className={styles.featureImageWrapper}
                  role="button"
                  tabIndex={0}
                >
                  <div className={styles.geometricDecoration}>
                    <div className={styles.decorShape1}></div>
                    <div className={styles.decorShape2}></div>
                    <div className={styles.decorShape3}></div>
                  </div>
                  <img
                    src={feature.image}
                    alt={feature.imageAlt}
                    className={styles.featureScreenshot}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className={styles.lightbox} 
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.lightboxContent}>
            <button 
              className={styles.lightboxClose}
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <img 
              src={lightboxImage.src} 
              alt={lightboxImage.alt}
              className={styles.lightboxImage}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}

function CTASectionContent() {
  return (
    <CTASection
      actions={
        <>
          <Link
            className={clsx(ctaStyles.button, ctaStyles.buttonOutline)}
            to={APP_URL}
          >
            <img src="/icons/rocket.svg" alt="Get Started" className={ctaStyles.buttonIcon}/> Get Started
          </Link>
          <Link
            className={clsx(ctaStyles.button, ctaStyles.buttonOutline)}
            to={DEMO_URL}
          >
            <img src="/icons/gamepad-2.svg" alt="Try Example Pipelines" className={ctaStyles.buttonIcon}/> Try Example Pipelines
          </Link>
          <Link
            className={clsx(ctaStyles.button, ctaStyles.buttonOutline)}
            to={DOCS_URL}
          >
            <img src="/icons/book-text.svg" alt="View Documentation" className={ctaStyles.buttonIcon}/>
            View Documentation
          </Link>
        </>
      }
    >
      <h2>Ready to Build Your First Pipeline?</h2>
      <p>
        Start creating machine learning workflows in minutes. Try our example
        pipelines or dive straight into the documentation.
      </p>
    </CTASection>
  );
}

function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className="container">
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h3>Get in Touch</h3>
            <p>
              {`Have questions about ${APP_NAME}? Our team is here to help you get
              started with visual ML pipeline development.`}
            </p>
            <div className={styles.contactMethods}>
              <Link to={GITHUB_DISCUSSIONS_URL} className={styles.repoLink}>
                <span className={styles.iconContainer}><img src="/icons/messages-square.svg" alt="Discussions" className={styles.contactIcon}/></span>
                <div>
                  <strong>Discuss</strong>
                  <p>Share your feedback and ideas</p>
                </div>
              </Link>
              <Link to={GITHUB_ISSUES_URL} className={styles.repoLink}>
                <span className={styles.iconContainer}><img src="/icons/bug.svg" alt="Issues" className={styles.contactIcon}/></span>
                <div>
                  <strong>Report Issues</strong>
                  <p>Found a bug? Let us know!</p>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.repoInfo}>
            <h3>Open Source</h3>
            <p>
              {`${APP_NAME} is built on open-source foundations. Contribute, report
              issues, or explore the codebase on GitHub.`}
            </p>
            <div className={styles.repoLinks}>
              <Link to={GITHUB_FRONTEND_REPO_URL} className={styles.repoLink}>
                <span className={styles.iconContainer}><img src="/icons/wallpaper.svg" alt="Frontend Repository" className={styles.contactIcon}/></span>
                <div>
                  <strong>Frontend Repository</strong>
                  <p>{GITHUB_FRONTEND_REPO_URL.split("https://").pop()}</p>
                </div>
              </Link>
              <Link to={GITHUB_BACKEND_REPO_URL} className={styles.repoLink}>
                <span className={styles.iconContainer}><img src="/icons/box.svg" alt="Backend Repository" className={styles.contactIcon}/></span>
                <div>
                  <strong>Backend Repository</strong>
                  <p>{GITHUB_BACKEND_REPO_URL.split("https://").pop()}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Visual ML Pipeline Editor`}
      description={`Build machine learning pipelines visually with ${APP_NAME}. Drag-and-drop editor for creating, managing, and executing ML workflows.`}
    >
      <HeroSection />
      <main>
        <DeveloperInfoBanner />
        <FeaturesSection />
        <CTASectionContent />
        <ContactSection />
      </main>
    </Layout>
  );
}
