'use strict';

/* global CustomError, getLikedBrands, getTopBrandsForGender */

function solution(U, N) {
    return new Promise((resolve, reject) => {
        // Resolve the promise with the result
        var topBrandNames = [];
        var topBrands = [];
        var userLikedBrandsPromise = getLikedBrands(U.id).then(function(userLikedBrands) {
                // console.log(userLikedBrands);
                // console.log(N);

                if (userLikedBrands.length >= N) {
                    topBrands = userLikedBrands.slice(0, N);
                    // console.log(topBrands);
                    return topBrands;
                }
            });
            for (var i = 0; i < topBrands.length; i++){
                topBrandNames.push(topBrands[i].name);
            }
            console.log(userLikedBrandsPromise);
            console.log(topBrandNames);
            resolve(topBrandNames);

    //     var topBrandNames = [];

    //     else {
    //         var insertedBrands = 0;
    //         console.log(userLikedBrands);
    //         userLikedBrands.map(brand => {
    //             topBrandNames.push(brand.name);
    //             insertedBrands++;
    //         });

    //         getTopBrandsForGender(U.gender).map(brand => {
    //             var indexInTopBrands = topBrandNames.indexOf(brand.name);
    //             if ((indexInTopBrands == -1) && (window.insertedBrands < N)) {
    //                 topBrandNames.push(brand.name);
    //             }
    //         });
    //     }
    //     resolve(topBrandNames);
    // });
});
}