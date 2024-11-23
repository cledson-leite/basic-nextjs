import Link from "next/link";

export default function Blog() {
  return (
    <main>
      <h1>Rota Dinamica</h1>
      <p>Voce pode construir paginas dimanimca onde recebe o nome conforme o que esta escrito no link</p>
      <p><Link href="/blog/post-1">Post 1</Link></p>
      <p><Link href="/blog/post-2">Post 2</Link></p>
      <p><Link href="/blog/qualquerNome">Qualquer Nome</Link></p>
      <p>Para isso deve-se construir pasta com o nome da mesma entre conchetes []</p>
      <p>geralmente usa-se a palavra slug ou id dentro dos conchetes</p>
    </main>
  );
}