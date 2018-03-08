import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Pepperoni Pizza', 'Simply a tasty pizza', 'https://static.pexels.com/photos/708587/pexels-photo-708587.jpeg', [
      new Ingredient('Pepperoni', 20),
      new Ingredient('dough', 1)
    ]),
    new Recipe('Hamburger', 'The highest calorie diet', 'https://static.pexels.com/photos/750075/pexels-photo-750075.jpeg', [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1),
      new Ingredient('Lettuce', 1),
      new Ingredient('Tomatoes', 2)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
