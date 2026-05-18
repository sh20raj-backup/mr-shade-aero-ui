import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ["/*/dashboard", "/*/dashboard/*", "/*/project/*" ,"/*/project/*"],
        },
        sitemap: 'https://aeroui.com/sitemap.xml',
    }
}

export const dynamic = 'force-static'

