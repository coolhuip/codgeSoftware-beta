// We want the LEAST cascading priority for modern-normalize.css
    // We MUST mind the import order.
import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/utils.css';
// We want the HIGHEST cascading priority for utile.css
    // Otherwise, it won't work.

// NOTE: The import functions above only work b/c we're using Vite.

