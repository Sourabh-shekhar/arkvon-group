export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-slate">
        <p>© {new Date().getFullYear()} Arkvon Group. All rights reserved.</p>
        <p>arkvongroup.com</p>
      </div>
    </footer>
  );
}