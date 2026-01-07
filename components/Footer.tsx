export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 md:pt-8 border-t border-border">
<div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-display font-semibold text-lg text-foreground">
            Codeigo<span className="text-primary">.</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Codeigo Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
