import React from "react";
import styles from "./CTASection.module.css";

interface CTASectionProps {
  children: React.ReactNode;
  actions?: React.ReactNode;
}

export default function CTASection({ children, actions }: CTASectionProps) {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          {children}
          {actions && <div className={styles.ctaButtons}>{actions}</div>}
        </div>
      </div>
    </section>
  );
}

// Export styles for use in parent components
export { styles as ctaStyles };
