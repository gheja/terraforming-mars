import {expect} from 'chai';
import {EventAnalysts} from '../../../src/cards/turmoil/EventAnalysts';
import {Game} from '../../../src/Game';
import {PartyName} from '../../../src/turmoil/parties/PartyName';
import {setCustomGameOptions, TestPlayers} from '../../TestingUtils';

describe('EventAnalysts', function() {
  it('Should play', function() {
    const card = new EventAnalysts();
    const player = TestPlayers.BLUE.newPlayer();

    const gameOptions = setCustomGameOptions();
    const game = new Game('foobar', [player], player, gameOptions);
    expect(card.canPlay(player, game)).is.not.true;

        game.turmoil!.sendDelegateToParty(player.id, PartyName.SCIENTISTS, game);
        game.turmoil!.sendDelegateToParty(player.id, PartyName.SCIENTISTS, game);
        game.turmoil!.sendDelegateToParty(player.id, PartyName.SCIENTISTS, game);
        expect(card.canPlay(player, game)).is.true;

        card.play(player, game);
        expect(game.turmoil!.getPlayerInfluence(player)).to.eq(3);
  });
});
