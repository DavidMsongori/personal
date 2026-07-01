async function loadComponent(id, file) {

    const container = document.getElementById(id);

    if (!container) return;

    try {

        const response = await fetch(file);

        if (!response.ok) throw new Error(`Failed to load ${file}`);

        container.innerHTML = await response.text();

    } catch (error) {

        console.error(error);

    }

}

document.addEventListener("DOMContentLoaded", async () => {

    await loadComponent("header", "components/header.html");

    await loadComponent("footer", "components/footer.html");

    // Initialize your existing script after components exist
    if (typeof initNavigation === "function") {
        initNavigation();
    }

});
