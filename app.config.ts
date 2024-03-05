export default defineAppConfig({
  ui: {
    primary: "apple",
    gray: "zinc",
    variables: {
      light: {
        background: "var(--color-gray-50)",
        foreground: "var(--color-gray-900)",
      },
      dark: {
        background: "var(--color-gray-900)",
        foreground: "var(--color-gray-200)",
      },
    },
    button: {
      rounded: "rounded-full",
      default: {
        size: "md",
        color: "black",
      },
    },
    input: {
      rounded: "rounded-full",
    },
    header: {
      wrapper: "lg:!border-transparent bg-gray-50 dark:bg-gray-900",
      links: {
        wrapper:
          "ring-1 ring-gray-200 dark:ring-gray-800 px-3 gap-x-0 rounded-full",
        base: "py-2 px-4 font-medium transition-colors relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full after:opacity-0 after:bg-gray-900 dark:after:bg-white after:transition-opacity",
        active: "text-gray-900 dark:text-white after:opacity-100",
        inactive:
          "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
      },
    },
    pricing: {
      card: {
        highlight: "ring-gray-900 dark:ring-white",
      },
    },
    icons: {
      dark: "i-ri-moon-fill",
      light: "i-ri-sun-fill",
      system: "i-ri-computer-line",
      search: "i-ri-search-line",
      external: "i-ri-external-link-line",
      chevron: "i-ri-arrow-down-s-line",
      hash: "i-ri-links-line",
    },
    content: {
      prose: {
        code: {
          icon: {
            php: "i-ri-braces-line",
            yml: "i-ri-braces-line",
          },
          button: {
            icon: {
              copy: "i-ri-file-copy-line",
              copied: "i-ri-checkbox-circle-line",
            },
          },
        },
      },
    },
  },
});
