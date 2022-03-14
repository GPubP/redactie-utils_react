import { Checkbox } from '@acpaas-ui/react-components';
import classNames from 'classnames';
import { FieldArray } from 'formik';
import React, { ChangeEvent, FC } from 'react';

import { ErrorMessage } from '../ErrorMessage';

import { CheckboxListProps } from './CheckboxList.types';

const CheckboxList: FC<CheckboxListProps> = ({
	name,
	options,
	required,
	disabled,
	label,
	description,
	value,
}: CheckboxListProps) => {
	const labelClass = classNames('a-input', {
		'is-required': required,
	});

	return (
		<div className={labelClass}>
			<label className="a-input__label">{label}</label>
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
										remove(Number(idx));
									}
								}}
							/>
						))}
					</>
				)}
			</FieldArray>
			{description && <small>{description}</small>}
			<ErrorMessage name={name} />
		</div>
	);
};

export default CheckboxList;
