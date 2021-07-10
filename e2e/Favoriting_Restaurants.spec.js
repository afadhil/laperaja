const assert = require('assert');

Feature('Favoriting Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Showing empty liked movies', ({ I }) => {
  I.see('OOPS! NO DATA PROVIDED', '.no-data');
});

Scenario('Favoriting one restaurant', async ({ I }) => {
  I.see('OOPS! NO DATA PROVIDED', '.no-data');

  I.amOnPage('/');

  I.seeElement('.card');

  const firstRestaurantHeading = locate('.card article h3').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurantHeading);
  I.click(locate('.card').first());

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const favoritedRestaurantTitle = await I.grabTextFrom('.card article h3');

  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);

  I.click('.card');

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');

  I.see('OOPS! NO DATA PROVIDED', '.no-data');
});
