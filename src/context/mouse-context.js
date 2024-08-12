import { createContext, useState } from 'react';

export const MouseContext = createContext({
	cursorType: '',
	cursorChangeHandler: (cursorType) => {},
});

const MouseContextProvider = (props) => {
	const [cursorType, setCursorType] = useState('hi');

	const cursorChangeHandler = (cursorType) => {
		setCursorType(cursorType);
	};

	return (
		<MouseContext.Provider
			value={{
				cursorType: cursorType,
				cursorChangeHandler: cursorChangeHandler,
			}}
		>
			{props.children}
		</MouseContext.Provider>
	);
};

export default MouseContextProvider;
