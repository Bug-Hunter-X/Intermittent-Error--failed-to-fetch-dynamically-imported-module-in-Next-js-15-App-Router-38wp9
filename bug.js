```javascript
//pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
//pages/about.js
function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p> 
      {/* This is a comment */}
      <img src="/image.jpg" alt="Image not found"/>
    </div>
  );
}
export default About; 
```