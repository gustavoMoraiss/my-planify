import React, { useState } from 'react';
import { Button, Image, Text, TextInput } from 'react-native';
import colors from '../../constants/colors.js';
import styles from './styles.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';

const DateInput = ({ value, onChange, ...props }) => {

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const onDateOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <TouchableOpacity onPress={onDateOpen} style={styles.outlinedInput}>
        <Image
        resizeMode="contain"
          style={styles.icon}
          source={require('../../assets/resources/calendar.png')} />
        <Text style={styles.text}>{moment(value).format('L') || 'Select Date...'}</Text>
      </TouchableOpacity>

      <DatePicker
      mode="date"
        modal
        open={open}
        date={value}
        onConfirm={(date) => {
          setOpen(false)
          onChange(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </>
  );
};

export default React.memo(DateInput);
