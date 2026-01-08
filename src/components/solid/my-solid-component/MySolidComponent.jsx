import { createSignal, createEffect } from "solid-js";

export default function MySolidComponent(props) {
    const [count, setCount] = createSignal(0);

    createEffect(() => {
        console.log("Count changed to:", count());
    });

    return (
        <div class="border p-4">
            <h3>This is a solid component</h3>
            <p>Solid count: {count()}</p>
            <button class="mt-2 cursor-pointer bg-blue-600 px-4 py-1 text-white" onClick={() => setCount(count() + 1)}>
                Increment
            </button>
            {props.children && <div class="taglist">{props.children}</div>}
        </div>
    );
}
