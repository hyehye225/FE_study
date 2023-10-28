export default function Header({ src, alt, title, desc }) {
  return (
    <header>
      <img src={src} alt={alt} />
      <h1>{title}</h1>
      <p>{desc}</p>
    </header>
  );
}
