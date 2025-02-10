// app/layout.js
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Next App</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
