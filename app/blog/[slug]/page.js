export default function BlogPost({params}) {
  return (
    <main>
      <h1>Blog Post</h1>
      <p>para voce pegar qual nome essa pagina tem é so chamar a props no item params</p>
      <p>{params.slug}</p>
    </main>
  );
}