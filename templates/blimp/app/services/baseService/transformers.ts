import camelCaseKeys from 'camelcase-keys-deep';
import snakeCaseKeys from 'decamelize-keys-deep';

export const requestTransformer = (data: any): string => {
  return (data !== undefined && data !== '' && JSON.stringify(snakeCaseKeys(data))) || data;
};

export const responseTransformer = (data: any) => {
  return (data && data !== ' ' && camelCaseKeys(JSON.parse(data))) || data;
};
