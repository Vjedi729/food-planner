interface UnitNumber {
    amount: number, unit: string
}

interface VitOrMin extends UnitNumber {
    percentDV: number // 0 to 100
}

export namespace FDA {
    export type Ingredient = string

    export interface NutritionFacts {
        servingSize: {
            grams: number,
            custom?: UnitNumber
        } | {
            milliliters: number,
            custom?: UnitNumber
        }

        caloriesPerServing: number,
        
        nutrients: {
            fat: { // In grams
                total: number,
                saturated: number,
                trans?: number,
                polyunsaturated?: number,
                monounsaturated?: number,
            },
            colesterol: number // in mg
            sodium: number // in mg
            carbs: { // in grams
                total: number
                dietaryFiber: number
                sugar: {
                    total: number
                    added?: number
                }
            },
            protein: number // in grams
        }

        vitaminsAndMinerals: {
            vitamins: {
                D: VitOrMin
            }
            calcium: VitOrMin
            iron: VitOrMin
            potassium: VitOrMin
        }

        ingredients: Array<Ingredient>

        alergens: {
            contains: Array<Ingredient>
            trace: Array<Ingredient>
        }
    }
}