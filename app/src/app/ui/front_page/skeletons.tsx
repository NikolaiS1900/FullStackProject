'use client'

/**
 * This module contains place holders which are statically rendered, and is replaced by the data driven ui elements once they load.
 * @returns a TSX component which renders a single tile.
 */

export function ImageTileSkeleton() {

    return (
        <div className="relative overflow-hidden rounded-xl bg-gray-400
            shadow-sm h-60 w-70 animate-pulse opacity-40">
        </div>
    );
}
