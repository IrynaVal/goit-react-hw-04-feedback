import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const options = ['good', 'neutral', 'bad'];

export const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className={css.btns}>
    {options.map(option => (
      <button
        type="button"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
