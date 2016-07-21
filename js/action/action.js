const CHANGE_DOOR = 'change_door';
const ADD_CUSTOMER = 'ADD_CUSTOMER';
const CLICK_CUSTOMER = 'CLICK_CUSTOMER';

export function changeDoor(text) {
  return { type: CHANGE_DOOR, text }
}

export function addCustom() {
  return { type: ADD_CUSTOMER}
}

export function clickCustom(item) {
  return { type: CLICK_CUSTOMER, item: item }
}

