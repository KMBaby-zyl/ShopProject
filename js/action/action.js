const CHANGE_DOOR = 'change_door';
const ADD_CUSTOMER = 'ADD_CUSTOMER';
const CLICK_CUSTOMER = 'CLICK_CUSTOMER';
const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER';

export function changeDoor(text) {
  return { type: CHANGE_DOOR, text: text }
}

export function addCustom() {
  return { type: ADD_CUSTOMER}
}

export function clickCustom(id) {
  return { type: CLICK_CUSTOMER, id: id }
}

export function updateCustom() {
    return {type: UPDATE_CUSTOMER}
}

