'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-6 px-4 sm:px-6 border-t border-[var(--border)]">
      <div className="max-w-[1120px] mx-auto">
        <p className="text-center text-[var(--muted)] text-sm">
          © {currentYear} Shohrab Rustam. All rights reserved.
        </p>
      </div>
    </div>
  );
}
