import { Work } from '../types/types';

interface WorkPreviewProps {
	work: Work[];
}

function WorkPreview({ work }: WorkPreviewProps) {
	const convertDate = (date: string) => {
		if (date === '') return '';
		return new Date(date).toLocaleString('en-GB', {
			month: 'short',
			year: 'numeric',
		});
	};
	return (
		<>
			{work.length !== 0 && (
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						marginBottom: '0.5rem',
					}}
				>
					<h2>Experience</h2>
					<hr style={{ flexGrow: 1, marginLeft: '10px' }} />
				</div>
			)}
			{work?.map((job: Work) => (
				<div style={{ marginBottom: '1rem' }} key={job.id}>
					<div className='itemHeader'>
						<div>
							<h3>
								{job.position} <span> - {job.company}</span>
							</h3>
						</div>
						<div className='dates'>
							<span>
								{convertDate(job.start)} {job.start ? '-' : ''}{' '}
								{convertDate(job.end)}
							</span>
						</div>
					</div>
					<p>{job.summary}</p>
				</div>
			))}
		</>
	);
}

export default WorkPreview;
