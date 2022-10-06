import PropTypes from 'prop-types';
import { StatisticsList, StatisticsItem } from './Statistics.styled';
import { Notification } from '../Notification/Notification'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
     total() === 0 ? <Notification message="There is no feedback" /> : (<StatisticsList>
      <StatisticsItem>Good : {good}</StatisticsItem>
      <StatisticsItem>Neutral : {neutral}</StatisticsItem>
      <StatisticsItem>Bad : {bad}</StatisticsItem>
      <StatisticsItem>Total : {total()}</StatisticsItem>
      <StatisticsItem>Positive feedback : {positivePercentage()}%</StatisticsItem>
    </StatisticsList>)
  )
}

Statistics.propType = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number
}
