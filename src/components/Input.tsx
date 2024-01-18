export interface InputProps {
	type: string;
	id: string;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	required?: boolean;
}

function Input({ type, id, value, onChange, required }: InputProps) {
	const capitalisedId = id.charAt(0).toUpperCase() + id.slice(1);

	const handleKeyPress = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			event.preventDefault();
		}
	};

	return type === 'textarea' ? (
		<div>
			<label htmlFor={id}>{capitalisedId}</label>
			<textarea id={id} name={id} value={value} onChange={onChange} onKeyDown={handleKeyPress} />
		</div>
	) : (
		<div>
			<label htmlFor={id}>{capitalisedId}</label>
			<input
				type={type}
				id={id}
				name={id}
				value={value}
				onChange={onChange}
				onKeyDown={handleKeyPress}
				required={required}
			/>
		</div>
	);
}

export default Input;
