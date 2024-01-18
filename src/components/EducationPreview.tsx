import { Education } from '../types/types';

interface EducationPreviewProps {
	education: Education[];
}

function EducationPreview({ education }: EducationPreviewProps) {
	const convertDate = (date: string) => {
		if (date === '') return '';
		return new Date(date).toLocaleString('en-GB', {
			month: 'short',
			year: 'numeric',
		});
	};
	return (
		<>
			{education.length !== 0 && (
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						marginBottom: '0.5rem',
					}}
				>
					<h2>Education</h2>
					<hr style={{ flexGrow: 1, marginLeft: '10px' }} />
				</div>
			)}
			{education?.map((ed: Education) => (
				<div style={{ marginBottom: '1rem' }} key={ed.id}>
					<div className='dates'>
						<h4>{ed.school}</h4>
						<span>
							{convertDate(ed.start)} {ed.start ? '-' : ''}{' '}
							{convertDate(ed.end)}
						</span>
					</div>
					<p style={{ marginLeft: '1rem' }}>{ed.degree}</p>
				</div>
			))}
		</>
	);
}

export default EducationPreview;
