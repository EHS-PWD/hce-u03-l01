const fs = require('fs');
const path = require('path');

describe('Unit 3 Lesson 1 - Media Elements: User Information Table', () => {
  let html;
  let document;

  beforeAll(() => {
    const htmlPath = path.join(__dirname, '..', 'index.html');

    if (!fs.existsSync(htmlPath)) {
      throw new Error('index.html file not found');
    }

    html = fs.readFileSync(htmlPath, 'utf8');
    document = new DOMParser().parseFromString(html, 'text/html');
  });

  describe('HTML Structure', () => {
    test('should have a valid DOCTYPE declaration', () => {
      expect(html.trim().toLowerCase()).toMatch(/^<!doctype html>/i);
    });

    test('should have html, head, and body tags', () => {
      expect(document.querySelector('html')).toBeTruthy();
      expect(document.querySelector('head')).toBeTruthy();
      expect(document.querySelector('body')).toBeTruthy();
    });

    test('should have proper meta tags', () => {
      const charsetMeta = document.querySelector('meta[charset]');
      const viewportMeta = document.querySelector('meta[name="viewport"]');

      expect(charsetMeta).toBeTruthy();
      expect(charsetMeta.getAttribute('charset').toLowerCase()).toBe('utf-8');
      expect(viewportMeta).toBeTruthy();
    });

    test('should have a title tag', () => {
      const title = document.querySelector('title');
      expect(title).toBeTruthy();
      expect(title.textContent).toBeTruthy();
    });
  });

  describe('Table Structure', () => {
    test('should have a table element', () => {
      const table = document.querySelector('table');
      expect(table).toBeTruthy();
    });

    test('should have thead and tbody elements', () => {
      const thead = document.querySelector('table thead');
      const tbody = document.querySelector('table tbody');

      expect(thead).toBeTruthy();
      expect(tbody).toBeTruthy();
    });

    test('should have correct table headers', () => {
      const headers = Array.from(document.querySelectorAll('table thead th'));
      expect(headers.length).toBeGreaterThanOrEqual(5);

      const headerTexts = headers.map(th => th.textContent.trim());
      expect(headerTexts).toContain('Profile Image');
      expect(headerTexts).toContain('First Name');
      expect(headerTexts).toContain('Last Name');
      expect(headerTexts).toContain('Gender');
      expect(headerTexts).toContain('Country');
    });

    test('should have at least 3 rows of data in tbody', () => {
      const rows = document.querySelectorAll('table tbody tr');
      expect(rows.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe('Media Elements', () => {
    test('should have figure elements for each user', () => {
      const figures = document.querySelectorAll('table tbody figure');
      expect(figures.length).toBeGreaterThanOrEqual(3);
    });

    test('should have img elements inside figure tags', () => {
      const figures = document.querySelectorAll('table tbody figure');

      figures.forEach(figure => {
        const img = figure.querySelector('img');
        expect(img).toBeTruthy();
      });
    });

    test('should have figcaption elements inside figure tags', () => {
      const figures = document.querySelectorAll('table tbody figure');

      figures.forEach(figure => {
        const figcaption = figure.querySelector('figcaption');
        expect(figcaption).toBeTruthy();
        expect(figcaption.textContent.trim()).toBeTruthy();
      });
    });

    test('should have proper alt attributes on all images', () => {
      const images = document.querySelectorAll('table tbody img');
      expect(images.length).toBeGreaterThanOrEqual(3);

      images.forEach(img => {
        const alt = img.getAttribute('alt');
        expect(alt).toBeTruthy();
        expect(alt.length).toBeGreaterThan(0);
      });
    });

    test('should have image src attributes pointing to images folder', () => {
      const images = document.querySelectorAll('table tbody img');

      images.forEach(img => {
        const src = img.getAttribute('src');
        expect(src).toBeTruthy();
        expect(src).toMatch(/images\//);
      });
    });

    test('should have specific user images (user1.jpg, user2.jpg, user3.jpg)', () => {
      const images = document.querySelectorAll('table tbody img');
      const srcs = Array.from(images).map(img => img.getAttribute('src'));

      expect(srcs.some(src => src.includes('user1.jpg'))).toBeTruthy();
      expect(srcs.some(src => src.includes('user2.jpg'))).toBeTruthy();
      expect(srcs.some(src => src.includes('user3.jpg'))).toBeTruthy();
    });
  });

  describe('User Data', () => {
    test('should have user data in table cells', () => {
      const rows = document.querySelectorAll('table tbody tr');

      rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        expect(cells.length).toBeGreaterThanOrEqual(5);

        // Check that cells have content (either figure or text)
        cells.forEach((cell, index) => {
          if (index === 0) {
            // First cell should have figure
            expect(cell.querySelector('figure')).toBeTruthy();
          } else {
            // Other cells should have text content
            expect(cell.textContent.trim().length).toBeGreaterThan(0);
          }
        });
      });
    });

    test('should have figcaptions matching user names in the table', () => {
      const rows = document.querySelectorAll('table tbody tr');

      rows.forEach(row => {
        const cells = Array.from(row.querySelectorAll('td'));
        const figcaption = cells[0].querySelector('figcaption');
        const firstName = cells[1].textContent.trim();
        const lastName = cells[2].textContent.trim();

        if (figcaption && firstName && lastName) {
          const fullName = `${firstName} ${lastName}`;
          expect(figcaption.textContent.trim()).toBe(fullName);
        }
      });
    });
  });

  describe('File Organization', () => {
    test('should have images folder', () => {
      const imagesPath = path.join(__dirname, '..', 'images');
      expect(fs.existsSync(imagesPath)).toBeTruthy();
    });

    test('should have user images in images folder', () => {
      const imagesPath = path.join(__dirname, '..', 'images');
      const user1 = path.join(imagesPath, 'user1.jpg');
      const user2 = path.join(imagesPath, 'user2.jpg');
      const user3 = path.join(imagesPath, 'user3.jpg');

      expect(
        fs.existsSync(user1) ||
        fs.existsSync(user1.replace('.jpg', '.png')) ||
        fs.existsSync(user1.replace('.jpg', '.jpeg'))
      ).toBeTruthy();

      expect(
        fs.existsSync(user2) ||
        fs.existsSync(user2.replace('.jpg', '.png')) ||
        fs.existsSync(user2.replace('.jpg', '.jpeg'))
      ).toBeTruthy();

      expect(
        fs.existsSync(user3) ||
        fs.existsSync(user3.replace('.jpg', '.png')) ||
        fs.existsSync(user3.replace('.jpg', '.jpeg'))
      ).toBeTruthy();
    });
  });
});
