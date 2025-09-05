/**
 * Generates SEO-friendly URL slugs from text
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    // Remove special characters except hyphens and spaces
    .replace(/[^\w\s-]/g, '')
    // Replace spaces and multiple hyphens with single hyphen
    .replace(/[\s_-]+/g, '-')
    // Remove leading/trailing hyphens
    .replace(/^-+|-+$/g, '');
}

/**
 * Generates a unique slug by checking against existing slugs
 */
export function generateUniqueSlug(title: string, existingSlugs: string[]): string {
  let baseSlug = slugify(title);
  let slug = baseSlug;
  let counter = 1;

  // Ensure uniqueness
  while (existingSlugs.includes(slug)) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }

  return slug;
}

/**
 * Validates if a slug follows SEO best practices
 */
export function validateSlug(slug: string): { isValid: boolean; issues: string[] } {
  const issues: string[] = [];

  // Check length (ideal: 3-5 words, max 60 characters for SEO)
  if (slug.length > 60) {
    issues.push('Slug is too long (over 60 characters)');
  }

  if (slug.length < 3) {
    issues.push('Slug is too short (under 3 characters)');
  }

  // Check for consecutive hyphens
  if (slug.includes('--')) {
    issues.push('Contains consecutive hyphens');
  }

  // Check for leading/trailing hyphens
  if (slug.startsWith('-') || slug.endsWith('-')) {
    issues.push('Starts or ends with hyphen');
  }

  // Check for special characters
  if (!/^[a-z0-9-]+$/.test(slug)) {
    issues.push('Contains invalid characters (use only lowercase letters, numbers, and hyphens)');
  }

  // Check word count (ideal: 3-8 words)
  const wordCount = slug.split('-').length;
  if (wordCount > 8) {
    issues.push('Too many words (over 8 words)');
  }

  return {
    isValid: issues.length === 0,
    issues
  };
}