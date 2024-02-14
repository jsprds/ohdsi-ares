export default {
  root: ({ props, context }) => ({
    class: [
      // Font
      "font-sans text-normal leading-none",

      // Spacing
      "m-0",
      "px-4",
      {
        "px-4 py-4": props.size == "large",
        "px-2 py-2": props.size == "small",
        "p-3": props.size == null,
      },

      // Colors
      "bg-surface-0 dark:bg-surface-800",
      "border border-surface-300 dark:border-surface-600",

      // States
      {
        "hover:border-primary-500 dark:hover:border-primary-400":
          !context.disabled,
        "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50":
          !context.disabled,
        "opacity-60 select-none pointer-events-none cursor-default":
          context.disabled,
      },

      // Misc
      "appearance-none",
      "transition-colors duration-200",
    ],
  }),
};
