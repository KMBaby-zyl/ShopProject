const CHANGE_DOOR = 'change_door';
const ADD_CUSTOMER = 'ADD_CUSTOMER';
const CLICK_CUSTOMER = 'CLICK_CUSTOMER';

export function changeDoor(text) {
  return { type: CHANGE_DOOR, text }
}

export function addCustom(id) {
  return { type: ADD_CUSTOMER, id: id }
}

export function clickCustom(id) {
  return { type: CLICK_CUSTOMER, id: id }
}

