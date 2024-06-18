// vite.config.ts
import react from "file:///Users/noah.waldner/Documents/frontify/fondue/node_modules/.pnpm/@vitejs+plugin-react@4.3.0_vite@5.2.12_@types+node@20.14.0_sass@1.77.5_terser@5.31.1_/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///Users/noah.waldner/Documents/frontify/fondue/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.14.0_rollup@4.18.0_typescript@5.4.5_vite@5.2.12_@types+n_vcfu6hxlly55w32ilns2avirvm/node_modules/vite-plugin-dts/dist/index.mjs";
import tsConfigPaths from "file:///Users/noah.waldner/Documents/frontify/fondue/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.4.5_vite@5.2.12_@types+node@20.14.0_sass@1.77.5_terser@5.31.1_/node_modules/vite-tsconfig-paths/dist/index.mjs";
import { configDefaults, defineConfig } from "file:///Users/noah.waldner/Documents/frontify/fondue/node_modules/.pnpm/vitest@1.6.0_@types+node@20.14.0_@vitest+ui@1.6.0_happy-dom@14.12.0_sass@1.77.5_terser@5.31.1/node_modules/vitest/dist/config.js";

// package.json
var peerDependencies = {
  "@frontify/fondue-icons": "workspace:^",
  "@frontify/fondue-tokens": "workspace:^",
  react: "^18",
  "react-dom": "^18"
};
var dependencies = {
  "@radix-ui/react-checkbox": "^1.0.4",
  "@radix-ui/react-dialog": "^1.0.5",
  "@radix-ui/react-dropdown-menu": "^2.0.6",
  "@radix-ui/react-label": "^2.0.2",
  "@radix-ui/react-popover": "^1.0.7",
  "@radix-ui/react-progress": "^1.0.3",
  "@radix-ui/react-separator": "^1.0.3",
  "@radix-ui/react-toggle-group": "^1.0.4",
  "@radix-ui/react-tooltip": "^1.0.7"
};

