import { Container } from "react-bootstrap";
import { Outlet } from "react-router";

const Auth = (): JSX.Element => {
	return (
		<Container>
			<Outlet />
		</Container>
	);
};

export default Auth;