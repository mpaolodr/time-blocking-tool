import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (e) {
			console.log(e.message)
			return initialValue
		}
	});

	const setValue = value => {
		try {
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (e) {
			console.log(e.message);

		}
	}

	return [storedValue, setValue]
}