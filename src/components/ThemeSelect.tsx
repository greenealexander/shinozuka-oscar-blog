import { createEffect } from "solid-js";
import { themeChange } from "theme-change";

const ThemeSelect = () => {
  createEffect(() => {
    themeChange(false);
  });

  return (
    <>
      <div class="relative flex items-center">
        <div class="dropdown dropdown-hover dropdown-end">
          <label tabindex="0" class="btn btn-ghost">
            Theme
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu shadow bg-base-100 rounded-box"
          >
            <button
              data-set-theme="light"
              class="btn btn-ghost"
              data-act-class="ACTIVECLASS"
            >
              Light
            </button>
            <button
              data-set-theme="dark"
              class="btn btn-ghost"
              data-act-class="ACTIVECLASS"
            >
              Dark
            </button>{" "}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ThemeSelect;
