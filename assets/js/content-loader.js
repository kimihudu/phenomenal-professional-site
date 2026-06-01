(function () {
  const CONTENT_SELECTOR = '[data-content]';

  function detectPageName() {
    const pathname = window.location.pathname || '';

    if (pathname.endsWith('/') || pathname.endsWith('/index.html')) {
      return 'index';
    }

    const lastSegment = pathname.split('/').pop() || 'index.html';
    const pageName = lastSegment.replace(/\.html$/i, '').trim();
    return pageName || 'index';
  }

  function stripFrontmatter(markdown) {
    return markdown.replace(/^\uFEFF?---\n[\s\S]*?\n---\s*/, '');
  }

  function parseSections(markdown) {
    const normalized = markdown.replace(/\r\n?/g, '\n');
    const withoutFrontmatter = stripFrontmatter(normalized);
    const parts = withoutFrontmatter.split(/^## (.+)$/gm);
    const sections = {};

    for (let index = 1; index < parts.length; index += 2) {
      const key = (parts[index] || '').trim();
      const value = (parts[index + 1] || '').trim();

      if (!key || !value) {
        continue;
      }

      sections[key] = value;
    }

    return sections;
  }

  function injectContent(element, value) {
    const paragraphs = value
      .split(/\n\s*\n/)
      .map(function (paragraph) { return paragraph.trim(); })
      .filter(Boolean);

    if (paragraphs.length > 1) {
      element.innerHTML = paragraphs
        .map(function (paragraph) { return '<p>' + paragraph + '</p>'; })
        .join('');
      return;
    }

    element.textContent = value.trim();
  }

  const page = detectPageName();
  const contentUrl = new URL(`content/${page}.md`, document.baseURI).href;

  fetch(contentUrl)
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Failed to load content: ' + response.status);
      }

      return response.text();
    })
    .then(function (markdown) {
      const sections = parseSections(markdown);

      document.querySelectorAll(CONTENT_SELECTOR).forEach(function (element) {
        const key = (element.getAttribute('data-content') || '').trim();

        if (!key || !(key in sections)) {
          if (key) {
            console.warn('[content-loader] Missing markdown section for key:', key, 'on page:', page);
          }
          return;
        }

        injectContent(element, sections[key]);
      });
    })
    .catch(function (error) {
      console.warn('[content-loader] Unable to load markdown for page:', page, error);
    });
})();
