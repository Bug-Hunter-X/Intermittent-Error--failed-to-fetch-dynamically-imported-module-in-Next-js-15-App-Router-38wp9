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
import Image from 'next/image';

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p> 
      <Image src="/image.jpg" alt="About Image" width={500} height={300}  priority/>
    </div>
  );
}
export default About; 
```