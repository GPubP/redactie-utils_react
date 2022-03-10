import { Checkbox } from '@acpaas-ui/react-components';
import { FieldArray } from 'formik';
import React, { ChangeEvent, FC } from 'react';

import { CheckboxListProps } from './CheckboxList.types';

const CheckboxList: FC<CheckboxListProps> = ({
	name,
	options,
	required,
	disabled,
	value,
}: CheckboxListProps) => {
	console.log(value);
	return (
		<div className="a-input">
			<FieldArray name={name}>
				{({ push, remove }) => (
					<>
						{options.map((option) => (
							<Checkbox
								key={option.value}
								id={option.value}
								label={option.label}
								disabled={!!disabled}
								required={required}
								checked={Array.isArray(value) && value.includes(option.value)}
								onChange={(e: ChangeEvent<HTMLInputElement>) => {
									if (e.target.checked) {
										push(option.value);
									} else {
										const idx = value?.indexOf(option.value);
										idx && remove(idx);
									}
								}}
							/>
						))}
					</>
				)}
			</FieldArray>
		</div>
	);
};

export default CheckboxList;
