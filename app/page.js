import Link from "next/link";

export default function Home() {
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>O link referencia um rsc ou seja uma rota com componente criado no servidor e cacheado</p>
      <p>melhor que usar tag a  para navegação</p>
      <p><Link href="/about">About us</Link></p>
      <p><Link href="/blog">Blog</Link></p>
    </main>
  );
}
