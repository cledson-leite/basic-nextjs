import './globals.css'

export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};
// palavras reservadas:
// page criar rotas
// layout criar layouts
// not-found criar paginas 404
//error criar paginas de erro
//loading criar paginas de carregamento

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
