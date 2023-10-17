import axios, { type AxiosResponse } from 'axios';
import { type InvestmentconceptResponse } from '../domain';

export const findAll = async (): Promise<AxiosResponse<InvestmentconceptResponse[]>> =>
	await axios.get<InvestmentconceptResponse[]>('https://localhost:7222/api/investmentconcept');