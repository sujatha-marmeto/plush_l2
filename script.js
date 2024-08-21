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
            "src": "https://example.com/workstation.jpg",
            "description": "A high-end workstation for professional designers.",
            "category": "electronics",
            "tags": ["workstation", "electronics", "gadgets"],
            "favorites": ["User3"],
            "similar": [
                { "title": "Freelancer Setup", "src": "https://example.com/freelancer-setup.jpg" },
                { "title": "Office Workstation", "src": "https://example.com/office-workstation.jpg" }
            ]
        },
        {
            "id": 3,
            "title": "Smartphone",
            "src": "https://example.com/smartphone.jpg",
            "description": "A powerful smartphone with a sleek design.",
            "category": "electronics",
            "tags": ["smartphone", "electronics", "gadgets"],
            "favorites": ["User1", "User4"],
            "similar": [
                { "title": "Gaming Phone", "src": "https://example.com/gaming-phone.jpg" },
                { "title": "Business Phone", "src": "https://example.com/business-phone.jpg" }
            ]
        },
        {
            "id": 4,
            "title": "Digital Camera",
            "src": "https://example.com/camera.jpg",
            "description": "Capture moments with this high-resolution camera.",
            "category": "electronics",
            "tags": ["camera", "photography", "electronics"],
            "favorites": ["User2", "User5"],
            "similar": [
                { "title": "Action Camera", "src": "https://example.com/action-camera.jpg" },
                { "title": "DSLR Camera", "src": "https://example.com/dslr-camera.jpg" }
            ]
        },
        {
            "id": 5,
            "title": "Wireless Headphones",
            "src": "https://example.com/headphones.jpg",
            "description": "Enjoy high-quality sound with these wireless headphones.",
            "category": "electronics",
            "tags": ["headphones", "electronics", "gadgets"],
            "favorites": ["User3", "User6"],
            "similar": [
                { "title": "Gaming Headset", "src": "https://example.com/gaming-headset.jpg" },
                { "title": "Noise-Cancelling Headphones", "src": "https://example.com/noise-cancelling-headphones.jpg" }
            ]
        }   
    ],
    "favorites": [
        {
            "image": "https://example.com/laptop-favorite1.jpg",
            "altText": "Open laptop with black screen",
            "photographer": "Jane Smith",
            "tags": ["favorite"]
        },
        {
            "image": "https://example.com/laptop-favorite2.jpg",
            "altText": "Man working on a laptop",
            "photographer": "Tom Johnson",
            "tags": ["favorite"]
        },
        {
            "image": "https://example.com/laptop-favorite3.jpg",
            "altText": "Laptop with a dark background",
            "photographer": "Alex Brown",
            "tags": ["favorite"]
        }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchResultsContainer = document.getElementById("search-results");
    const favoritesContainer = document.getElementById("favorites");
    const staticSimilarContainer = document.getElementById("static-similar");

    if (!favoritesContainer) {
        console.error('Favorites container not found');
        return;
    }

    if (!staticSimilarContainer) {
        console.error('Static similar items container not found');
        return;
    }

    let favoritesList = [...jsonData.favorites]; // Start with static favorites

    // Function to render the favorites list
    function renderFavorites() {
        if (!favoritesContainer) {
            console.error('Favorites container is not available');
            return;
        }

        favoritesContainer.innerHTML = "";
        if (favoritesList.length === 0) {
            favoritesContainer.innerHTML = "<p>No favorites yet.</p>";
            return;
        }

        favoritesList.forEach(favorite => {
            const favoriteItem = document.createElement("div");
            favoriteItem.className = "favorite-item border border-yellow-400 rounded-lg p-4 w-full mb-4 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl";
            favoriteItem.innerHTML = `
                <img src="${favorite.image}" alt="${favorite.altText}" class="w-full h-auto rounded-md">
                <p class="mt-2 text-center text-gray-700">Photographer: ${favorite.photographer}</p>
            `;
            favoritesContainer.appendChild(favoriteItem);
        });
    }

    // Function to add a favorite
    function addFavorite(favorite) {
        if (!favoritesList.some(f => f.image === favorite.image)) {
            favoritesList.push(favorite);
            renderFavorites();
        }
    }

    // Function to render static similar items
    function renderStaticSimilarItems() {
        if (!staticSimilarContainer) {
            console.error('Static similar items container is not available');
            return;
        }

        staticSimilarContainer.innerHTML = "<h4 class='text-lg font-bold mb-2'>Similar Items:</h4>";
        
        const list = document.createElement("ul");
        list.className = "list-disc pl-5 space-y-2 flex flex-row";

        jsonData.items.forEach(item => {
            item.similar.forEach(similar => {
                const listItem = document.createElement("li");
                listItem.className = "flex items-center space-x-4 ";

                listItem.innerHTML = `
                    <img src="${similar.src}" alt="${similar.title}" class="w-16 h-16 object-cover rounded-md">
                    <p class="text-gray-700">${similar.title}</p>
                `;
                list.appendChild(listItem);
            });
        });

        staticSimilarContainer.appendChild(list);
    }

    // Event listener for search input
    searchInput.addEventListener("input", (event) => {
        const searchTerm = event.target.value.toLowerCase();
        searchResultsContainer.innerHTML = "";

        if (searchTerm === "") {
            return;
        }

        jsonData.items.forEach(item => {
            if (item.title.toLowerCase().includes(searchTerm) || 
                item.tags.some(tag => tag.toLowerCase().includes(searchTerm))) {
                
                const resultItem = document.createElement("div");
                resultItem.className = "search-result border border-gray-300 rounded-lg p-4 mb-4 shadow-md";
                resultItem.innerHTML = `
                    <h3 class="text-xl font-bold mb-2">${item.title}</h3>
                    <img src="${item.src}" alt="${item.description}" class="w-full h-auto rounded-md mb-2">
                    <p class="text-gray-700 mb-2">${item.description}</p>
                    <button class="favorite-btn bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600" data-id="${item.id}">Add to Favorites</button>
                `;

                searchResultsContainer.appendChild(resultItem);
            }
        });

        // Add event listeners for dynamically created favorite buttons
        document.querySelectorAll(".favorite-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
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
    });

    // Initial rendering of favorites and static similar items
    renderFavorites();
    renderStaticSimilarItems();
});