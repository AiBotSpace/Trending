/* Mermaid 图示渲染：仅当页面存在 mermaid 代码块时加载 CDN 并初始化。 */
(function () {
  function loadMermaid() {
    var blocks = document.querySelectorAll(".mermaid");
    if (!blocks.length) return;

    var script = document.createElement("script");
    script.type = "module";
    script.textContent =
      "import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';\n" +
      "mermaid.initialize({ startOnLoad: true, theme: 'neutral', securityLevel: 'loose',\n" +
      "  flowchart: { useMaxWidth: true, htmlLabels: true },\n" +
      "  sequence: { useMaxWidth: true } });\n";
    document.head.appendChild(script);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadMermaid);
  } else {
    loadMermaid();
  }
})();
