import { SvelteComponent } from 'svelte';

// code is moslty taken from svelt2tsx:
// https://github.com/sveltejs/language-tools/tree/master/packages/svelte2tsx
/*
MIT License

Copyright (c) 2019 David Pershouse

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
export declare class SvelteTypedComponent<Props, Events extends { [key: string]: any }, Slots> extends SvelteComponent {

    constructor(options: {
         /**
         * An HTMLElement to render to. This option is required.
         */
        target: Element;
        /**
         * A child of `target` to render the component immediately before.
         */
        anchor?: Element;
        /**
         * An object of properties to supply to the component.
         */
        props: Props;
        hydrate?: boolean;
        intro?: boolean;
        $$inline?: boolean;
    })

    /**
     * Causes the callback function to be called whenever the component dispatches an event.
     * A function is returned that will remove the event listener when called.
     */
    $on<K extends keyof Events>(event: K, handler: (e: Events[K]) => any): () => void;

    /**
     * Programmatically sets props on an instance.
     * `component.$set({ x: 1 })` is equivalent to `x = 1` inside the component's `<script>` block.
     * Calling this method schedules an update for the next microtask — the DOM is __not__ updated synchronously.
     */
    $set(props: Partial<Props>): void;

    // svelte2tsx-specific from:
    // https://github.com/sveltejs/language-tools
    /**
     * @internal This is for type checking capabilities only
     * and does not exist at runtime. Don't use this property. 
     */
    $$prop_def: Props;
    /**
     * @internal This is for type checking capabilities only
     * and does not exist at runtime. Don't use this property.
     */
    $$events_def: Events;
    /**
     * @internal This is for type checking capabilities only
     * and does not exist at runtime. Don't use this property.
     */
    $$slot_def: Slots;
}

export type SvelteAllProps = { [index: string]: any }