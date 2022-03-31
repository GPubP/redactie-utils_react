import { FormikErrors, FormikValues } from 'formik';

export interface FormikOnChangeHandlerProps {
	delay?: number;
	onChange: (values: FormikValues) => void;
	onError?: (values: FormikValues, errors: FormikErrors<FormikValues>) => void;
	initialValues?: { [key: string]: any };
	values?: { [key: string]: any };
}
