/**
 * Contact button component with curved design
 * Opens email client when clicked with pre-filled subject
 */
export default function ContactButton() {
  return (
    <a
      href="mailto:team@harmonyappai.com?subject=Harmony%20-%20"
      className="inline-block bg-black text-white font-medium px-8 py-4 rounded-full hover:bg-gray-700 transition-colors duration-200 text-xl"
    >
      Get In Touch
    </a>
  );
}
