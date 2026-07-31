document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const diagnosticsButton = document.querySelector("[data-copy-diagnostics]");
const diagnosticsStatus = document.querySelector("[data-copy-status]");

if (diagnosticsButton && diagnosticsStatus) {
  diagnosticsButton.addEventListener("click", async () => {
    const checklist = [
      "Writer’s Desk version:",
      "macOS version:",
      "Mac model:",
      "What I was doing:",
      "What I expected:",
      "What happened instead:",
      "Can I reproduce it? Yes / No",
    ].join("\n");

    try {
      await navigator.clipboard.writeText(checklist);
      diagnosticsStatus.textContent = "Support checklist copied.";
    } catch {
      diagnosticsStatus.textContent =
        "Copy was unavailable. Include the app version, macOS version, Mac model, steps, and expected result.";
    }
  });
}
