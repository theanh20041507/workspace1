// Lấy ra các phần tử cần thiết
const showSearchHistoryBtn = document.getElementById("showSearchHistoryBtn");
const searchHistory = document.getElementById("searchHistory");

// Thêm sự kiện click vào class btn
showSearchHistoryBtn.addEventListener("click", function () {
    // Kiểm tra trạng thái hiển thị của class header__search-history
    if (searchHistory.style.display === "block" || searchHistory.style.display === "") {
        searchHistory.style.display = "none"; // Ẩn class header__search-history
    } else {
        searchHistory.style.display = "block"; // Hiển thị class header__search-history
    }
});


// js detail
function changeMainImage(clickedImage) {
    var mainImage = document.querySelector('.detail__img--main img');
    var newImageUrl = clickedImage.src;

    mainImage.src = newImageUrl;
    mainImage.style.transform = 'scale(1)'; // Reset the scale to 1 when changing the main image

    mainImage.addEventListener('mouseenter', function () {
        mainImage.style.transform = 'scale(1.2)';
    });

    mainImage.addEventListener('mouseleave', function () {
        mainImage.style.transform = 'scale(1)';
    });
}

// document.addEventListener('DOMContentLoaded', function () {
document.addEventListener('DOMContentLoaded', function () {
    var descriptionItems = document.querySelectorAll('.detail__intro--extra__item');

    descriptionItems.forEach(function (descriptionItem) {
        var descriptionIcon = descriptionItem.querySelector('.fa-plus');
        var descriptionContent = descriptionItem.querySelector('.more__description');
        var additionalInformation = descriptionItem.querySelector('.more__additional--information')
        var reviewContent = descriptionItem.querySelector('.more__review');

        // Add click event listener to each description item
        descriptionItem.addEventListener('click', function () {
            // Toggle the visibility of the description content
            if (descriptionContent) {
                descriptionContent.style.display = (descriptionContent.style.display === 'none') ? 'block' : 'none';
            }

            // Toggle the visibility of additional information
            if (additionalInformation) {
                additionalInformation.style.display = (additionalInformation.style.display === 'none') ? 'block' : 'none';
            }
            if (reviewContent) {
                reviewContent.style.display = (reviewContent.style.display === 'none') ? 'block' : 'none';
            }

            // Toggle the plus and minus icons
            if (descriptionIcon) {
                if (descriptionIcon.classList.contains('fa-plus')) {
                    descriptionIcon.classList.remove('fa-plus');
                    descriptionIcon.classList.add('fa-minus');
                } else {
                    descriptionIcon.classList.remove('fa-minus');
                    descriptionIcon.classList.add('fa-plus');
                }
            }
        });
    });
});
// star


