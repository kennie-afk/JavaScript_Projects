export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 text-center">
      <p>© {new Date().getFullYear()} Kennedy Mwanzia. All Rights Reserved.</p>
      <p className="mt-2 text-sm">Full Stack Software Engineer • Nairobi, Kenya</p>
    </footer>
  );
}