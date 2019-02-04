import utils from '../../utils';

const className = 'Wizard';
const statPrefs = [
  ['INT', 'CON', 'DEX', 'WIS', 'CHA', 'STR'],
  ['INT', 'DEX', 'CON', 'WIS', 'CHA', 'STR'],
  ['INT', 'CON', 'DEX', 'WIS', 'STR', 'CHA'],
  ['INT', 'DEX', 'CON', 'STR', 'CHA', 'WIS'],
];

export default {
  className,
  statPrefs,
  generateRandom: (abilityScores) => {
    const { optimizeAbilityScores } = utils;
    const optimizedAbilityScores = optimizeAbilityScores({ abilityScores, statPrefs });

    return {
      className,
      optimizedAbilityScores,
    };
  },
};
