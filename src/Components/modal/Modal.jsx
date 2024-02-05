import { Button } from "../ul/button/Button";
import scss from "./Modal.module.scss";

export const Modal = ({ children, isOpen }) => {
	return (
		<div className={scss.containerModal}>
			<div className={scss.content}>
				<div className={scss.texts}>{children}</div>
				<div className={scss.buttons}>
					<Button onClick={isOpen}>Закройте модальное окно</Button>
				</div>
			</div>
		</div>
	);
};
