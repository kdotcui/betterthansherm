import React from "react";
import axios from "axios";

export default class NutritionalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      protein: [],
      fat: [],
      carbs: [],
      sodium: [],
      totalProtein: 0,
      totalFat: 0,
      totalCarbs: 0,
      totalSodium: 0,
    };
  }

  componentDidMount() {
    const { ingredients } = this.props;
    ingredients.forEach((ingredient) =>
      axios.get(`/api/food-data?query=${ingredient}`).then((res) => {
        const proteinValue = res.data.foods[0].foodNutrients.find((nutrient) =>
          nutrient.nutrientName.includes("Protein")
        ).value;
        const fatValue = res.data.foods[0].foodNutrients.find((nutrient) =>
          nutrient.nutrientName.includes("Total lipid (fat)")
        ).value;
        const carbValue = res.data.foods[0].foodNutrients.find((nutrient) =>
          nutrient.nutrientName.includes("Total lipid (fat)")
        ).value;
        const sodiumValue = res.data.foods[0].foodNutrients.find((nutrient) =>
          nutrient.nutrientName.includes("Sodium")
        ).value;

        this.setState((prevState) => ({
          protein: [...prevState.protein, proteinValue],
          fat: [...prevState.fat, fatValue],
          carbs: [...prevState.carbs, carbValue],
          sodium: [...prevState.sodium, sodiumValue],
          totalProtein: prevState.totalProtein + proteinValue,
          totalFat: prevState.totalFat + fatValue,
          totalCarbs: prevState.totalCarbs + carbValue,
          totalSodium: prevState.totalSodium + sodiumValue,
        }));
      })
    );
  }

  render() {
    const { ingredients } = this.props;

    return (
      <div>
        <h1>Nutritional Info</h1>
        <h4>Total Fat: {this.state.totalFat}</h4>
        <h4>Total Carbohydrates: {this.state.totalCarbs}</h4>
        <h4>Total Protein: {this.state.totalProtein}</h4>
        <h4>Total Sodium: {this.state.totalSodium}</h4>
        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <h3>{ingredient}</h3>
            <p>Fat: {this.state.fat[index]}</p>
            <p>Carbohydrates: {this.state.carbs[index]}</p>
            <p>Protein: {this.state.protein[index]}</p>
            <p>Sodium: {this.state.sodium[index]}</p>
          </div>
        ))}
      </div>
    );
  }
}
