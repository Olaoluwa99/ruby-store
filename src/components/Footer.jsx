const Footer = () => {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark text-onSurface-light dark:text-onSurface-dark py-6 mt-10 border-t border-outlineVariant-light dark:border-outlineVariant-dark text-center">
      <p className="text-onSurfaceVariant-light dark:text-onSurfaceVariant-dark text-sm">
        &copy; {new Date().getFullYear()} ShopWise. All rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-2 text-primary-light dark:text-primary-dark">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="mailto:support@shopwise.com">Contact</a>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
