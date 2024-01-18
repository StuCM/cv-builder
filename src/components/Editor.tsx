import GeneralInput from './GeneralInput';
import { Data, Education, Work } from '../types/types';
import InputController from './InputController';
import { MouseEventHandler } from 'react';
import { FaTrash } from 'react-icons/fa6';

interface EditorProps {
	handlers: {
		generalInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
		educationAdd: (education: Education) => void;
		educationEdit: (education: Education) => void;
		educationDelete: MouseEventHandler;
		educationChange: (event: React.MouseEvent<HTMLButtonElement>) => Education;
		workAdd: (work: Work) => void;
		workEdit: (work: Work) => void;
		workDelete: MouseEventHandler;
		workChange: (event: React.MouseEvent<HTMLButtonElement>) => Work;
		clearData: () => void;
	};
	data: Data;
}

const workInputs = [
	{ type: 'text', value: 'company', required: true },
	{ type: 'text', value: 'position', required: true },
	{ type: 'date', value: 'start' },
	{ type: 'date', value: 'end' },
	{ type: 'textarea', value: 'summary' },
];

const educationInputs = [
	{ type: 'text', value: 'school', required: true },
	{ type: 'text', value: 'degree', required: true },
	{ type: 'date', value: 'start' },
	{ type: 'date', value: 'end' },
];

function Editor({ handlers, data }: EditorProps) {
	const {
		generalInputChange,
		educationAdd,
		educationEdit,
		educationChange,
		educationDelete,
		workAdd,
		workEdit,
		workChange,
		workDelete,
		clearData,
	} = handlers;
	return (
		<div className='editor'>
			<div style={{ display: 'flex' }}>
				<h1>CV Builder</h1>
				<button className='iconButton' style={{ marginLeft: 'auto' }} onClick={clearData}>
					{' '}
					<span style={{ marginRight: '1rem' }}>Clear All</span> <FaTrash />
				</button>
			</div>
			<GeneralInput onChange={generalInputChange} data={data.general} />
			<InputController<Work>
				data={data.work}
				inputValues={workInputs}
				onAdd={workAdd}
				onEdit={workEdit}
				onChange={workChange}
				onDelete={workDelete}
			/>
			<InputController<Education>
				data={data.education}
				inputValues={educationInputs}
				onAdd={educationAdd}
				onEdit={educationEdit}
				onChange={educationChange}
				onDelete={educationDelete}
			/>
		</div>
	);
}

export default Editor;
