// We want the LEAST cascading priority for modern-normalize.css
    // We MUST mind the import order.
import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/components/featured.css';
import '../styles/components/work.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import '../styles/utils.css';
// We want the HIGHEST cascading priority for utile.css
    // Otherwise, it won't work.

// NOTE: The import functions above only work b/c we're using Vite.

