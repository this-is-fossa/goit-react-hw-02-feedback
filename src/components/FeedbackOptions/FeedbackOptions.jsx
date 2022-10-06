import PropTypes from 'prop-types';
import { FeedBackList, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <FeedBackList>
      {options.map( lable => {
        return (
          <li key={lable}>
            <Btn onClick={() => onLeaveFeedback(lable)}>{lable}</Btn>
          </li>
        )
      })}
    </FeedBackList>
  )
}

FeedbackOptions.propType = {
  options: PropTypes.arrayOf(
    PropTypes.string
  )
}
