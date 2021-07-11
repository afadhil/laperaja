const assert = require('assert');

Feature('Favoriting Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Showing empty liked movies', ({ I }) => {
  I.amOnPage('/#/favorite');

  I.see('OOPS! NO DATA PROVIDED', '.no-data');
});

Scenario('Favoriting one restaurant then unfavoriting it', async ({ I }) => {
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

Scenario('Add review on restaurant detail', async ({ I }) => {
  I.seeElement('.card');

  I.click(locate('.card').first());

  I.seeElement('.comment-box__form input');
  I.seeElement('.comment-box__form textarea');
  I.seeElement('.comment-box__form button');

  I.seeElement('ul li');

  const lastReviewerName = locate('li div #customer__name').last();
  const lastReviewerComment = locate('li div #customer__review').last();
  const lastReviewerNameText = await I.grabTextFrom(lastReviewerName);
  const lastReviewerCommentText = await I.grabTextFrom(lastReviewerComment);

  const reviewerData = {
    name: 'Joker',
    comment: 'Harga kaki lima rasa bintang lima.. tapi boong',
  };
  I.fillField('input[type=text]', reviewerData.name);
  I.fillField('textarea', reviewerData.comment);
  I.click('.form__submit');

  assert.notStrictEqual(lastReviewerNameText, reviewerData.name);
  assert.notStrictEqual(lastReviewerCommentText, reviewerData.comment);
});
