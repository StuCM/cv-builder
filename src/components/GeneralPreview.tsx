import { General } from '../types/types';
import { FaEnvelope, FaPhone } from 'react-icons/fa6';

function GeneralPreview({
	name,
	position,
	email,
	phone,
	description,
}: General) {
	return (
		<section>
			<h1>{name}</h1>
			<h2 className='position'>{position}</h2>
			{!email && !phone ? null : (
				<div className='infoBar'>
					{email && (
						<div>
							<FaEnvelope style={{ marginRight: '0.5rem' }} />
							<span>{email}</span>
						</div>
					)}
					{phone && (
						<div>
							<FaPhone style={{ marginRight: '0.5rem' }} />
							<p>{phone}</p>
						</div>
					)}
				</div>
			)}
			<p className='smallFont'>{description}</p>
		</section>
	);
}

export default GeneralPreview;
