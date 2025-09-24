
document.addEventListener("DOMContentLoaded", function () {
    const articles = [
        {
            url: "blog-the-state-of-data-in-2025.html",
            imageSrc: "images/blog1.png",
            content: "From AI going mainstream to dashboards evolving into decision-making tools, this 2025 snapshot breaks down the six biggest trends shaping how smart companies are using data to win."
        },
        {
            url: "blog-what-to-fix-first.html",
            imageSrc: "images/blog2.png",
            content: "A practical, no-fluff guide to help businesses identify and prioritize their most critical tech fixes using a simple triage framework."
        },
        {
            url: "blog-data-driven-company.html",
            imageSrc: "images/blog3.png",
            content: "Learn how small and mid-sized companies can make smarter decisions using data—without needing a dedicated data team."
        },
        {
            url: "blog-behind-the-buzzwords.html",
            imageSrc: "images/blog4.png",
            content: "Helping business leaders cut through tech buzzwords and make smarter decisions with data, automation, cloud, and strategy."
        },
        {
            url: "blog-ai-agent-isnt-coming-for-your-job.html",
            imageSrc: "images/blog5.png",
            content: "A sharp, no-fluff breakdown of why AI isn’t your biggest threat, but the people using it better than you are, and how to stay competitive in 2025."
        },
        {
            url: "blog-legacy-system-nightmare.html",
            imageSrc: "images/blog6.png",
            content: "A simple home plumbing fix turns into a powerful lesson on the hidden costs of legacy systems and why technical debt can’t be ignored."
        },
        {
            url: "blog-single-source-of-truth.html",
            imageSrc: "images/blog7.png",
            content: "A candid look at why building a “single source of truth” in data is harder than it sounds—and what it really takes to align teams, clean context, and earn trust in your numbers."
        },
        {
            url: "blog-tech-stack-graveyard.html",
            imageSrc: "images/blog8.png",
            content: "An honest look at why companies keep wasting money on the wrong tech tools, and a practical framework to finally get it right."
        },
        {
            url: "blog-2035-playbook.html",
            imageSrc: "images/blog9.png",
            content: "Discover how 2035 leaders will thrive by mastering adaptability, ethics, and the human side of tech-driven change."
        },
        {
            url: "blog-inbound-2025.html",
            imageSrc: "images/blog10.png",
            content: "INBOUND 2025 revealed that the real future isn’t just AI 2.0, but a world where continuous change management, system-wide optimization, and human-machine symbiosis redefine how businesses operate."
        },
        {
            url: "blog-bad-integrations.html",
            imageSrc: "images/blog11.png",
            content: "AI can’t fix fractured data and disconnected tools. True efficiency and competitive advantage come from seamless system integrations that turn chaos into clarity."
        }
    ];

    const shuffledArticles = articles.sort(() => Math.random() - 0.5);
    const selectedArticles = shuffledArticles.slice(0, 2);

    const featuredArticlesContainer = document.getElementById("featuredArticles");
    selectedArticles.forEach(article => {
        const articleElement = document.createElement("article");
        articleElement.innerHTML = `
            <a href="${article.url}" class="image"><img src="${article.imageSrc}" alt="" /></a>
            <p>${article.content}</p>
        `;
        featuredArticlesContainer.appendChild(articleElement);
    });
});
