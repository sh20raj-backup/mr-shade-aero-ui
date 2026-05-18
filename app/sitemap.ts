/**
 * Sitemap Generator for Aero Website
 *
 * This module generates a sitemap for the Aero website based on the actual route structure.
 * It includes all static pages and handles proper URL formatting to ensure all content
 * is discoverable by search engines.
 */

import type { MetadataRoute } from 'next'
import { siteConfig } from '@/configs/site'

/**
 * Valid change frequency values for sitemap entries
 * @see https://www.sitemaps.org/protocol.html
 */
type ChangeFrequency =
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never'

/**
 * Static routes configuration for the Aero website
 * Based on the actual app router structure in apps/web/app/(frontend)
 */
const staticRoutes: Array<{
    url: string
    lastModified?: string | Date
    changeFrequency?: ChangeFrequency
    priority?: number
}> = [
    // Marketing pages
    {
        url: '',
        priority: 1.0,
        changeFrequency: 'weekly',
        lastModified: new Date(),
    },
    {
        url: '/contact',
        priority: 0.8,
        changeFrequency: 'monthly',
        lastModified: new Date(),
    },
    {
        url: '/privacy',
        priority: 0.5,
        changeFrequency: 'yearly',
        lastModified: new Date(),
    },
    {
        url: '/terms',
        priority: 0.5,
        changeFrequency: 'yearly',
        lastModified: new Date(),
    },
    // Authentication pages
    {
        url: '/login',
        priority: 0.7,
        changeFrequency: 'monthly',
        lastModified: new Date(),
    },
    // Dashboard pages (public routes only)
    {
        url: '/dashboard',
        priority: 0.9,
        changeFrequency: 'daily',
        lastModified: new Date(),
    },
]



/**
 * Main sitemap generation function that Next.js calls
 *
 * Generates a sitemap based on the static routes defined in the application
 *
 * @returns Complete sitemap for the Aero website
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Generate sitemap entries from static routes
    const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
        url: `${siteConfig.url}${route.url}`,
        lastModified: route.lastModified || new Date(),
        changeFrequency: route.changeFrequency || 'monthly',
        priority: route.priority || 0.5,
    }))

    // Sort URLs alphabetically for consistency
    return sitemapEntries.sort((a, b) => a.url.localeCompare(b.url))
}

export const dynamic = 'force-static'

