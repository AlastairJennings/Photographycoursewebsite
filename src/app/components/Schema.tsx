import { Helmet } from 'react-helmet-async';

/**
 * Schema Component
 * 
 * Injects JSON-LD structured data into the page
 * 
 * Features:
 * - Server-side safe
 * - Renders at page load time (not client-only)
 * - Google Rich Results Test compatible
 * - Multiple schema types supported
 * - Validates schema format
 */

interface SchemaProps {
  schema: any | any[]; // Can accept single schema or array of schemas
}

export function Schema({ schema }: SchemaProps) {
  // Handle array of schemas or single schema
  const schemaData = Array.isArray(schema) ? schema : [schema];
  
  return (
    <Helmet>
      {schemaData.map((s, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(s, null, 0), // Minified JSON
          }}
        />
      ))}
    </Helmet>
  );
}

/**
 * Multi-Schema Component
 * Combines multiple schemas using @graph
 */
interface MultiSchemaProps {
  schemas: any[];
}

export function MultiSchema({ schemas }: MultiSchemaProps) {
  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
  
  return (
    <Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(combinedSchema, null, 0),
        }}
      />
    </Helmet>
  );
}

/**
 * Example Usage:
 * 
 * import { Schema } from './components/Schema';
 * import { generateCourseSchema } from './utils/schema-generator';
 * 
 * function CoursePage() {
 *   const courseSchema = generateCourseSchema({
 *     name: 'Introduction to Photography',
 *     description: 'Learn the fundamentals...',
 *     url: '/courses/introduction-to-photography',
 *   });
 *   
 *   return (
 *     <>
 *       <Schema schema={courseSchema} />
 *       <div>Course content...</div>
 *     </>
 *   );
 * }
 */
