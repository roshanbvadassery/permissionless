import useMouse from '@react-hook/mouse-position';
import { FC, useContext } from 'react';
import { MouseContext } from '../../../context/mouse-context';
import s from './CustomCursor.module.scss';

const CustomCursor: FC = () => {
	let rootNode = null;
	if (typeof document !== 'undefined') {
		rootNode = document.getElementById('__next');
	}
	const { cursorType } = useContext(MouseContext);
	const mouse = useMouse(rootNode, {
		enterDelay: 100,
		leaveDelay: 100,
	});

	return (
		<>
			{/* <div
        style={{ left: `${mouse.x}px`, top: `${mouse.y}px` }}
        className={s.ring}
      ></div> */}
			<div
				className={`${s.cursor} ${s[cursorType]}`}
				style={{ left: `${mouse.clientX}px`, top: `${mouse.clientY}px` }}
			></div>
		</>
	);
};

export default CustomCursor;
