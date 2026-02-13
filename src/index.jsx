import "./styles/tailwind.css";
import { render as solidRender } from "solid-js/web";

/* Utils imports */
import { updateCssVars } from "./components/utils/cssVariables";

/* Vanilla JS components imports */
import SimpleTag from "./components/base/simple-tag/SimpleTag";

/* Solid JS components imports */
import MySolidComponent from "./components/solid/my-solid-component/MySolidComponent.jsx";

const components = {
    tag: {
        Component: SimpleTag,
        dataInit: "tag",
        type: "vanilla",
    },
    solidComponent: {
        Component: MySolidComponent,
        dataInit: "my-solid-component",
        type: "solid",
    },
};

// ------------------------------
// --- Initialization -----------
// ------------------------------
function initComponents() {
    Object.values(components).forEach(({ Component, dataInit, type }) => {
        const elements = document.querySelectorAll(`[data-init="${dataInit}"]`);
        elements.forEach((el) => {
            if (type === "solid") {
                // Extract all data-attributes as props
                const props = {};
                for (const attr of el.attributes) {
                    if (attr.name.startsWith("data-") && attr.name !== "data-init") {
                        const propName = attr.name.replace(/^data-/, "");
                        props[propName] = attr.value;
                    }
                }

                // Extract all child nodes and pass them to the Solid component
                const childNodes = Array.from(el.childNodes);

                // Replace the original root element fully with the SolidJS component
                const fragment = document.createDocumentFragment();
                solidRender(() => <Component {...props}>{childNodes}</Component>, fragment);
                el.replaceWith(fragment);
            } else {
                new Component(el);
            }

            el.removeAttribute("data-init");
        });
    });
}

export function doInit() {
    updateCssVars();

    initComponents();
}

if (document.readyState !== "loading") {
    doInit();
} else {
    document.addEventListener("DOMContentLoaded", doInit);
}
