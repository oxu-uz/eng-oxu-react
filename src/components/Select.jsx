import React, { useLayoutEffect, useRef } from "react";
import classNames from "classnames";
import Choices from 'choices.js';

const Select = React.forwardRef(({
    value,
    id,
    className,
    size,
    disabled,
    required,
    name,
    multiple,
    onChange,
    placeholder,
    ...props
}, ref) => {
  const compClass = classNames({
    // Общие стили
    "block w-full text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 outline-none focus:border-primary-500 focus:dark:border-primary-600 focus:outline-offset-0 focus:outline-primary-200 focus:dark:outline-primary-950 disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed rounded transition-all focus:z-10": true,
  
    // Добавляем appearance-none и кастомную иконку:
    "appearance-none text-sm leading-4.5 pe-10 ps-4 py-1.5 h-9 bg-no-repeat bg-[right_0.75rem_center] bg-[length:1rem_1rem] bg-[url('/arr.svg')]":
      !multiple && !size,
  
    // Пример для sm-селекта (если нужно):
    // "appearance-none text-xs leading-4.5 pe-8 ps-3 py-1 h-8 bg-no-repeat bg-[right_0.5rem_center] bg-[length:1rem_1rem] bg-[url(\"data:image/svg+xml,...\")]": !multiple && size === "sm",
  
    // Для multiple оставляем без кастомной стрелки (или по желанию)
    "text-sm leading-5 pe-4 ps-4 pt-1.5 pb-4": multiple,
  
    // Ваш класс, если есть
    [`${className}`]: className,
  });
    return (
        <select
            ref={ref}
            className={compClass}
            id={id}
            value={value}
            disabled={disabled}
            required={required}
            name={name}
            multiple={multiple}
            onChange={onChange}
        >
            {props.children}
        </select>
    );
});

export default Select;

const SelectOption = ({ value, disabled, selected, className, ...props }) => {
    return (
        <option className={className} value={value} disabled={disabled}>
            {props.children}
        </option>
    );
};

Select.Option = SelectOption;

const SelectChoice = React.forwardRef((props, ref) => {
    const { multiple, disabled, className, placeholder, removeItemButton, shouldSort, search, searchPlaceholder, value, required, id } = props;
    const selectInput = useRef(null);
    useLayoutEffect(() => {
        new Choices(selectInput.current, {
            silent: true,
            allowHTML: false,
            searchEnabled: !!search,
            placeholder: true,
            placeholderValue: placeholder,
            searchPlaceholderValue: searchPlaceholder || "Search",
            shouldSort: shouldSort || false,
            removeItemButton: removeItemButton || false,
            itemSelectText: '',
            noResultsText: 'No results',
        });
    });
  
    return (
        <select
            id={id}
            value={value}
            className={className}
            ref={selectInput}
            multiple={multiple}
            disabled={disabled}
            required={required}
        >
            {placeholder && <option value="">{placeholder}</option>}
            {props.children}
        </select>
    );
});
  
Select.Choice = SelectChoice;
