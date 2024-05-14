document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var bmi = weight / (height * height);
    var category;
    if (bmi <= 18.5) {
        category = "Underweight";
    } else if (bmi <= 24.9) {
        category = "Healthy weight";
    } else if (bmi <= 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }
    document.getElementById("result").style.display = "block";
    document.getElementById("bmi").innerText = bmi.toFixed(2);
    document.getElementById("category").innerText = category;
    var recommendation = getDietRecommendations(category);
    document.getElementById("recommendation").innerText = recommendation;
});

function getDietRecommendations(category) {
    switch (category) {
        case "Underweight":
            return "Focus on calorie-dense foods such as nuts, seeds, avocados, dairy products, whole grains, lean protein sources like chicken, turkey, fish, eggs, legumes, tofu, and healthy fats like olive oil and fatty fish. Eat smaller, more frequent meals throughout the day.";
        case "Healthy weight":
            return "Maintain a balanced diet with a variety of fruits, vegetables, lean protein sources, whole grains, and healthy fats. Stay hydrated and limit consumption of processed foods and sugary snacks.";
        case "Overweight":
            return "Emphasize portion control, include more fruits and vegetables, whole grains, lean protein sources, and healthy fats in your diet. Limit consumption of high-calorie and processed foods, sugary drinks, and snacks.";
        case "Obese":
            return "Consult with a healthcare professional or dietitian to create a personalized plan for weight management. Focus on reducing calorie intake, increasing physical activity, and making long-term lifestyle changes.";
    }
}