```javascript
// pages/index.js

export default function Home() {
  try {
    return (
      <div>
        <h1>Next.js 15 App</h1>
        <p>This is a Next.js 15 app.</p>
      </div>
    );
  } catch (error) {
    console.error('Error rendering page:', error);
    return <div>Error rendering page.</div>;
  }
}
```