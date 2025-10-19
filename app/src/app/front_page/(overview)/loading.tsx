/**
 * @fileoverview `loading.tsx` is a special Next.js file built on top of React Suspense.
 * It automatically detects this file within a route segment (like `/(overview)`)
 * and uses the default component exported from it—the `Loading()` function—as the fallback UI.
 *
 * @description This file allows you to create fallback UI to show as a replacement while page content loads.
 * It **does not need to be imported directly** as Next.js handles its integration.
 *
 * @see {@link https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming | Next.js Loading UI and Streaming Documentation}
 */

/**
 * Renders the loading fallback UI for the current route segment.
 * Next.js automatically uses this component while the segment's content is loading.
 *
 * @returns {JSX.Element} The fallback UI component.
 */
import { ImageTileSkeleton } from "@/app/ui/front_page/skeletons";

export default function Loading() {
    return <ImageTileSkeleton />;
}