// vite.config.ts
var peerDependencies2 = Object.keys(peerDependencies);
var dependencies2 = Object.keys(dependencies);
var globals = {
  react: "React",
  "react-dom": "ReactDOM",
  "react-dom/client": "ReactDOMClient",
  "react/jsx-runtime": "react/jsx-runtime"
};
var vite_config_default = defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({ insertTypesEntry: true, rollupTypes: true, exclude: ["**/*.stories.tsx"] })
  ],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "FondueComponents",
      formats: ["es"]
    },
    sourcemap: true,
    minify: true,
    rollupOptions: {
      external: [...dependencies2, ...peerDependencies2, "react-dom/client", "react/jsx-runtime"],
      output: [
        {
          name: "FondueComponents",
          format: "es",
          preserveModules: true,
          preserveModulesRoot: "src",
          globals
        }
      ]
    }
  },
  test: {
    environment: "happy-dom",
    setupFiles: ["./src/setupTests.ts"],
    css: true,
    exclude: [...configDefaults.exclude, "scripts/templates/**/*.**"],
    coverage: {
      exclude: [
        ...configDefaults.exclude,
        ".storybook",
        "playwright",
        "scripts/templates",
        ".eslintrc.cjs",
        "**.config.{ts,cjs}",
        "**/**/*.{ct,spec,test,stories}.{ts,tsx}",
        "storybook-static"
      ],
      enabled: true,
      provider: "v8",
      reporter: ["text", "lcov", "html"]
    }
  }
});
export {
  vite_config_default as default,
  globals
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL25vYWgud2FsZG5lci9Eb2N1bWVudHMvZnJvbnRpZnkvZm9uZHVlL3BhY2thZ2VzL2NvbXBvbmVudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9ub2FoLndhbGRuZXIvRG9jdW1lbnRzL2Zyb250aWZ5L2ZvbmR1ZS9wYWNrYWdlcy9jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9ub2FoLndhbGRuZXIvRG9jdW1lbnRzL2Zyb250aWZ5L2ZvbmR1ZS9wYWNrYWdlcy9jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7LyogKGMpIENvcHlyaWdodCBGcm9udGlmeSBMdGQuLCBhbGwgcmlnaHRzIHJlc2VydmVkLiAqL1xuXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuaW1wb3J0IHRzQ29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XG5pbXBvcnQgeyBjb25maWdEZWZhdWx0cywgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXN0L2NvbmZpZyc7XG5cbmltcG9ydCB7IGRlcGVuZGVuY2llcyBhcyBkZXBlbmRlbmNpZXNNYXAsIHBlZXJEZXBlbmRlbmNpZXMgYXMgcGVlckRlcGVuZGVuY2llc01hcCB9IGZyb20gJy4vcGFja2FnZS5qc29uJztcblxuY29uc3QgcGVlckRlcGVuZGVuY2llcyA9IE9iamVjdC5rZXlzKHBlZXJEZXBlbmRlbmNpZXNNYXApO1xuY29uc3QgZGVwZW5kZW5jaWVzID0gT2JqZWN0LmtleXMoZGVwZW5kZW5jaWVzTWFwKTtcblxuZXhwb3J0IGNvbnN0IGdsb2JhbHMgPSB7XG4gICAgcmVhY3Q6ICdSZWFjdCcsXG4gICAgJ3JlYWN0LWRvbSc6ICdSZWFjdERPTScsXG4gICAgJ3JlYWN0LWRvbS9jbGllbnQnOiAnUmVhY3RET01DbGllbnQnLFxuICAgICdyZWFjdC9qc3gtcnVudGltZSc6ICdyZWFjdC9qc3gtcnVudGltZScsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgcmVhY3QoKSxcbiAgICAgICAgdHNDb25maWdQYXRocygpLFxuICAgICAgICBkdHMoeyBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLCByb2xsdXBUeXBlczogdHJ1ZSwgZXhjbHVkZTogWycqKi8qLnN0b3JpZXMudHN4J10gfSksXG4gICAgXSxcbiAgICBidWlsZDoge1xuICAgICAgICBsaWI6IHtcbiAgICAgICAgICAgIGVudHJ5OiAnLi9zcmMvaW5kZXgudHMnLFxuICAgICAgICAgICAgbmFtZTogJ0ZvbmR1ZUNvbXBvbmVudHMnLFxuICAgICAgICAgICAgZm9ybWF0czogWydlcyddLFxuICAgICAgICB9LFxuICAgICAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgICAgIG1pbmlmeTogdHJ1ZSxcbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICAgICAgZXh0ZXJuYWw6IFsuLi5kZXBlbmRlbmNpZXMsIC4uLnBlZXJEZXBlbmRlbmNpZXMsICdyZWFjdC1kb20vY2xpZW50JywgJ3JlYWN0L2pzeC1ydW50aW1lJ10sXG4gICAgICAgICAgICBvdXRwdXQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdGb25kdWVDb21wb25lbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAnZXMnLFxuICAgICAgICAgICAgICAgICAgICBwcmVzZXJ2ZU1vZHVsZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHByZXNlcnZlTW9kdWxlc1Jvb3Q6ICdzcmMnLFxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgdGVzdDoge1xuICAgICAgICBlbnZpcm9ubWVudDogJ2hhcHB5LWRvbScsXG4gICAgICAgIHNldHVwRmlsZXM6IFsnLi9zcmMvc2V0dXBUZXN0cy50cyddLFxuICAgICAgICBjc3M6IHRydWUsXG4gICAgICAgIGV4Y2x1ZGU6IFsuLi5jb25maWdEZWZhdWx0cy5leGNsdWRlLCAnc2NyaXB0cy90ZW1wbGF0ZXMvKiovKi4qKiddLFxuICAgICAgICBjb3ZlcmFnZToge1xuICAgICAgICAgICAgZXhjbHVkZTogW1xuICAgICAgICAgICAgICAgIC4uLmNvbmZpZ0RlZmF1bHRzLmV4Y2x1ZGUsXG4gICAgICAgICAgICAgICAgJy5zdG9yeWJvb2snLFxuICAgICAgICAgICAgICAgICdwbGF5d3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAnc2NyaXB0cy90ZW1wbGF0ZXMnLFxuICAgICAgICAgICAgICAgICcuZXNsaW50cmMuY2pzJyxcbiAgICAgICAgICAgICAgICAnKiouY29uZmlnLnt0cyxjanN9JyxcbiAgICAgICAgICAgICAgICAnKiovKiovKi57Y3Qsc3BlYyx0ZXN0LHN0b3JpZXN9Lnt0cyx0c3h9JyxcbiAgICAgICAgICAgICAgICAnc3Rvcnlib29rLXN0YXRpYycsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHByb3ZpZGVyOiAndjgnLFxuICAgICAgICAgICAgcmVwb3J0ZXI6IFsndGV4dCcsICdsY292JywgJ2h0bWwnXSxcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iLCAie1xuICAgIFwibmFtZVwiOiBcIkBmcm9udGlmeS9mb25kdWUtY29tcG9uZW50c1wiLFxuICAgIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICAgIFwidmVyc2lvblwiOiBcIjEuMy41XCIsXG4gICAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9Gcm9udGlmeS9mb25kdWVcIixcbiAgICBcInJlcG9zaXRvcnlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vRnJvbnRpZnkvZm9uZHVlXCIsXG4gICAgICAgIFwiZGlyZWN0b3J5XCI6IFwicGFja2FnZXMvY29tcG9uZW50c1wiXG4gICAgfSxcbiAgICBcImJ1Z3NcIjoge1xuICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9mcm9udGlmeS9mb25kdWUvaXNzdWVzXCJcbiAgICB9LFxuICAgIFwicHVibGlzaENvbmZpZ1wiOiB7XG4gICAgICAgIFwiYWNjZXNzXCI6IFwicHVibGljXCJcbiAgICB9LFxuICAgIFwiZXhwb3J0c1wiOiB7XG4gICAgICAgIFwiLlwiOiB7XG4gICAgICAgICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L2luZGV4LmQudHNcIixcbiAgICAgICAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L2ZvbmR1ZS1jb21wb25lbnRzLmpzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIuL3N0eWxlc1wiOiBcIi4vZGlzdC9zdHlsZS5jc3NcIlxuICAgIH0sXG4gICAgXCJmaWxlc1wiOiBbXG4gICAgICAgIFwiZGlzdFwiXG4gICAgXSxcbiAgICBcImVuZ2luZXNcIjoge1xuICAgICAgICBcIm5vZGVcIjogXCI+PTE4XCJcbiAgICB9LFxuICAgIFwic2NyaXB0c1wiOiB7XG4gICAgICAgIFwiYnVpbGRcIjogXCJ2aXRlIGJ1aWxkXCIsXG4gICAgICAgIFwiYnVpbGQ6c3Rvcnlib29rXCI6IFwic3Rvcnlib29rIGJ1aWxkXCIsXG4gICAgICAgIFwiaW5zdGFsbDpwbGF5d3JpZ2h0XCI6IFwicGxheXdyaWdodCBpbnN0YWxsIC0td2l0aC1kZXBzXCIsXG4gICAgICAgIFwibGludFwiOiBcImVzbGludCAuXCIsXG4gICAgICAgIFwibGludDpmaXhcIjogXCJlc2xpbnQgLS1maXggLlwiLFxuICAgICAgICBcInN0b3J5Ym9va1wiOiBcInN0b3J5Ym9vayBkZXYgLXAgNjAwNlwiLFxuICAgICAgICBcInR5cGVjaGVja1wiOiBcInRzYyAtLW5vRW1pdFwiLFxuICAgICAgICBcInRlc3RcIjogXCJ2aXRlc3QgcnVuIC0tY292ZXJhZ2VcIixcbiAgICAgICAgXCJ0ZXN0OnVpXCI6IFwidml0ZXN0IC0tdWlcIixcbiAgICAgICAgXCJ0ZXN0OndhdGNoXCI6IFwidml0ZXN0XCIsXG4gICAgICAgIFwidGVzdDpjb21wb25lbnRzXCI6IFwicGxheXdyaWdodCB0ZXN0IC0tdWlcIixcbiAgICAgICAgXCJ0ZXN0OmNvbXBvbmVudHM6Y2lcIjogXCJwbGF5d3JpZ2h0IHRlc3RcIixcbiAgICAgICAgXCJjcmVhdGU6Y29tcG9uZW50XCI6IFwidHN4IHNjcmlwdHMvY3JlYXRlTmV3Q29tcG9uZW50LnRzXCJcbiAgICB9LFxuICAgIFwicGVlckRlcGVuZGVuY2llc1wiOiB7XG4gICAgICAgIFwiQGZyb250aWZ5L2ZvbmR1ZS1pY29uc1wiOiBcIndvcmtzcGFjZTpeXCIsXG4gICAgICAgIFwiQGZyb250aWZ5L2ZvbmR1ZS10b2tlbnNcIjogXCJ3b3Jrc3BhY2U6XlwiLFxuICAgICAgICBcInJlYWN0XCI6IFwiXjE4XCIsXG4gICAgICAgIFwicmVhY3QtZG9tXCI6IFwiXjE4XCJcbiAgICB9LFxuICAgIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICAgICAgXCJAcmFkaXgtdWkvcmVhY3QtY2hlY2tib3hcIjogXCJeMS4wLjRcIixcbiAgICAgICAgXCJAcmFkaXgtdWkvcmVhY3QtZGlhbG9nXCI6IFwiXjEuMC41XCIsXG4gICAgICAgIFwiQHJhZGl4LXVpL3JlYWN0LWRyb3Bkb3duLW1lbnVcIjogXCJeMi4wLjZcIixcbiAgICAgICAgXCJAcmFkaXgtdWkvcmVhY3QtbGFiZWxcIjogXCJeMi4wLjJcIixcbiAgICAgICAgXCJAcmFkaXgtdWkvcmVhY3QtcG9wb3ZlclwiOiBcIl4xLjAuN1wiLFxuICAgICAgICBcIkByYWRpeC11aS9yZWFjdC1wcm9ncmVzc1wiOiBcIl4xLjAuM1wiLFxuICAgICAgICBcIkByYWRpeC11aS9yZWFjdC1zZXBhcmF0b3JcIjogXCJeMS4wLjNcIixcbiAgICAgICAgXCJAcmFkaXgtdWkvcmVhY3QtdG9nZ2xlLWdyb3VwXCI6IFwiXjEuMC40XCIsXG4gICAgICAgIFwiQHJhZGl4LXVpL3JlYWN0LXRvb2x0aXBcIjogXCJeMS4wLjdcIlxuICAgIH0sXG4gICAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgICAgICBcIkBldGNodGVhbS9zdG9yeWJvb2stYWRkb24tc3RhdHVzXCI6IFwiXjUuMC4wXCIsXG4gICAgICAgIFwiQGZyb250aWZ5L2VzbGludC1jb25maWctcmVhY3RcIjogXCJeMC4xNy42XCIsXG4gICAgICAgIFwiQGZyb250aWZ5L2ZvbmR1ZS1pY29uc1wiOiBcIndvcmtzcGFjZTpeXCIsXG4gICAgICAgIFwiQGZyb250aWZ5L2ZvbmR1ZS10b2tlbnNcIjogXCJ3b3Jrc3BhY2U6XlwiLFxuICAgICAgICBcIkBwbGF5d3JpZ2h0L2V4cGVyaW1lbnRhbC1jdC1yZWFjdFwiOiBcIjEuNDQuMVwiLFxuICAgICAgICBcIkBzdG9yeWJvb2svYWRkb24tYTExeVwiOiBcIl44LjEuNVwiLFxuICAgICAgICBcIkBzdG9yeWJvb2svYWRkb24tYWN0aW9uc1wiOiBcIl44LjEuNVwiLFxuICAgICAgICBcIkBzdG9yeWJvb2svYWRkb24tZXNzZW50aWFsc1wiOiBcIl44LjEuNVwiLFxuICAgICAgICBcIkBzdG9yeWJvb2svYWRkb24taW50ZXJhY3Rpb25zXCI6IFwiXjguMS41XCIsXG4gICAgICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1saW5rc1wiOiBcIl44LjEuNVwiLFxuICAgICAgICBcIkBzdG9yeWJvb2svYmxvY2tzXCI6IFwiXjguMS41XCIsXG4gICAgICAgIFwiQHN0b3J5Ym9vay9tYW5hZ2VyLWFwaVwiOiBcIl44LjEuNVwiLFxuICAgICAgICBcIkBzdG9yeWJvb2svcmVhY3RcIjogXCJeOC4xLjVcIixcbiAgICAgICAgXCJAc3Rvcnlib29rL3JlYWN0LXZpdGVcIjogXCJeOC4xLjVcIixcbiAgICAgICAgXCJAc3Rvcnlib29rL3RoZW1pbmdcIjogXCJeOC4xLjVcIixcbiAgICAgICAgXCJAdGFpbHdpbmRjc3MvZm9ybXNcIjogXCJeMC41LjdcIixcbiAgICAgICAgXCJAdGVzdGluZy1saWJyYXJ5L2plc3QtZG9tXCI6IFwiXjYuNC41XCIsXG4gICAgICAgIFwiQHRlc3RpbmctbGlicmFyeS9yZWFjdFwiOiBcIl4xNS4wLjdcIixcbiAgICAgICAgXCJAdGVzdGluZy1saWJyYXJ5L3VzZXItZXZlbnRcIjogXCJeMTQuNS4yXCIsXG4gICAgICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjAuMTQuMFwiLFxuICAgICAgICBcIkB0eXBlcy9yZWFjdFwiOiBcIl4xOC4zLjNcIixcbiAgICAgICAgXCJAdHlwZXMvc2lub25cIjogXCJeMTcuMC4zXCIsXG4gICAgICAgIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjogXCJeNC4zLjBcIixcbiAgICAgICAgXCJAdml0ZXN0L2NvdmVyYWdlLXY4XCI6IFwiXjEuNi4wXCIsXG4gICAgICAgIFwiQHZpdGVzdC91aVwiOiBcIl4xLjYuMFwiLFxuICAgICAgICBcImF1dG9wcmVmaXhlclwiOiBcIl4xMC40LjE5XCIsXG4gICAgICAgIFwiY2hhbGtcIjogXCJeNS4zLjBcIixcbiAgICAgICAgXCJlc2xpbnRcIjogXCJeOC41Ny4wXCIsXG4gICAgICAgIFwiZXNsaW50LXBsdWdpbi1ub3RpY2VcIjogXCJeMC45LjEwXCIsXG4gICAgICAgIFwiaGFwcHktZG9tXCI6IFwiXjE0LjEyLjBcIixcbiAgICAgICAgXCJwb3N0Y3NzXCI6IFwiXjguNC4zOFwiLFxuICAgICAgICBcInBvc3Rjc3MtaW1wb3J0XCI6IFwiXjE2LjEuMFwiLFxuICAgICAgICBcInByZXR0aWVyXCI6IFwiXjMuMy4wXCIsXG4gICAgICAgIFwicmVhY3RcIjogXCJeMTguMy4xXCIsXG4gICAgICAgIFwicmVhY3QtZG9tXCI6IFwiXjE4LjMuMVwiLFxuICAgICAgICBcInNhc3NcIjogXCJeMS43Ny40XCIsXG4gICAgICAgIFwic2lub25cIjogXCJeMTguMC4wXCIsXG4gICAgICAgIFwic3Rvcnlib29rXCI6IFwiXjguMS41XCIsXG4gICAgICAgIFwic3Rvcnlib29rLWRhcmstbW9kZVwiOiBcIl40LjAuMVwiLFxuICAgICAgICBcInRhaWx3aW5kLW1lcmdlXCI6IFwiXjIuMy4wXCIsXG4gICAgICAgIFwidGFpbHdpbmQtdmFyaWFudHNcIjogXCJeMC4yLjFcIixcbiAgICAgICAgXCJ0YWlsd2luZGNzc1wiOiBcIl4zLjQuM1wiLFxuICAgICAgICBcInRzeFwiOiBcIl40LjExLjJcIixcbiAgICAgICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuNC41XCIsXG4gICAgICAgIFwidml0ZVwiOiBcIl41LjIuMTJcIixcbiAgICAgICAgXCJ2aXRlLXBsdWdpbi1kdHNcIjogXCJeMy45LjFcIixcbiAgICAgICAgXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI6IFwiXjQuMy4yXCIsXG4gICAgICAgIFwidml0ZXN0XCI6IFwiXjEuNi4wXCJcbiAgICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sU0FBUztBQUNoQixPQUFPLG1CQUFtQjtBQUMxQixTQUFTLGdCQUFnQixvQkFBb0I7OztBQ3VDekMsdUJBQW9CO0FBQUEsRUFDaEIsMEJBQTBCO0FBQUEsRUFDMUIsMkJBQTJCO0FBQUEsRUFDM0IsT0FBUztBQUFBLEVBQ1QsYUFBYTtBQUNqQjtBQUNBLG1CQUFnQjtBQUFBLEVBQ1osNEJBQTRCO0FBQUEsRUFDNUIsMEJBQTBCO0FBQUEsRUFDMUIsaUNBQWlDO0FBQUEsRUFDakMseUJBQXlCO0FBQUEsRUFDekIsMkJBQTJCO0FBQUEsRUFDM0IsNEJBQTRCO0FBQUEsRUFDNUIsNkJBQTZCO0FBQUEsRUFDN0IsZ0NBQWdDO0FBQUEsRUFDaEMsMkJBQTJCO0FBQy9COzs7QURuREosSUFBTUEsb0JBQW1CLE9BQU8sS0FBSyxnQkFBbUI7QUFDeEQsSUFBTUMsZ0JBQWUsT0FBTyxLQUFLLFlBQWU7QUFFekMsSUFBTSxVQUFVO0FBQUEsRUFDbkIsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2Isb0JBQW9CO0FBQUEsRUFDcEIscUJBQXFCO0FBQ3pCO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sY0FBYztBQUFBLElBQ2QsSUFBSSxFQUFFLGtCQUFrQixNQUFNLGFBQWEsTUFBTSxTQUFTLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztBQUFBLEVBQ3BGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDSCxLQUFLO0FBQUEsTUFDRCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2xCO0FBQUEsSUFDQSxXQUFXO0FBQUEsSUFDWCxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDWCxVQUFVLENBQUMsR0FBR0EsZUFBYyxHQUFHRCxtQkFBa0Isb0JBQW9CLG1CQUFtQjtBQUFBLE1BQ3hGLFFBQVE7QUFBQSxRQUNKO0FBQUEsVUFDSSxNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixpQkFBaUI7QUFBQSxVQUNqQixxQkFBcUI7QUFBQSxVQUNyQjtBQUFBLFFBQ0o7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNGLGFBQWE7QUFBQSxJQUNiLFlBQVksQ0FBQyxxQkFBcUI7QUFBQSxJQUNsQyxLQUFLO0FBQUEsSUFDTCxTQUFTLENBQUMsR0FBRyxlQUFlLFNBQVMsMkJBQTJCO0FBQUEsSUFDaEUsVUFBVTtBQUFBLE1BQ04sU0FBUztBQUFBLFFBQ0wsR0FBRyxlQUFlO0FBQUEsUUFDbEI7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNKO0FBQUEsTUFDQSxTQUFTO0FBQUEsTUFDVCxVQUFVO0FBQUEsTUFDVixVQUFVLENBQUMsUUFBUSxRQUFRLE1BQU07QUFBQSxJQUNyQztBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogWyJwZWVyRGVwZW5kZW5jaWVzIiwgImRlcGVuZGVuY2llcyJdCn0K
