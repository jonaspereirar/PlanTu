import React, { useState, useMemo } from 'react';
import { Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, DateButton, DateText } from './styles';

const DateInput = ({ date, onChange }) => {
  const [opened, setOpened] = useState(false);

  const dateFormatted = useMemo(
    () =>
      format(date, "dd 'de' MMMM 'de' yyyy '", {
        locale: pt,
      }),
    [date]
  );

  function onDateChange(_, selectedDate) {
    const currentDate = selectedDate || date;
    setOpened(Platform.OS === 'ios');
    onChange(currentDate);
  }
  return (
    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      {opened && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          minimumDate={new Date()}
          display="spinner"
          onChange={onDateChange}
        />
      )}
    </Container>
  );
};

DateInput.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DateInput;
