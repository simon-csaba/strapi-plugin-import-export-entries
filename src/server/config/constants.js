import { SchemaUID } from '../types';

SchemaUID = require('../types')

const CustomSlugs = {
  MEDIA: 'media',
  WHOLE_DB: 'custom:db',
};

const CustomSlugToSlug = {
  [CustomSlugs.MEDIA]: 'plugin::upload.file',
} ;

const isCustomSlug = (slug) => {
  return !!CustomSlugToSlug[slug];
};

module.exports = {
  CustomSlugs,
  CustomSlugToSlug,
  isCustomSlug,
};
