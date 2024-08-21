const jsonData = {
    "items": [
        {
            "id": 1,
            "title": "Modern Laptop",
            "src": "https://s3-alpha-sig.figma.com/img/ef44/b368/42f13617440959686391574cf501ccc1?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LKEh7W~E-Ur63cRzgr41NRUK4L59y~OMo0WgR6CFivp3rmbZDTXnn-Ro7Q0t38hTMpxKD8I36sHpRC-jQ-IkQS2p2jRsvP63HEvMYV16tpiP~2ZgjWugQ8Gr3ttcHI1A1sCDXuhYRGFSckS73U4yYeKefr~-wYgBJSbC6m81EVQLRfPR~tN~T94V2NK-CU4QYBVodx0ThnQDJF47am1ez~bB63RsBbparXAHbSiY6LoC0wI8Mm6nl5Kw7WjoeAoTVjTdXAc4M5Vt8cAjGwvfkyOMvSwZD~gEAnrsu-W02Tos5CJnMvDJTQiWC1pJbWvK5~RECPLUA6WK5bAi96xRwA__",
            "description": "A sleek modern laptop for everyday use.",
            "category": "electronics",
            "tags": ["laptop", "electronics", "gadgets"],
            "favorites": ["User1", "User2"],
            "similar": [
                { "title": "Gaming Laptop", "src": "https://s3-alpha-sig.figma.com/img/ef44/b368/42f13617440959686391574cf501ccc1?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LKEh7W~E-Ur63cRzgr41NRUK4L59y~OMo0WgR6CFivp3rmbZDTXnn-Ro7Q0t38hTMpxKD8I36sHpRC-jQ-IkQS2p2jRsvP63HEvMYV16tpiP~2ZgjWugQ8Gr3ttcHI1A1sCDXuhYRGFSckS73U4yYeKefr~-wYgBJSbC6m81EVQLRfPR~tN~T94V2NK-CU4QYBVodx0ThnQDJF47am1ez~bB63RsBbparXAHbSiY6LoC0wI8Mm6nl5Kw7WjoeAoTVjTdXAc4M5Vt8cAjGwvfkyOMvSwZD~gEAnrsu-W02Tos5CJnMvDJTQiWC1pJbWvK5~RECPLUA6WK5bAi96xRwA__" },
                { "title": "Business Laptop", "src": "https://s3-alpha-sig.figma.com/img/ef44/b368/42f13617440959686391574cf501ccc1?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LKEh7W~E-Ur63cRzgr41NRUK4L59y~OMo0WgR6CFivp3rmbZDTXnn-Ro7Q0t38hTMpxKD8I36sHpRC-jQ-IkQS2p2jRsvP63HEvMYV16tpiP~2ZgjWugQ8Gr3ttcHI1A1sCDXuhYRGFSckS73U4yYeKefr~-wYgBJSbC6m81EVQLRfPR~tN~T94V2NK-CU4QYBVodx0ThnQDJF47am1ez~bB63RsBbparXAHbSiY6LoC0wI8Mm6nl5Kw7WjoeAoTVjTdXAc4M5Vt8cAjGwvfkyOMvSwZD~gEAnrsu-W02Tos5CJnMvDJTQiWC1pJbWvK5~RECPLUA6WK5bAi96xRwA__" }
            ]
        },
        {
            "id": 2,
            "title": "Designer Workstation",
            "src": "https://hips.hearstapps.com/hmg-prod/images/work-from-home-upgrades-1672775120.jpg",
            "description": "A high-end workstation for professional designers.",
            "category": "electronics",
            "tags": ["workstation", "office", "setup","electronics", "gadgets"],
            "favorites": ["User3"],
            "similar": [
                { "title": "Freelancer Setup", "src": "https://hips.hearstapps.com/hmg-prod/images/work-from-home-upgrades-1672775120.jpg" },
                { "title": "Office Workstation", "src": "https://www.computerworld.com/wp-content/uploads/2024/03/home-office-ideal-setup-angle-100843210-orig.jpg?quality=50&strip=all" }
            ]
        },
        {
            "id": 3,
            "title": "Smartphone",
            "src": "https://cdn.mos.cms.futurecdn.net/h7RghmVhRSKgsqSpRCgiL-1200-80.jpg",
            "description": "A powerful smartphone with a sleek design.",
            "category": "electronics",
            "tags": ["smartphone", "electronics", "gadgets"],
            "favorites": ["User1", "User4"],
            "similar": [
                { "title": "Gaming Phone", "src": "https://imgeng.jagran.com/images/2024/05/31/article/image/Best%20Touchscreen%20Laptops%20in%20India-1717149073237.jpg" },
                { "title": "Business Phone", "src": "https://cdn.mos.cms.futurecdn.net/h7RghmVhRSKgsqSpRCgiL-1200-80.jpg" }
            ]
        },
        {
            "id": 4,
            "title": "Digital Camera",
            "src": "https://www.premiumbeat.com/blog/wp-content/uploads/2020/07/Camera-Tech-Cover-photo.jpg",
            "description": "Capture moments with this high-resolution camera.",
            "category": "electronics",
            "tags": ["camera", "photography", "electronics"],
            "favorites": ["User2", "User5"],
            "similar": [
                { "title": "Action Camera", "src": "https://www.premiumbeat.com/blog/wp-content/uploads/2020/07/Camera-Tech-Cover-photo.jpg" },
                { "title": "DSLR Camera", "src": "https://i1.adis.ws/i/canon/eos-r7-lifestyle_c604337a3b374a94a080d40b43f3a920?$70-30-header-4by3-dt-jpg$" }
            ]
        },
        {
            "id": 5,
            "title": "Wireless Headphones",
            "src": "https://assets2.razerzone.com/images/pnx.assets/57c2af30b5d9a2b699b3e896b788e00f/headset-landingpg-500x500-blacksharkv2pro2023.jpg",
            "description": "Enjoy high-quality sound with these wireless headphones.",
            "category": "electronics",
            "tags": ["headphones", "electronics", "gadgets"],
            "favorites": ["User3", "User6"],
            "similar": [
                { "title": "Gaming Headset", "src": "https://assets2.razerzone.com/images/pnx.assets/57c2af30b5d9a2b699b3e896b788e00f/headset-landingpg-500x500-blacksharkv2pro2023.jpg" },
                { "title": "Noise-Cancelling Headphones", "src": "https://www.jabra.com/-/media/Images/Category-Pages/Professional/Office/V7-Refresh/Wireless_OverEar.jpg" }
            ]
        }   
    ],
    // "favorites": [
    //     {
    //         "image": "https://s3-alpha-sig.figma.com/img/3002/b7e6/ffb3306f01b51617e281261e2d199216?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nztJpiDQrDi~utkNHcKEJ7i3Mszr9AdsfLHCcqqXqzGftN1f1sAZ9aGWCc5YevdpyitfnEphpfnXzGmwodVzwKwKpHHD86AvD9bH6uSe1mltgLIR1jxU7RJqK21H9tiv8mx5qQk0J-aC91bvhxwWc5N-2el8IZdKYGPJYS8NkGyIcwg3-fJ0DcaVbj~9lhXmlxZ0DvHNt0~taqfXNGeFYsXlYGS3ZkbbDy6OJ7BcsSCq5CxnXEG5RgMhPxcH4tJHYo1vGmcalt7ajMoJ~G5ipr6-g0l8LFDQ-3OyZG4S6kMdZFzT1oRLFLH~-~1stB~dlgL897gApQWulp1jz41p1g__",
    //         "altText": "Open laptop with black screen",
    //         "photographer": "Jane Smith",
    //         "tags": ["favorite"]
    //     },
    //     {
    //         "image": "https://cdn.mos.cms.futurecdn.net/h7RghmVhRSKgsqSpRCgiL-1200-80.jpg",
    //         "altText": "Man working on a laptop",
    //         "photographer": "Tom Johnson",
    //         "tags": ["favorite"]
    //     },
    //     {
    //         "image": "https://imgeng.jagran.com/images/2024/05/31/article/image/Best%20Touchscreen%20Laptops%20in%20India-1717149073237.jpg",
    //         "altText": "Laptop with a dark background",
    //         "photographer": "Alex Brown",
    //         "tags": ["favorite"]
    //     }
    // ]
};

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchResultsContainer = document.getElementById("search-results");
    const favoritesContainer = document.getElementById("favorites");
    const staticSimilarContainer = document.getElementById("static-similar-items");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    if (!favoritesContainer || !staticSimilarContainer) {
        console.error('Favorites or Static Similar items container not found');
        return;
    }

    let favoritesList = [];
    let scrollIndex = 0;

    function updateFavoritesList() {
        favoritesList = [];
        jsonData.items.forEach(item => {
            item.favorites.forEach(user => {
                if (!favoritesList.some(f => f.image === item.src)) {
                    favoritesList.push({
                        image: item.src,
                        altText: item.title,
                        photographer: "Unknown",
                        tags: ["favorite"]
                    });
                }
            });
        });
    }

    function renderFavorites() {
        favoritesContainer.innerHTML = favoritesList.length === 0
            ? "<p>No favorites yet.</p>"
            : favoritesList.map(favorite => `
                <div class="favorite-item border w-30 bg-white border border-gray-300 p-4 w-full mb-4 shadow-lg transition-transform duration-300 hover:shadow-xl">
                    <img src="${favorite.image}" alt="${favorite.altText}" class="w-full h-auto rounded-md">
                    <p class="mt-2 text-center text-gray-700">Photographer: ${favorite.photographer}</p>
                </div>
            `).join('');
    }

    function addFavorite(favorite) {
        if (!favoritesList.some(f => f.image === favorite.image)) {
            favoritesList.push(favorite);
            renderFavorites();
        }
    }

    function removeFavorite(favorite) {
        favoritesList = favoritesList.filter(f => f.image !== favorite.image);
        renderFavorites();
    }

    function renderStaticSimilarItems() {
        staticSimilarContainer.innerHTML = jsonData.items.flatMap(item => item.similar.map(similar => {
            const isFavorite = favoritesList.some(f => f.image === similar.src);
            return `
                <div class="similar-item flex-none w-60 bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden mt-3">
                    <div class="relative flex">
                        <img src="${similar.src}" alt="${similar.title}" class="w-full h-32 object-cover">
                        <div class="wishlist-icon absolute ${isFavorite ? 'favorited' : ''}">
                            <i class="fas fa-heart ml-52"></i>
                        </div>
                    </div>
                    <div class="p-4">
                        <p class="text-gray-700 text-center">${similar.title}</p>
                    </div>
                </div>
            `;
        }).join(''));

        attachWishlistIconEvents();
        updateNavButtons();
    }

    function attachWishlistIconEvents() {
        document.querySelectorAll(".wishlist-icon").forEach(icon => {
            icon.addEventListener("click", () => {
                const imgSrc = icon.closest(".similar-item").querySelector("img").src;
                const isFavorited = icon.classList.contains("favorited");

                if (isFavorited) {
                    removeFavorite({
                        image: imgSrc,
                        altText: icon.closest(".similar-item").querySelector("img").alt,
                        photographer: "Unknown",
                        tags: ["favorite"]
                    });
                    icon.classList.remove("favorited");
                } else {
                    addFavorite({
                        image: imgSrc,
                        altText: icon.closest(".similar-item").querySelector("img").alt,
                        photographer: "Unknown",
                        tags: ["favorite"]
                    });
                    icon.classList.add("favorited");
                }
            });
        });
    }

    function updateNavButtons() {
        const containerWidth = staticSimilarContainer.scrollWidth;
        const viewWidth = staticSimilarContainer.clientWidth;
        const maxScroll = containerWidth - viewWidth;

        prevBtn.disabled = scrollIndex <= 0;
        nextBtn.disabled = scrollIndex >= maxScroll;
    }

    function scrollContainer(direction) {
        const viewWidth = staticSimilarContainer.clientWidth;
        const containerWidth = staticSimilarContainer.scrollWidth;
        const maxScroll = containerWidth - viewWidth;

        if (direction === 'prev') {
            scrollIndex = Math.max(0, scrollIndex - viewWidth);
        } else if (direction === 'next') {
            scrollIndex = Math.min(maxScroll, scrollIndex + viewWidth);
        }

        staticSimilarContainer.scrollTo({ left: scrollIndex, behavior: 'smooth' });
        updateNavButtons();
    }

    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        searchResultsContainer.innerHTML = jsonData.items
            .filter(item => item.title.toLowerCase().includes(searchTerm) ||
                item.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
            .map(item => `
                <div class="search-result border border-gray-300 rounded-lg p-4 mb-4 shadow-md bg-white border border-gray-300 rounded-lg">
                    <div class="flex flex-row gap-3">
                        <div class="w-40 h-40">
                            <img src="${item.src}" alt="${item.description}" class="w-50 h-70 rounded-md mb-2">
                        </div>
                        <div class="justify-end">
                            <h3 class="text-xl font-bold mb-2">${item.title}</h3>
                            <p class="text-gray-700 mb-2">${item.description}</p>
                            <button class="favorite-btn bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-600" data-id="${item.id}">Explore More</button>
                        </div>
                    </div>
                </div>
            `).join('');

        document.querySelectorAll(".favorite-btn").forEach(btn => {
            btn.addEventListener("click", e => {
                const itemId = parseInt(e.target.getAttribute("data-id"));
                const item = jsonData.items.find(i => i.id === itemId);

                if (item) {
                    addFavorite({
                        image: item.src,
                        altText: item.title,
                        photographer: "Unknown",
                        tags: ["favorite"]
                    });
                }
            });
        });
    }

    searchInput.addEventListener("input", handleSearch);

    updateFavoritesList();
    renderFavorites();
    renderStaticSimilarItems();

    prevBtn.addEventListener("click", () => scrollContainer('prev'));
    nextBtn.addEventListener("click", () => scrollContainer('next'));
});
