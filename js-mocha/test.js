const { expect } = require('chai');
const { Item, updateQuality } = require('./gildedRose'); 


describe('Gilded Rose', function() {

    // Test für normale Items
    it('should degrade quality by 1 for normal items', function() {
        const items = [new Item('normal item', 10, 20)];
        updateQuality(items);
        expect(items[0].quality).to.equal(19);
    });

    // Test für "Conjured" Items
    it('should degrade "Conjured" items quality twice as fast as normal items', function() {
        const items = [new Item('Conjured Mana Cake', 10, 20)];
        updateQuality(items);
        expect(items[0].quality).to.equal(18);
    });

    // Test für "Aged Brie"
    it('should increase the quality of "Aged Brie" as it ages', function() {
        const items = [new Item('Aged Brie', 2, 0)];
        updateQuality(items);
        expect(items[0].quality).to.equal(1);
    });

    // Test für "Backstage passes"
    it('should increase the quality of "Backstage passes" as the concert approaches', function() {
        const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10)];
        updateQuality(items);
        expect(items[0].quality).to.equal(11); // Qualität steigt um 1, wenn mehr als 10 Tage übrig sind
        updateQuality(items); // Ein weiterer Tag vergeht
        expect(items[0].quality).to.equal(13); // Qualität steigt um 2, wenn 10 Tage oder weniger übrig sind
    });

    // Test für "Sulfuras"
    it('should not decrease the quality or sellIn for "Sulfuras"', function() {
        const items = [new Item('Sulfuras, Hand of Ragnaros', 5, 80)];
        updateQuality(items);
        expect(items[0].quality).to.equal(80);
        expect(items[0].sellIn).to.equal(5);
    });
});