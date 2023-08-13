// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ReviewContract {
    struct Review {
        string id;
        string name;
        string timestamp;
        string R_cleanliness;
        string R_foodTaste;
        string R_overallexperience;
        string R_stafffriendlyness;
        string R_valueformoney;
        string R_comments;
    }

    mapping(string => Review) private reviews;

    function addReview(
        string memory id,
        string memory name,
        string memory timestamp,
        string memory R_cleanliness,
        string memory R_foodTaste,
        string memory R_overallexperience,
        string memory R_stafffriendlyness,
        string memory R_valueformoney,
        string memory R_comments
    ) public {
        Review memory newReview = Review(
            id,
            name,
            timestamp,
            R_cleanliness,
            R_foodTaste,
            R_overallexperience,
            R_stafffriendlyness,
            R_valueformoney,
            R_comments
        );
        reviews[id] = newReview;
    }

    function getReview(string memory id) public view returns (Review memory) {
        return reviews[id];
    }
}
