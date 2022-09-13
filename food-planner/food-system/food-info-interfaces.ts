
export interface Nutrition {

}

export interface FoodConfig {
    nutrition: Nutrition
    ingredients: Array<FoodConfig>
    servingSize: { amount: number, unit: string }
}

class Food implements FoodConfig {
    nutrition: Nutrition
    ingredients: Array<FoodConfig>
    servingSize: { amount: number, unit: string }

    constructor(cfg:FoodConfig){
        this.nutrition = cfg.nutrition
        this.ingredients = cfg.ingredients
        this.servingSize = cfg.servingSize
    }

}