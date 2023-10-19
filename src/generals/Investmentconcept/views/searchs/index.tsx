import Table from 'react-bootstrap/Table';
import { InvestmentconceptRepository } from '../../infrastructure';
import { type InvestmentconceptResponse } from '../../domain';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const index = (): JSX.Element => {
	const [investmentConcept, investmentConceptSet] = useState<InvestmentconceptResponse[]>([]);

	useEffect(() => {
		void loadMineralTypes();
	}, []);

	const loadMineralTypes = async (): Promise<void> => {
		const response = await InvestmentconceptRepository.findAll();

		investmentConceptSet(response);
		console.log('response: ', response);
	};

	return (
		<>
			<Row className="pt-2">
				<Col xs={12}>
					<Card>
						<Card.Header>Listado de Investmentconcept</Card.Header>
						<Card.Body>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>#</th>
										<th>Nombre</th>
										<th>Descripcion</th>
										<th>Estado</th>
									</tr>
								</thead>
								<tbody>
									{investmentConcept.length > 0 &&
										investmentConcept.map(investment => (
											<tr key={investment.id}>
												<td>{investment.id}</td>
												<td>{investment.name}</td>
												<td>{investment.description}</td>
												<td>
													<Badge pill bg={investment.state ? 'success' : 'danger'}>
														{investment.state ? 'Activo' : 'Elminado'}
													</Badge>
												</td>
											</tr>
										))}
								</tbody>
							</Table>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default index;
