// vite.config.mjs
import { defineConfig } from "file:///E:/galico/mmt/node_modules/vite/dist/node/index.js";
import react from "file:///E:/galico/mmt/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production")
    // Set NODE_ENV
  },
  build: {
    // Set a custom chunk size warning limit (optional)
    chunkSizeWarningLimit: 1e3,
    // Adjust to your desired limit in kB
    rollupOptions: {
      output: {
        // Manual chunking
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.split("node_modules/")[1].split("/")[0].toString();
          }
          if (id.includes("src/components")) {
            return "components";
          }
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcZ2FsaWNvXFxcXG1tdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcZ2FsaWNvXFxcXG1tdFxcXFx2aXRlLmNvbmZpZy5tanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2dhbGljby9tbXQvdml0ZS5jb25maWcubWpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBkZWZpbmU6IHtcbiAgICAncHJvY2Vzcy5lbnYuTk9ERV9FTlYnOiBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAncHJvZHVjdGlvbicpLCAvLyBTZXQgTk9ERV9FTlZcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICAvLyBTZXQgYSBjdXN0b20gY2h1bmsgc2l6ZSB3YXJuaW5nIGxpbWl0IChvcHRpb25hbClcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDEwMDAsIC8vIEFkanVzdCB0byB5b3VyIGRlc2lyZWQgbGltaXQgaW4ga0JcblxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICAvLyBNYW51YWwgY2h1bmtpbmdcbiAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XG4gICAgICAgICAgLy8gU2VwYXJhdGUgbm9kZV9tb2R1bGVzIGludG8gdGhlaXIgb3duIGNodW5rc1xuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcbiAgICAgICAgICAgIHJldHVybiBpZC5zcGxpdCgnbm9kZV9tb2R1bGVzLycpWzFdLnNwbGl0KCcvJylbMF0udG9TdHJpbmcoKTsgLy8gU3BsaXQgYnkgdGhlIHBhY2thZ2UgbmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBZb3UgY2FuIGFsc28gY3JlYXRlIGN1c3RvbSBjaHVua3MgZm9yIHNwZWNpZmljIG1vZHVsZXNcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ3NyYy9jb21wb25lbnRzJykpIHtcbiAgICAgICAgICAgIHJldHVybiAnY29tcG9uZW50cyc7IC8vIEFsbCBjb21wb25lbnRzIGluIGEgc2luZ2xlIGNodW5rXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlPLFNBQVMsb0JBQW9CO0FBQzlQLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsUUFBUTtBQUFBLElBQ04sd0JBQXdCLEtBQUssVUFBVSxRQUFRLElBQUksWUFBWSxZQUFZO0FBQUE7QUFBQSxFQUM3RTtBQUFBLEVBQ0EsT0FBTztBQUFBO0FBQUEsSUFFTCx1QkFBdUI7QUFBQTtBQUFBLElBRXZCLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQTtBQUFBLFFBRU4sYUFBYSxJQUFJO0FBRWYsY0FBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQy9CLG1CQUFPLEdBQUcsTUFBTSxlQUFlLEVBQUUsQ0FBQyxFQUFFLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxTQUFTO0FBQUEsVUFDN0Q7QUFFQSxjQUFJLEdBQUcsU0FBUyxnQkFBZ0IsR0FBRztBQUNqQyxtQkFBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
