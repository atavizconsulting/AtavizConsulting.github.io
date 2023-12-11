
document.addEventListener("DOMContentLoaded", function () {
    const articles = [
        {
            url: "opendataday.html",
            imageSrc: "images/news-opendataday.png",
            content: "At Syracuse Open Data Day 2023, Nick Johnson from Ataviz Consulting presented 'Visualizing Public Art Data with Tableau,' empowering participants to bridge technology and culture through data visualizations."
        },
        {
            url: "https://public.tableau.com/app/profile/ncjohnson315/viz/UpstateTrojansBasketballDashboard/PlayerDashboard",
            imageSrc: "images/news-upstatetrojans.png",
            content: "Ataviz Consulting is excited to announce their role as the official statistics and analytics provider for the Upstate Trojans, a new ABA basketball team, leveraging data-driven expertise to contribute to their on-court success."
        },
        {
            url: "https://magazine.cioreview.com/magazines/July2023/Predictive_Analytics/?digitalmagazine",
            imageSrc: "images/news-cioreview.png",
            content: "Ataviz Consulting is proud to announce our recognition as one of the Top 10 Predictive Analytics Solutions Providers 2023 by CIOReview Magazine."
        },
        {
            url: "https://www.youtube.com/watch?v=wfi1zKLSfYE",
            imageSrc: "images/news-cnyconversations.png",
            content: "Ataviz Consulting's founder, Nick Johnson, discusses the impact of data analytics on business success and the transformative role of Chat-GPT in the world on the CNY Conversations Podcast."
        },
        {
            url: "https://the-atlas.com/projects/syracuse-data-challenge-open-source-data-portal",
            imageSrc: "images/news-theatlas.png",
            content: "Nick Johnson's win in the Inaugural Syracuse Data Challenge fueled citizen innovation, heightened the city's open data portal awareness, and boosted public engagement for societal benefits."
        },
        {
            url: "https://data.syr.gov/pages/41a3b41603284f93980c609a5474182f",
            imageSrc: "images/news-syracusedatachallenge.png",
            content: "We are thrilled to announce that our very own founder, Nick Johnson, has been selected as the first-ever Syracuse Data Challenge winner by the City of Syracuse!"
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
