import axios, { type AxiosResponse } from 'axios';

import { API_BASE_URL } from '@/core/constants/env';
import { InvestmentconceptResponse } from '../domain';

export const findAll = async (): Promise<InvestmentconceptResponse[]> => {
	const response: AxiosResponse<InvestmentconceptResponse[]> = await axios.get<
		InvestmentconceptResponse[]
	>(`${API_BASE_URL}/api/investmentconcept`);

	return response.data;
};
