"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colorPicker = (isDefault) => {
    if (isDefault) {
        return `rgba(0,0,0,1)`;
    }
    const r = parseInt(`${Math.random() * 255}`);
    const g = parseInt(`${Math.random() * 255}`);
    const b = parseInt(`${Math.random() * 255}`);
    const a = Math.random();
    return `rgba(${r},${g},${b},${a})`;
};
exports.default = colorPicker;
