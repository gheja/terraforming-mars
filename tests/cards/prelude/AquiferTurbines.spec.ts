import {expect} from 'chai';
import {AquiferTurbines} from '../../../src/cards/prelude/AquiferTurbines';
import {Game} from '../../../src/Game';
import {Player} from '../../../src/Player';
import {Resources} from '../../../src/Resources';
import {TestPlayers} from '../../TestingUtils';

describe('AquiferTurbines', function() {
  let card : AquiferTurbines; let player : Player; let game : Game;

  beforeEach(function() {
    card = new AquiferTurbines();
    player = TestPlayers.BLUE.newPlayer();
    game = new Game('foobar', [player], player);
  });

  it('Can play', function() {
    player.megaCredits = 3;
    expect(card.canPlay(player, game)).is.true;
  });

  it('Should play', function() {
    player.megaCredits = 3;
    card.play(player, game);

    // PlaceOceanTile
    game.deferredActions.shift();

    // SelectHowToPayDeferred
    game.deferredActions.runNext();

    expect(player.getProduction(Resources.ENERGY)).to.eq(2);
    expect(player.megaCredits).to.eq(0);
  });
});
