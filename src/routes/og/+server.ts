import { error } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

// Svelte Component To Image
import { image_from_component, type RenderOptions } from 'svelte-component-to-image'

// Normal .svelte component
import OGCard from "$lib/OGCard.svelte";

export const GET: RequestHandler = (async ({url}) => {
    try {
        const options: RenderOptions = {
            width: 1200,
            height: 600,
            props: {
                title: url.searchParams.get('title') ?? 'text not found'
            },
            fonts: [
                {
                    name: 'Poppins',
                    url: `https://og.kaanksc.com/Poppins-200.ttf`,
                    weight: 200,
                    style: 'normal'
                },
                {
                    name: 'Poppins',
                    url: `https://og.kaanksc.com/Poppins-700.ttf`,
                    weight: 700,
                    style: 'normal'
                },
                {
                    name: 'Poppins',
                    url: `https://og.kaanksc.com/Poppins-900.ttf`,
                    weight: 900,
                    style: 'normal'
                },
            ]
        }

        // pass the component and options to the package
        const image    = await image_from_component(OGCard, options)
        const response = new Response(image)
        response.headers.append('Content-Type', 'image/png')
        response.headers.append('Cache-Control', 's-maxage=604800, stale-while-revalidate=604800')
        return response
    } catch (e) {
        console.error(e)
        throw error(500, 'Error trying to generate image from component.')
    }
}) satisfies RequestHandler