'use client';

import {ERRORS} from './errors';

export default function HomePageError({ error }: {error: Error}) {
	if (error.message === ERRORS.NOT_FOUND) {
		return (
			<div>
				<h1>Sorry, the page you requested was not found</h1>
			</div>
		);
	}
	else {
		return (
			<div>
				<h1>Something wet wrong</h1>
			</div>
		);
	}
}