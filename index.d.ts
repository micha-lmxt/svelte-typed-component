import { SvelteComponent } from 'svelte';
export declare class SvelteTypedComponent<Props, Events extends { [key: string]: any }, Slots> extends SvelteComponent {

    constructor(options: {
        target: Element;
        anchor?: Element;
        props: Props;
        hydrate?: boolean;
        intro?: boolean;
        $$inline?: boolean;
    })

    $on<K extends keyof Events>(event: K, handler: (e: Events[K]) => any): () => void;
    $set(props: Partial<Props>): void;

    $$prop_def: Props;
    $$events_def: Events;
    $$slot_def: Slots;
}
