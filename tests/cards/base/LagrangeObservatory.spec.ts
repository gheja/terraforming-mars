import {expect} from 'chai';
import {LagrangeObservatory} from '../../../src/cards/base/LagrangeObservatory';
import {Game} from '../../../src/Game';
import {TestPlayers} from '../../TestingUtils';

describe('LagrangeObservatory', function() {
  it('Should play', function() {
    const card = new LagrangeObservatory();
    const player = TestPlayers.BLUE.newPlayer();
    const redPlayer = TestPlayers.RED.newPlayer();
    const game = new Game('foobar', [player, redPlayer], player);
    const action = card.play(player, game);
    expect(action).is.undefined;
    expect(player.cardsInHand).has.lengthOf(1);
    player.victoryPointsBreakdown.setVictoryPoints('victoryPoints', card.getVictoryPoints());
    expect(player.victoryPointsBreakdown.victoryPoints).to.eq(1);
  });
});
