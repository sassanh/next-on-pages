import type { Json } from 'miniflare';
/**
 * @deprecated Use setupDevPlatform instead
 *
 * Sets up the bindings that need to be available during development time (using
 * Next.js' standard dev server)
 *
 * Note: the function is an async one but it doesn't need to be awaited
 *
 * @param options options indicating what bindings need to be available and where/if to persist them
 */
export declare function setupDevBindings(options: DevBindingsOptions): Promise<void>;
/**
 * Options for the next-dev bindings setup.
 */
export type DevBindingsOptions = {
    /**
     * Indicates if and where to persist the bindings data, if not present or `true` it defaults to the same location
     * used by wrangler v3: `.wrangler/state/v3` (so that the same data can be easily used by both the next dev server
     * and `wrangler pages dev`).
     * If `false` is specified no data is persisted on the filesystem.
     */
    persist?: boolean | {
        path: string;
    };
    /**
     * Record declaring the bindings that the application should get access to.
     *
     * The keys of this record are to represent the binding names (the same that will be used to access the resource from
     * within the Next.js application) and their values are objects containing a type property (describing what type of
     * binding the object represents) alongside other properties (which depend on the specified type).
     *
     */
    bindings: Record<string, Binding>;
};
export type Binding = {
    type: 'kv';
    id: string;
} | {
    type: 'r2';
    bucketName: string;
} | {
    type: 'd1';
    databaseName: string;
} | {
    type: 'd1';
    databaseId: string;
} | {
    type: 'durable-object';
    className: string;
    service: ServiceDesignator;
} | {
    type: 'service';
    service: ServiceDesignator;
} | {
    type: 'var';
    value: string | Json;
};
export interface ServiceDesignator {
    name: string;
}
