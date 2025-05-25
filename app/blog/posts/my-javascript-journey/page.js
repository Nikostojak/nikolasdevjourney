export const metadata = {
    title: 'Nikolas Dev Journey | My JavaScript Journey',
    description: 'A deep dive into my JavaScript learning journey - from Python background to mastering modern JS fundamentals, DOM manipulation, async patterns, and React integration.',
  };
  
  import Navbar from '../../../components/Navbar';
  import Footer from '../../../components/Footer';
  import Container from '../../../components/Container';
  
  export default function BlogPost() {
    return (
      <main
        className="page-transition"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          backgroundColor: '#1a202c',
          color: '#e2e8f0',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <Navbar />
  
        <Container>
          <article className="blog-post-section" role="article" aria-labelledby="blog-post-title">
            <h1 className="blog-post-title" id="blog-post-title">
              My JavaScript Journey: From Zero to Modern Fundamentals
            </h1>
  
            <div className="blog-post-content">
              <p>
                When I launched <strong>Nikolas Dev Journey</strong> in April 2025, I had no knowledge of JavaScript. My focus was on Python, and I was just starting to explore web development with Next.js and React. But as I worked on my blog and planned my Chess Openings Web App, I realized JavaScript was essential for creating dynamic, interactive features. Over the past month, I&apos;ve gone from knowing nothing to mastering modern JavaScript fundamentals, understanding the event loop, and implementing production-ready patterns. In this post, I&apos;ll share my journey, the foundational skills I&apos;ve learned, common pitfalls I&apos;ve navigated, and my plans to advance as a web developer.
              </p>
  
              <h2 className="blog-post-subtitle">Transitioning from Python: The Mental Model Shift</h2>
              <p>
                Back in April 2025, JavaScript was completely new to me. Coming from Python&apos;s straightforward, synchronous mindset, I had to rewire my thinking around JavaScript&apos;s asynchronous, event-driven nature. The biggest mental shift was understanding that JavaScript is single-threaded yet handles concurrency through the event loop—a concept that doesn&apos;t exist in the same way in Python.
              </p>
              <ul>
                <li><strong>First challenge:</strong> Understanding why <code>console.log()</code> order matters in async contexts.</li>
                <li><strong>Type system shift:</strong> Moving from Python&apos;s duck typing to JavaScript&apos;s dynamic typing with coercion surprises.</li>
                <li><strong>Scope revelation:</strong> Discovering that <code>var</code> has function scope while <code>let</code> and <code>const</code> are block-scoped.</li>
              </ul>
              <p>
                My first &quot;aha&quot; moment came when I encountered this behavior:
              </p>
              <div className="blog-post-code">
                {`console.log("1");
  setTimeout(() => console.log("2"), 0);
  console.log("3");
  
  // Output: 1, 3, 2 (not 1, 2, 3 as I expected from Python)
  // This taught me about the event loop and microtask queue`}
              </div>
              <p>
                This simple example forced me to understand the JavaScript runtime&apos;s non-blocking nature—a fundamental shift from Python&apos;s synchronous execution model.
              </p>
  
              <h2 className="blog-post-subtitle">Modern JavaScript Patterns: Beyond the Basics</h2>
              <p>
                Once comfortable with variables, I dove deep into modern JavaScript patterns. Rather than just learning functions and arrays, I focused on ES6+ features that are standard in professional development: destructuring, spread operators, template literals, and the powerful array methods that make functional programming paradigms accessible.
              </p>
              <ul>
                <li><strong>Destructuring mastery:</strong> Both array and object destructuring with default values and nested patterns.</li>
                <li><strong>Array methods pipeline:</strong> Chaining <code>map()</code>, <code>filter()</code>, <code>reduce()</code> for data transformation.</li>
                <li><strong>Template literals:</strong> Moving beyond string concatenation to embedded expressions and tagged templates.</li>
                <li><strong>Arrow functions nuance:</strong> Understanding lexical <code>this</code> binding vs traditional function declarations.</li>
              </ul>
              <p>
                Here&apos;s a more sophisticated version of my blog post filtering function that showcases these concepts:
              </p>
              <div className="blog-post-code">
                {`const filterAndTransformPosts = (posts, filters = {}) => {
    const { category = 'All', searchTerm = '', sortBy = 'date' } = filters;
    
    return posts
      .filter(post => {
        const matchesCategory = category === 'All' || post.category === category;
        const matchesSearch = !searchTerm || 
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'title': return a.title.localeCompare(b.title);
          case 'category': return a.category.localeCompare(b.category);
          default: return new Date(b.date) - new Date(a.date);
        }
      })
      .map(({ title, category, date, slug, description, readTime }) => ({
        title,
        category,
        date: new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        slug,
        description: description.length > 150 
          ? \`\${description.slice(0, 150)}...\` 
          : description,
        readTime: readTime || '5 min read'
      }));
  };
  
  // Usage with different filter combinations
  const filteredPosts = filterAndTransformPosts(posts, {
    category: 'JavaScript',
    searchTerm: 'async',
    sortBy: 'title'
  });`}
              </div>
              <p>
                This function demonstrates functional programming principles, immutability, and modern JavaScript syntax—skills that translate directly to React development and production codebases.
              </p>
  
              <h2 className="blog-post-subtitle">DOM Manipulation: From jQuery Mindset to Modern Approaches</h2>
              <p>
                Learning DOM manipulation in 2025 meant skipping jQuery entirely and embracing modern browser APIs. I focused on understanding the difference between imperative DOM manipulation and React&apos;s declarative approach, which helped me appreciate why frameworks exist while still mastering vanilla JavaScript capabilities.
              </p>
              <ul>
                <li><strong>Modern selectors:</strong> Using <code>querySelector</code> and <code>querySelectorAll</code> with CSS selector expertise.</li>
                <li><strong>Event delegation:</strong> Understanding event bubbling and implementing efficient event handling patterns.</li>
                <li><strong>Performance considerations:</strong> Learning about DOM reflows, repaints, and using <code>DocumentFragment</code> for batch updates.</li>
                <li><strong>Accessibility integration:</strong> Implementing ARIA attributes and focus management from the start.</li>
              </ul>
              <p>
                Here&apos;s an enhanced version of my mobile menu toggle that includes performance optimizations and accessibility features:
              </p>
              <div className="blog-post-code">
                {`// React component with optimized event handling
  const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
  
    // Handle escape key and outside clicks
    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === 'Escape' && isMenuOpen) {
          setIsMenuOpen(false);
          buttonRef.current?.focus(); // Return focus to button
        }
      };
  
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
          setIsMenuOpen(false);
        }
      };
  
      if (isMenuOpen) {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClickOutside);
        // Prevent body scroll when menu is open
        document.body.style.overflow = 'hidden';
      }
  
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleClickOutside);
        document.body.style.overflow = 'unset';
      };
    }, [isMenuOpen]);
  
    const toggleMenu = useCallback(() => {
      setIsMenuOpen(prev => !prev);
    }, []);
  
    return (
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <button
          ref={buttonRef}
          className={\`hamburger \${isMenuOpen ? 'open' : ''}\`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg className="hamburger-icon" width="28" height="28" viewBox="0 0 24 24" 
               fill="none" stroke="#e2e8f0" strokeWidth="2" aria-hidden="true">
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        <div
          ref={menuRef}
          id="mobile-menu"
          className={\`mobile-menu \${isMenuOpen ? 'open' : ''}\`}
          aria-hidden={!isMenuOpen}
          role="menu"
        >
          {/* Menu items */}
        </div>
      </nav>
    );
  };`}
              </div>
              <p>
                This implementation showcases modern React patterns like <code>useCallback</code> for performance, <code>useRef</code> for DOM access, comprehensive keyboard navigation, and accessibility best practices that professional developers expect.
              </p>
  
              <h2 className="blog-post-subtitle">Mastering Asynchronous JavaScript: Promises, Async/Await, and Error Handling</h2>
              <p>
                The most challenging yet rewarding part of my JavaScript journey was mastering asynchronous programming. Coming from Python&apos;s straightforward synchronous model, I had to understand Promises, the event loop, microtasks vs macrotasks, and how to handle errors gracefully in async contexts.
              </p>
              <ul>
                <li><strong>Promise fundamentals:</strong> Understanding the three states and chaining patterns.</li>
                <li><strong>Async/await mastery:</strong> Writing readable asynchronous code with proper error boundaries.</li>
                <li><strong>Concurrent patterns:</strong> Using <code>Promise.all()</code>, <code>Promise.allSettled()</code>, and <code>Promise.race()</code> appropriately.</li>
                <li><strong>Error handling:</strong> Implementing comprehensive error boundaries and fallback mechanisms.</li>
              </ul>
              <p>
                Here&apos;s my evolved data fetching implementation that includes retry logic, caching, and comprehensive error handling:
              </p>
              <div className="blog-post-code">
                {`// Custom hook for blog post fetching with advanced patterns
  const useBlogPosts = (options = {}) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lastFetched, setLastFetched] = useState(null);
    
    const { 
      enableCache = true, 
      cacheTimeout = 5 * 60 * 1000, // 5 minutes
      maxRetries = 3,
      retryDelay = 1000 
    } = options;
  
    const fetchWithRetry = async (url, retries = maxRetries) => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout
        
        const response = await fetch(url, {
          signal: controller.signal,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': enableCache ? 'max-age=300' : 'no-cache'
          }
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
        }
        
        const data = await response.json();
        
        // Validate response structure
        if (!Array.isArray(data)) {
          throw new Error('Invalid response format: expected array');
        }
        
        // Validate each post has required fields
        const validatedPosts = data.map(post => {
          const requiredFields = ['id', 'title', 'slug', 'date'];
          const missingFields = requiredFields.filter(field => !post[field]);
          
          if (missingFields.length > 0) {
            console.warn(\`Post missing fields: \${missingFields.join(', ')}\`, post);
          }
          
          return {
            ...post,
            date: new Date(post.date).toISOString(), // Normalize date format
            readTime: post.readTime || calculateReadTime(post.content || '')
          };
        });
        
        return validatedPosts;
        
      } catch (error) {
        if (error.name === 'AbortError') {
          throw new Error('Request timeout');
        }
        
        if (retries > 0 && !error.message.includes('404')) {
          console.warn(\`Fetch failed, retrying in \${retryDelay}ms...\`, error.message);
          await new Promise(resolve => setTimeout(resolve, retryDelay));
          return fetchWithRetry(url, retries - 1);
        }
        
        throw error;
      }
    };
  
    const fetchPosts = useCallback(async (forceRefresh = false) => {
      // Check cache validity
      if (!forceRefresh && enableCache && lastFetched && 
          Date.now() - lastFetched < cacheTimeout && posts.length > 0) {
        return;
      }
      
      try {
        setIsLoading(true);
        setError(null);
        
        const fetchedPosts = await fetchWithRetry('/api/blog');
        
        setPosts(fetchedPosts);
        setLastFetched(Date.now());
        
      } catch (err) {
        console.error('Failed to fetch blog posts:', err);
        setError({
          message: err.message,
          type: err.name,
          timestamp: new Date().toISOString(),
          retry: () => fetchPosts(true)
        });
      } finally {
        setIsLoading(false);
      }
    }, [enableCache, cacheTimeout, lastFetched, posts.length, maxRetries, retryDelay]);
  
    useEffect(() => {
      fetchPosts();
    }, [fetchPosts]);
  
    return { 
      posts, 
      isLoading, 
      error, 
      refetch: () => fetchPosts(true),
      lastFetched 
    };
  };
  
  // Helper function for read time calculation
  const calculateReadTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.trim().split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return \`\${readTime} min read\`;
  };`}
              </div>
              <p>
                This implementation demonstrates advanced async patterns including request cancellation with AbortController, retry mechanisms, caching strategies, and comprehensive error handling—patterns commonly used in production applications.
              </p>
  
              <h2 className="blog-post-subtitle">Performance Optimization and Best Practices</h2>
              <p>
                As I progressed, I learned that writing working JavaScript is just the beginning. Professional development requires understanding performance implications, memory management, and optimization techniques. I studied how the JavaScript engine works, when to use different optimization strategies, and how to measure and improve performance.
              </p>
              <ul>
                <li><strong>Memory management:</strong> Understanding garbage collection, avoiding memory leaks, and proper cleanup.</li>
                <li><strong>Event optimization:</strong> Implementing debouncing and throttling for expensive operations.</li>
                <li><strong>Bundle optimization:</strong> Code splitting, tree shaking, and dynamic imports.</li>
                <li><strong>Performance monitoring:</strong> Using browser DevTools and Web Vitals for measurement.</li>
              </ul>
              <p>
                Here&apos;s an example of a performance-optimized search component I built:
              </p>
              <div className="blog-post-code">
                {`// Performance-optimized search with debouncing and memoization
  const BlogSearch = ({ posts, onFilter }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const searchInputRef = useRef(null);
    
    // Memoized search function to avoid recalculation
    const searchPosts = useMemo(() => {
      if (!searchTerm.trim()) return posts;
      
      const lowercaseSearch = searchTerm.toLowerCase();
      
      return posts.filter(post => {
        const searchableText = [
          post.title,
          post.description,
          post.category,
          ...(post.tags || [])
        ].join(' ').toLowerCase();
        
        return searchableText.includes(lowercaseSearch);
      });
    }, [posts, searchTerm]);
    
    // Debounced search to avoid excessive filtering
    const debouncedSearch = useMemo(
      () => debounce((term) => {
        onFilter(term);
        
        // Generate search suggestions
        if (term.length > 1) {
          const uniqueCategories = [...new Set(posts.map(p => p.category))];
          const matchingCategories = uniqueCategories.filter(cat =>
            cat.toLowerCase().includes(term.toLowerCase())
          );
          setSuggestions(matchingCategories.slice(0, 5));
        } else {
          setSuggestions([]);
        }
      }, 300),
      [posts, onFilter]
    );
    
    useEffect(() => {
      debouncedSearch(searchTerm);
      
      // Cleanup function to cancel pending debounced calls
      return () => {
        debouncedSearch.cancel?.();
      };
    }, [searchTerm, debouncedSearch]);
    
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSearchTerm('');
        setSuggestions([]);
        searchInputRef.current?.blur();
      }
    };
    
    return (
      <div className="search-container" role="search">
        <input
          ref={searchInputRef}
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search posts..."
          aria-label="Search blog posts"
          aria-autocomplete="list"
          aria-expanded={suggestions.length > 0}
        />
        
        {suggestions.length > 0 && (
          <ul className="suggestions-list" role="listbox">
            {suggestions.map((suggestion, index) => (
              <li
                key={suggestion}
                role="option"
                onClick={() => setSearchTerm(suggestion)}
                tabIndex={0}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        
        <p className="search-results" aria-live="polite">
          {searchTerm && \`Found \${searchPosts.length} post\${searchPosts.length !== 1 ? 's' : ''}\`}
        </p>
      </div>
    );
  };
  
  // Utility debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    
    const debounced = (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(null, args), delay);
    };
    
    debounced.cancel = () => {
      clearTimeout(timeoutId);
    };
    
    return debounced;
  };`}
              </div>
  
              <h2 className="blog-post-subtitle">Testing and Debugging: Professional Development Practices</h2>
              <p>
                Learning JavaScript in a professional context meant embracing testing and debugging from the start. I learned to write testable code, use browser DevTools effectively, and implement proper error logging and monitoring.
              </p>
              <ul>
                <li><strong>Unit testing:</strong> Writing tests for pure functions and utility methods.</li>
                <li><strong>Integration testing:</strong> Testing component interactions and API integrations.</li>
                <li><strong>Debugging techniques:</strong> Using breakpoints, console methods, and performance profiling.</li>
                <li><strong>Error monitoring:</strong> Implementing proper error boundaries and logging.</li>
              </ul>
  
              <h2 className="blog-post-subtitle">Skills That Demonstrate Professional Readiness</h2>
              <p>
                After a month of intensive learning, I&apos;ve built a comprehensive foundation that goes beyond basic JavaScript knowledge:
              </p>
              <ul>
                <li><strong>Modern ES6+ proficiency:</strong> Destructuring, arrow functions, template literals, and advanced array methods.</li>
                <li><strong>Asynchronous programming mastery:</strong> Promises, async/await, error handling, and concurrent execution patterns.</li>
                <li><strong>Performance optimization:</strong> Memory management, debouncing, memoization, and bundle optimization techniques.</li>
                <li><strong>Professional React patterns:</strong> Custom hooks, performance optimization, accessibility, and proper state management.</li>
                <li><strong>Production-ready practices:</strong> Error boundaries, testing strategies, debugging techniques, and monitoring.</li>
                <li><strong>Web standards compliance:</strong> Accessibility (ARIA), semantic HTML, and progressive enhancement.</li>
              </ul>
              <p>
                These skills, demonstrated in my blog&apos;s architecture and planned for my chess application, show my ability to write maintainable, performant, and accessible web applications that meet professional standards.
              </p>
  
              <h2 className="blog-post-subtitle">Advanced Concepts and Next Steps</h2>
              <p>
                My JavaScript foundation has prepared me for advanced concepts that define modern web development. I&apos;m now exploring TypeScript for type safety, advanced React patterns like compound components and render props, state management with Context API and potentially Redux Toolkit, and build optimization with Next.js App Router.
              </p>
              <ul>
                <li><strong>TypeScript integration:</strong> Adding type safety to catch errors at compile time.</li>
                <li><strong>Advanced React patterns:</strong> Higher-order components, render props, and compound components.</li>
                <li><strong>State management:</strong> Context API optimization and exploring Redux Toolkit for complex state.</li>
                <li><strong>Build optimization:</strong> Next.js App Router, server components, and edge functions.</li>
                <li><strong>Testing ecosystem:</strong> Jest, React Testing Library, and end-to-end testing with Playwright.</li>
              </ul>
              <p>
                My upcoming chess application will serve as a testing ground for these advanced concepts, incorporating real-time features with WebSockets, complex state management for game logic, and performance optimization for smooth animations.
              </p>
  
              <blockquote className="blog-post-quote">
                &quot;From zero to production-ready JavaScript fundamentals in one month—the journey taught me that modern web development isn&apos;t just about syntax, but about understanding performance, accessibility, and maintainable architecture. I&apos;m excited to apply these patterns to increasingly complex projects.&quot;
              </blockquote>
            </div>
          </article>
        </Container>
  
        <Footer />
      </main>
    );
  }