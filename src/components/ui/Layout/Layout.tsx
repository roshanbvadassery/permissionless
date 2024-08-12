import { FC } from 'react';
import CustomCursor from '../CustomCursor';
import s from './Layout.module.scss';

interface Props {
	className?: string;
	children?: any;
}
export const Layout: FC<Props> = ({ className = '', children }) => {
	return (
		<div className={`${className}`}>
			<main className={s.content}>{children}</main>
			<CustomCursor />
		</div>
	);
};

export default Layout;
