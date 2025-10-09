'use client'

// This module contains place holders which are statically rendered, and is replaced by the data driven ui elements once they load.


export function ImageTileSkeleton() {
    return (
        <div className="relative overflow-hidden rounded-xl bg-gray-100
            shadow-sm h-60 w-70 animate-pulse opacity-40">
        </div>
    );
}
