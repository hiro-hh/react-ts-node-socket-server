
const colorPicker = (isDefault?: boolean): string => {
  if (isDefault) {
    return `rgba(0,0,0,1)`
  }
  const r = parseInt(`${Math.random() * 255}`);
  const g = parseInt(`${Math.random() * 255}`);
  const b = parseInt(`${Math.random() * 255}`);
  const a = Math.random();

  return `rgba(${r},${g},${b},${a})`
}

export default colorPicker;  