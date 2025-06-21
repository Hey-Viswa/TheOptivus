// Hero Section Query
export const getHeroQuery = `*[_type == "hero"][0]`;

// About Section Query
export const getAboutQuery = `*[_type == "about"][0]`;

// Projects Section Query (ordered by order field)
export const getProjectsQuery = `*[_type == "project"] | order(order asc) {
  _id,
  title,
  slug,
  mainImage,
  categories[]->{title},
  projectDate,
  description,
  technologies[]->{name, logo},
  githubLink,
  liveLink
}`;

// Single Project Query (used for project details page if needed)
export const getProjectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  categories[]->{title},
  projectDate,
  description,
  technologies[]->{name, logo},
  githubLink,
  liveLink
}`;

// Experience Query (ordered by start date)
export const getExperienceQuery = `*[_type == "experience"] | order(startDate desc) {
  _id,
  company,
  position,
  logo,
  startDate,
  endDate,
  isCurrent,
  description
}`;

// Skills Query (grouped by category)
export const getSkillsQuery = `*[_type == "skill"] {
  _id,
  name,
  icon,
  proficiency,
  category
}`;

// Testimonials Query (ordered by specified order)
export const getTestimonialsQuery = `*[_type == "testimonial"] | order(order asc) {
  _id,
  name,
  position,
  company,
  image,
  testimonial
}`;

// Contact Information Query
export const getContactQuery = `*[_type == "contact"][0]`;

// Site Settings Query (if you have global settings)
export const getSiteSettingsQuery = `*[_type == "siteSettings"][0]`;
