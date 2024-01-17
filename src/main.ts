import App from "./App.svelte";
import "./style.css";

export const MAX_AGE_IN_MILLISECONDS = 85 * 365 * 24 * 60 * 60 * 1_000;
export const app = new App({ target: document.body });
